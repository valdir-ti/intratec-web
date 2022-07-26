import React from 'react'

import noImage from '../../assets/no-image-icon.jpg'

import * as S from './styles'

interface FormImageProps {
    name: string
    file: File | null
    fileUrl: string
    alt: string
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormImage = ({ name, file, alt, fileUrl, label, onChange}: FormImageProps) => {
  return (
    <>
        <S.ContainerImg>
            <S.ContainerContentImg
            src={file ? URL.createObjectURL(file) : fileUrl || noImage}
            alt={alt}
            />
        </S.ContainerImg>

        <S.FormInputContainer>
            <S.FormLabel htmlFor={name}>{label}<S.FormDriveFolderIcon/></S.FormLabel>
            <S.FormInput
                id={name}
                type={name}
                style={{ display: 'none'}}
                onChange={onChange}
            />
        </S.FormInputContainer>
    </>
  )
}

export default FormImage