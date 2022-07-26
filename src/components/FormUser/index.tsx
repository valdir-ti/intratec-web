import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

import { db, storage } from '../../firebase';
import { doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

import Toaster from '../Toaster';
import FormField from '../FormField';
import Layout from '../../pages/Layout';
import FormCheckbox from '../FormCheckbox';
import CustomizedProgressBars from '../CustomizedCirculrProgress';

import noImage from '../../assets/no-image-icon.jpg'

import * as S from './styles';

interface LocationProps {
    id: string;
    displayname: string;
    username: string;
    email: string;
    phone: string;
    password: string;
    address: string;
    country: string;
    img: string;
    isActive: boolean;
    isAdmin: boolean;
}

interface Props {
    title: string;
    isEditing?: boolean;
}

const FormUser = ({ title, isEditing }: Props) => {

    const navigate = useNavigate()
    const location = useLocation()
    const state = location.state as LocationProps

    const [id, setId] = useState<string>(state?.id || "");
    const [file, setFile] = useState<any>(null);
    const [fileUrl, setFileUrl] = useState("");
    const [displayname, setDisplayname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState<boolean>(false)
    const [percentage, setPercentage] = useState<any>(null)
    const [toasterMessage, setToasterMessage] = useState<string>("")
    const [toasterSeverity, setToasterSeverity] = useState<string>("")

    async function handleFormSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true)

        if(!fileUrl) {
            toasterStart("error", "Selecione um arquivo")
            setLoading(false)
            return
        }

        if(!displayname || !username || !email || !password) {
            toasterStart("error", "Preencha todos os campos obrigatórios (*)")
            setLoading(false)
            return
        }

        try {
            const userId = uuidv4()
            await setDoc(doc(db, "users", userId), {
                displayname,
                username,
                email,
                phone,
                password,
                address,
                country,
                isActive,
                isAdmin,
                img: fileUrl,
                id: userId,
                timestamp: serverTimestamp(),
            });
            toasterStart("success", "Item cadastrado com sucesso!")
            setTimeout(() => {
                navigate('/users')
            }, 1500)
        } catch (err: any) {
            console.log('Error => ', err)
            if(err.code === "auth/email-already-in-use"){
                toasterStart("error", "E-mail já cadastrado")
                setLoading(false)
            }
        }

    }

    async function handleFormUpdate(e: FormEvent) {
        e.preventDefault();
        setLoading(true)

        if(!fileUrl) {
            toasterStart("error", "Selecione um arquivo")
            setLoading(false)
            return
        }

        if(!displayname || !username || !email || !password) {
            toasterStart("error", "Preencha todos os campos obrigatórios (*)")
            setLoading(false)
            return
        }

        try {
            await updateDoc(doc(db, "users", id), {
                displayname,
                username,
                email,
                phone,
                password,
                address,
                country,
                img: fileUrl,
                isActive,
                isAdmin,
                timestamp: serverTimestamp(),
            });
            toasterStart("success", "Item atualizado com sucesso!")
            setTimeout(() => {
                navigate('/users')
            }, 1500)
        } catch (err: any) {
            console.log('Error => ', err)
            if(err.code === "auth/email-already-in-use"){
                toasterStart("error", "E-mail já cadastrado")
                setLoading(false)
            }
        }
    }

    function handleFile(e: any) {
        if(!e.target.files) return
        setFile(e.target.files[0])
    }

    function toasterStart(severity: string, message: string){
        setToasterSeverity(severity)
        setToasterMessage(message)
        setOpen(true)
    }

    function handleClose (event?: React.SyntheticEvent | Event, reason?: string) {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    useEffect(() => {
        const uploadFile = () => {
            const name = uuidv4()
            const storageRef = ref(storage, String(name));
            const uploadTask = uploadBytesResumable(storageRef, file!);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setPercentage(progress)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log('Error => ', error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setFileUrl(downloadURL)
                    });
                }
            );

        }
        file && uploadFile()
    }, [file])

    useEffect(() => {
        if(state) {
            const { id, displayname, username, email, phone, password, address, country, isActive, isAdmin } = state
            setId(id)
            setDisplayname(displayname)
            setUsername(username)
            setEmail(email)
            setPhone(phone)
            setPassword(password)
            setAddress(address)
            setCountry(country)
            setFileUrl(state.img)
            setIsActive(isActive)
            setIsAdmin(isAdmin)
        }

    }, [state])

    return (
        <Layout>
            <S.Form onSubmit={isEditing ? handleFormUpdate : handleFormSubmit}>
                <S.Title>{title}</S.Title>

                <S.ContainerImg>
                    <S.ContainerContentImg
                    src={file ? URL.createObjectURL(file) : fileUrl || noImage}
                    alt="Imagem do usuário"
                    />
                </S.ContainerImg>

                <S.FormInputContainer>
                    <S.FormLabel htmlFor='file'>User Image:<S.FormDriveFolderIcon/></S.FormLabel>
                    <S.FormInput
                        id="file"
                        type="file"
                        style={{ display: 'none'}}
                        onChange={(e) => handleFile(e)}
                    />
                </S.FormInputContainer>
                <FormField
                    label='Fullname'
                    obrigatory
                    type='text'
                    placeholder='Full Name'
                    autoComplete='off'
                    value={displayname}
                    onChange={(e) => setDisplayname(e.target.value)}
                />
                <FormField
                    label='Username'
                    obrigatory
                    type='text'
                    placeholder='Username'
                    autoComplete='off'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <FormField
                    label='Email'
                    obrigatory
                    type='email'
                    placeholder='Email'
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormField
                    label='Phone'
                    type='text'
                    placeholder='Phone'
                    autoComplete='off'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <FormField
                    label='Password'
                    obrigatory
                    type='password'
                    placeholder='********'
                    autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormField
                    label='Address'
                    type='text'
                    placeholder='Address'
                    autoComplete='off'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <FormField
                    label='Country'
                    type='text'
                    placeholder='Country'
                    autoComplete='off'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <FormCheckbox
                    label='isActive'
                    checked={isActive}
                    type='checkbox'
                    onChange={() => setIsActive(!isActive)}
                />
                <FormCheckbox
                    label='isAdmin'
                    checked={isAdmin}
                    type='checkbox'
                    onChange={() => setIsAdmin(!isAdmin)}
                />
                <S.FormButtonContainer>
                    <S.FormButton
                        disabled={percentage < 100}
                    >
                        {loading ? <CustomizedProgressBars size={16}/> : isEditing ? 'Edit' : 'Save'}
                    </S.FormButton>
                </S.FormButtonContainer>
            </S.Form>
            <Toaster
                open={open}
                title={toasterMessage}
                severity={toasterSeverity}
                onClose={handleClose}
            />
        </Layout>
    )
}

export default FormUser