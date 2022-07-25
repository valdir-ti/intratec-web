import styled from "styled-components";
import { DriveFolderUploadOutlined } from '@mui/icons-material'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h2`
    font-style: 22px;
    margin-bottom: 1rem;
    margin-top: 1rem;
`
export const FormInputContainer = styled.div`
    width: 45%;
    margin: 5px;
    @media only screen and (max-width: 880px) {
        width: 90%;
    }
    @media only screen and (max-width: 280px) {
        width: 100%;
    }
`
export const FormLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const FormInput = styled.input`
    width: 100%;
    height: 35px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.text};
    border-radius: 2px;
    margin-top: 5px;
`
export const FormInputCheckboxContainer = styled.div`
    width: 45%;
    margin: 5px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 880px) {
        width: 90%;
    }
    @media only screen and (max-width: 280px) {
        width: 100%;
    }
`
export const FormInputCheckbox = styled.input`
    margin-left: 1rem;
`
export const Input = styled.input``
export const ContainerImg = styled.div`
    padding: 1rem;
`
export const ContainerContentImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`
export const FormDriveFolderIcon = styled(DriveFolderUploadOutlined)`
    cursor: pointer;
`
export const ImgInput = styled.img``
export const FormButtonContainer = styled.div`
`
export const FormButton = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.secondText};
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-top: 10px;
    &:hover {
        background-color: ${props => props.theme.colors.secondBackground};
        color: ${props => props.theme.colors.hover};
    }
    &:disabled {
        background-color: ${props => props.theme.colors.activeBackground};
    }
`