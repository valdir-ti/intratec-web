import styled from "styled-components";

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
export const FormLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
`