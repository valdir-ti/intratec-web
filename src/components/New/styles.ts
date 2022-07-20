import styled from "styled-components";
import { DriveFolderUploadOutlined } from '@mui/icons-material'

export const Container = styled.div``
export const Top = styled.div`
    padding: 10px;
    margin: 20px;
    text-align: left;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 1px 8px -3px rgba(201, 201, 201, 0.47);

    @media only screen and (max-width: 880px) {
        text-align: center;
    }
`
export const TopTitle = styled.h1`
    color: ${props => props.theme.colors.text};
    font-size: 20px;
`
export const Bottom = styled.div`
    padding: 10px;
    margin: 20px;
    display: flex;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 1px 8px -3px rgba(201, 201, 201, 0.47);

    @media only screen and (max-width: 880px) {
        flex-direction: column;
    }
`
export const BottomLeft = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    @media only screen and (max-width: 880px) {
        margin-top: 10px;
        margin-bottom: 30px;
    }
`
export const BottomLeftImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`

export const BottomRight = styled.div`
    flex: 2;
`
export const BottomRightForm = styled.form`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    @media only screen and (max-width: 880px) {
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (max-width: 280px) {
        align-items: flex-start;
    }
`
export const BottomRightFormInputContainer = styled.div`
    width: 45%;
    @media only screen and (max-width: 880px) {
        width: 90%;
    }
    @media only screen and (max-width: 280px) {
        width: 100%;
    }
`
export const BottomRightFormImageContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`
export const BottomRightFormInput = styled.input`
    width: 100%;
    padding: 5px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.text};
    border-radius: 2px;
    margin-top: 5px;
`
export const BottomRightFormLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const BottomRightFormDriveFolderIcon = styled(DriveFolderUploadOutlined)`
    cursor: pointer;
`
export const BottomRightFormButtonContainer = styled.div`
    width: 100%;
    display: flex;
    padding-left: 2%;
    margin-bottom: 10px;
    @media only screen and (max-width: 880px) {
        padding-left: 30px;
    }
    @media only screen and (max-width: 550px) {
        padding-left: 5%;
    }
    @media only screen and (max-width: 280px) {
        padding-left: 0px;
    }
`
export const BottomRightFormButton = styled.button`
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