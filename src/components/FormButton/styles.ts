import styled from "styled-components";

export const FormButtonContainer = styled.div``
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
        color: ${props => props.theme.colors.activeText};
    }
`