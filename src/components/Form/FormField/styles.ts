import styled from "styled-components";

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