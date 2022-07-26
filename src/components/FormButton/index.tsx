import CustomizedProgressBars from '../CustomizedCirculrProgress'

import * as S from './styles'

interface FormButtonProps {
    loading: boolean;
    disabled: boolean;
    label: string;
}

const FormButton = ({ label, loading, disabled }: FormButtonProps) => {
  return (
    <S.FormButtonContainer>
        <S.FormButton
            disabled={disabled}
        >
            {loading ? <CustomizedProgressBars size={16}/> : label}
        </S.FormButton>
    </S.FormButtonContainer>
  )
}

export default FormButton