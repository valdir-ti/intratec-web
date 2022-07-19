import { useState } from 'react';
import Layout from '../../pages/Layout'

import * as S from './styles'

interface INew {
    inputs: any;
    title: string;
}

const New = ({ inputs, title }: INew) => {

    const [file, setFile] = useState<File | null>()

    const handleFile = (e: any) => {
        if(!e.target.files) return
        setFile(e.target.files[0])
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
                        <S.BottomRightForm>
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
                                    <S.BottomRightFormInput type={input.type} placeholder={input.placeholder}/>
                                </S.BottomRightFormInputContainer>
                            ))}

                            <S.BottomRightFormButtonContainer>
                                <S.BottomRightFormButton>Send</S.BottomRightFormButton>
                            </S.BottomRightFormButtonContainer>
                        </S.BottomRightForm>
                    </S.BottomRight>
                </S.Bottom>
            </S.Container>
        </Layout>
    )
}

export default New