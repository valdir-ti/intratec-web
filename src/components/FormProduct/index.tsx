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
    title: string;
    description: string;
    specifications: string;
    price: string;
    stock: number;
    img: string;
    isActive: boolean;
}

interface Props {
    header: string;
    isEditing?: boolean;
    slug: string;
}

const FormProduct = ({ header, isEditing, slug }: Props) => {

    const navigate = useNavigate()
    const location = useLocation()
    const state = location.state as LocationProps

    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState("");
    const [title, setTitle] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [file, setFile] = useState<any>(null);
    const [isActive, setIsActive] = useState(false);
    const [description, setDescription] = useState("");
    const [id, setId] = useState<string>(state?.id || "");
    const [specifications, setSpecifications] = useState("");

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

        if(!title || !price || !description || !stock) {
            toasterStart("error", "Preencha todos os campos obrigatórios (*)")
            setLoading(false)
            return
        }

        try {
            const itemId = uuidv4()
            await setDoc(doc(db, slug, itemId), {
                title,
                price,
                description,
                specifications,
                stock,
                isActive,
                img: fileUrl,
                id: itemId,
                timestamp: serverTimestamp(),
            });
            toasterStart("success", "Item cadastrado com sucesso!")
            setTimeout(() => {
                navigate(`/${slug}`)
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

        if(!title || !price || !description) {
            toasterStart("error", "Preencha todos os campos obrigatórios (*)")
            setLoading(false)
            return
        }

        try {
            await updateDoc(doc(db, slug, id), {
                title,
                price,
                description,
                specifications,
                stock,
                isActive,
                img: fileUrl,
                timestamp: serverTimestamp(),
            });
            toasterStart("success", "Item atualizado com sucesso!")
            setTimeout(() => {
                navigate(`/${slug}`)
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
            const { id, title, price, description, specifications, stock, isActive, img } = state
            setId(id)
            setTitle(title)
            setPrice(price)
            setDescription(description)
            setSpecifications(specifications)
            setStock(stock)
            setFileUrl(img)
            setIsActive(isActive)
        }
    }, [state])

    return (
        <Layout>
            <S.Form onSubmit={isEditing ? handleFormUpdate : handleFormSubmit}>
                <S.Title>{header}</S.Title>

                <S.ContainerImg>
                    <S.ContainerContentImg
                    src={file ? URL.createObjectURL(file) : fileUrl || noImage}
                    alt="Imagem do produto"
                    />
                </S.ContainerImg>

                <S.FormInputContainer>
                    <S.FormLabel htmlFor='file'>Product Image:<S.FormDriveFolderIcon/></S.FormLabel>
                    <S.FormInput
                        id="file"
                        type="file"
                        style={{ display: 'none'}}
                        onChange={(e) => handleFile(e)}
                    />
                </S.FormInputContainer>
                <FormField
                    label='Title'
                    obrigatory
                    type='text'
                    placeholder='Title'
                    value={title}
                    autoComplete='off'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <FormField
                    label='Price'
                    obrigatory
                    type='text'
                    placeholder='Price'
                    value={price}
                    autoComplete='off'
                    onChange={(e) => setPrice(e.target.value)}
                />
                <FormField
                    label='Description'
                    obrigatory
                    type='text'
                    placeholder='Description'
                    value={description}
                    autoComplete='off'
                    onChange={(e) => setDescription(e.target.value)}
                />
                <FormField
                    label='Specifications'
                    type='text'
                    placeholder='Specifications'
                    value={specifications}
                    autoComplete='off'
                    onChange={(e) => setSpecifications(e.target.value)}
                />
                <FormField
                    label='Stock'
                    obrigatory
                    type='number'
                    value={stock}
                    onChange={(e) => setStock(+e.target.value)}
                />

                <FormCheckbox
                    label='isActive'
                    checked={isActive}
                    type='checkbox'
                    onChange={() => setIsActive(!isActive)}
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

export default FormProduct