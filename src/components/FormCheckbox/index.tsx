import React from 'react'

import * as S from './styles'

interface FormCheckboxProps {
    label: string
    checked: boolean
    type?: 'checkbox' | 'radio'
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormCheckbox = ({ label, checked, type, onChange }: FormCheckboxProps) => {
    return (
        <S.FormInputCheckboxContainer>
            <S.FormLabel htmlFor={label}>{label}:</S.FormLabel>
            <S.FormInputCheckbox
                id={label}
                type={type}
                checked={checked}
                onChange={onChange}
            />
        </S.FormInputCheckboxContainer>
    )
}

export default FormCheckbox
