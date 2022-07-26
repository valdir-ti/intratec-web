import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

import { db, storage } from '../../firebase';
import { doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

import Toaster from '../Toaster';
import Layout from '../../pages/Layout'
import CustomizedProgressBars from '../CustomizedCircularProgress';

import noImage from '../../assets/no-image-icon.jpg'

import * as S from './styles'

interface INew {
    inputs: any;
    title: string;
}

const New = ({ inputs, title}: INew) => {

    const navigate = useNavigate()
    const location = useLocation()

    const [file, setFile] = useState<File | null>()
    const [data, setData] = useState<any>(null)
    const [percentage, setPercentage] = useState<any>(null)
    const [toasterMessage, setToasterMessage] = useState<string>("")
    const [toasterSeverity, setToasterSeverity] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    const handleFile = (e: any) => {
        if(!e.target.files) return
        setFile(e.target.files[0])
    }

    const handleEdit = async (e: any) => {
        e.preventDefault()
        setLoading(true)

        if(!data.img){
            toasterStart("error", "Selecione um arquivo")
            setLoading(false)
            return
        }

        if(!data.displayname || !data.email || !data.username || !data.password){
            toasterStart("error", "Preencha todos os campos obrigatórios")
            setLoading(false)
            return
        }

        if(JSON.stringify(data) !== JSON.stringify(location.state)){
            const usersRef = doc(db, "users", data.id);
            await updateDoc(usersRef, {
                ...data,
            });
            toasterStart("success", "Item atualizado com sucesso!")
            setTimeout(() => {
                navigate('/users')
            }, 1500)
        }
    }

    const handleAdd = async (e: any) => {
        e.preventDefault()
        setLoading(true)

        if(!file){
            toasterStart("error", "Selecione um arquivo")
            setLoading(false)
            return
        }

        if(!data.displayname || !data.email || !data.username || !data.password){
            toasterStart("error", "Preencha todos os campos obrigatórios")
            setLoading(false)
            return
        }

        try {
            const userId = uuidv4()
            await setDoc(doc(db, "users", userId), {
                ...data,
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

    function toasterStart(severity: string, message: string){
        setToasterSeverity(severity)
        setToasterMessage(message)
        setOpen(true)
    }

    const handleInput = (e: any) => {
        const id = e.target.id
        const value = e.target.value

        if(id === "isAdmin" || id === "isActive"){
            setData({...data, [id]: e.target.checked})
        }else{
            setData({...data, [id]: value})
        }
    }

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
                        setData({...data, img: downloadURL})
                    });
                }
            );

        }
        file && uploadFile()
    }, [file])

    useEffect(() => {
        if(location.state){
            setIsEditing(true)
            setData(location.state)
        }
    }, [location.state])

    const validatePercentage = percentage !== null && percentage < 100

    const disableButton = JSON.stringify(data) === JSON.stringify(location.state) || validatePercentage || loading

    return (
        <Layout>
            <S.Container>
                <S.Top>
                    <S.TopTitle>{title} {isEditing && `- ${data?.displayname}`}</S.TopTitle>
                </S.Top>
                <S.Bottom>
                    <S.BottomLeft>
                        <S.BottomLeftImg
                            src={file ? URL.createObjectURL(file) : data?.img || noImage}
                            alt="Image"
                        />
                    </S.BottomLeft>
                    <S.BottomRight>
                        <S.BottomRightForm onSubmit={isEditing ? handleEdit : handleAdd}>
                            <S.BottomRightFormInputContainer>
                                <S.BottomRightFormImageContainer>
                                    <S.BottomRightFormLabel htmlFor='file'>
                                        Image:<S.BottomRightFormDriveFolderIcon />
                                    </S.BottomRightFormLabel>
                                    <S.BottomRightFormInput
                                        type="file"
                                        id="file"
                                        style={{ display: 'none'}}
                                        onChange={(e) => handleFile(e)}
                                    />
                                </S.BottomRightFormImageContainer>
                            </S.BottomRightFormInputContainer>

                            {inputs.map((input: any, index: number) => (
                                <S.BottomRightFormInputContainer key={index} className={input.containerClass}>
                                    <S.BottomRightFormLabel htmlFor={input.id} className={input.labelClass}>{input.label}:</S.BottomRightFormLabel>
                                    <S.BottomRightFormInput
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleInput}
                                        value={data && data[input.id]}
                                        autoComplete="off"
                                        className={input.inputClass}
                                        checked={data && data[input.id]}
                                    />
                                </S.BottomRightFormInputContainer>
                            ))}

                            <S.BottomRightFormButtonContainer>
                                <S.BottomRightFormButton
                                    disabled={disableButton}
                                    type='submit'
                                >
                                    {validatePercentage || loading ? <CustomizedProgressBars size={16}/> : isEditing ? 'Edit' : 'Save'}
                                </S.BottomRightFormButton>
                            </S.BottomRightFormButtonContainer>
                        </S.BottomRightForm>
                    </S.BottomRight>
                </S.Bottom>
            </S.Container>
            <Toaster
                open={open}
                title={toasterMessage}
                severity={toasterSeverity}
                onClose={handleClose}
            />
        </Layout>
    )
}

export default New