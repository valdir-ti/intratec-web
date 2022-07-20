import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { auth, db, storage } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

import Toaster from '../Toaster';
import Layout from '../../pages/Layout'
import CustomizedProgressBars from '../CustomizedCirculrProgress';

import * as S from './styles'

interface INew {
    inputs: any;
    title: string;
}

const New = ({ inputs, title }: INew) => {

    const navigate = useNavigate();

    const [file, setFile] = useState<File | null>()
    const [data, setData] = useState<any>({})
    const [percentage, setPercentage] = useState<any>(null)
    const [toasterMessage, setToasterMessage] = useState<string>("")
    const [toasterSeverity, setToasterSeverity] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

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

    const handleAdd = async (e: any) => {
        e.preventDefault()
        setLoading(true)

        if(!file){
            setToasterMessage("Selecione um arquivo")
            setToasterSeverity("error")
            setOpen(true)
            setLoading(false)
            return
        }

        if(!data.displayname || !data.email || !data.username || !data.password){
            setToasterMessage("Preencha todos os campos obrigatórios")
            setToasterSeverity("error")
            setOpen(true)
            setLoading(false)
            return
        }

        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timestamp: serverTimestamp(),
            });
            navigate('/users')
        } catch (err) {
            console.log('Error => ', err)
        }
    }

    const handleInput = (e: any) => {
        const id = e.target.id
        const value = e.target.value
        setData({...data, [id]: value})
    }

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + Math.floor(Math.random() * 1000);
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

    const validatePercentage = percentage !== null && percentage < 100

    return (
        <Layout>
            <S.Container>
                <S.Top>
                    <S.TopTitle>{title}</S.TopTitle>
                </S.Top>
                <S.Bottom>
                    <S.BottomLeft>
                        <S.BottomLeftImg
                            src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                            alt="Image"
                        />
                    </S.BottomLeft>
                    <S.BottomRight>
                        <S.BottomRightForm onSubmit={handleAdd}>
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
                                <S.BottomRightFormInputContainer key={index}>
                                    <S.BottomRightFormLabel>{input.label}:</S.BottomRightFormLabel>
                                    <S.BottomRightFormInput
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleInput}
                                    />
                                </S.BottomRightFormInputContainer>
                            ))}

                            <S.BottomRightFormButtonContainer>
                                <S.BottomRightFormButton
                                    disabled={validatePercentage || loading}
                                    type='submit'
                                >
                                    {validatePercentage || loading ? <CustomizedProgressBars size={16}/> : 'Send'}
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