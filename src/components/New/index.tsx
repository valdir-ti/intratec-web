import { useState } from 'react';

import { auth, db } from '../../firebase';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'


import Layout from '../../pages/Layout'

import * as S from './styles'

interface INew {
    inputs: any;
    title: string;
}

const New = ({ inputs, title }: INew) => {

    const [file, setFile] = useState<File | null>()
    const [data, setData] = useState<any>({})

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
                                <S.BottomRightFormButton type='submit'>Send</S.BottomRightFormButton>
                            </S.BottomRightFormButtonContainer>
                        </S.BottomRightForm>
                    </S.BottomRight>
                </S.Bottom>
            </S.Container>
        </Layout>
    )
}

export default New