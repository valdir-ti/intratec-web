import { useEffect, useState } from 'react';

import { auth, db, storage } from '../../firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

import Layout from '../../pages/Layout'

import * as S from './styles'
import CustomizedProgressBars from '../CustomizedCirculrProgress';

interface INew {
    inputs: any;
    title: string;
}

const New = ({ inputs, title }: INew) => {

    const [file, setFile] = useState<File | null>()
    const [data, setData] = useState<any>({})
    const [percentage, setPercentage] = useState<any>(null)

    const handleFile = (e: any) => {
        if(!e.target.files) return
        setFile(e.target.files[0])
    }

    const handleAdd = async (e: any) => {
        e.preventDefault()

        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timestamp: serverTimestamp(),
            });
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
                        setData({...data, photoUrl: downloadURL})
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
                                    disabled={validatePercentage}
                                    type='submit'
                                >
                                    {validatePercentage ? <CustomizedProgressBars size={16}/> : 'Send'}
                                </S.BottomRightFormButton>
                            </S.BottomRightFormButtonContainer>
                        </S.BottomRightForm>
                    </S.BottomRight>
                </S.Bottom>
            </S.Container>
        </Layout>
    )
}

export default New