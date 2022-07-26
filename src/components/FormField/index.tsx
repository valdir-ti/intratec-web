import React from 'react'

import * as S from './styles'

interface FormFieldProps {
    label: string
    obrigatory?: boolean
    type: string
    placeholder?: string
    autoComplete?: string
    value?: string | number
    checked?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormField = ({ label, placeholder, type, autoComplete, obrigatory, value, onChange}: FormFieldProps) => {
    return (
        <S.FormInputContainer>
            <S.FormLabel>{label} {obrigatory && '(*)'}:</S.FormLabel>
            <S.FormInput
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
            />
        </S.FormInputContainer>
    )
}

export default FormField