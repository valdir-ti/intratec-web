import styled from "styled-components";
import { Google, Facebook, GitHub } from '@mui/icons-material'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 97vh;
    width: 98vw;
    font-family: 'Roboto', sans-serif;
    @media only screen and (max-width: 550px) {
        flex-direction: column-reverse;
        width: 96vw;
        height: 97vh;
    }
`
export const ColumnOne = styled.div`
    height: 500px;
    width: 350px;
    @media only screen and (max-width: 550px) {
        height: 250px;
    }
`
export const Background = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    @media only screen and (max-width: 550px) {
        border-bottom-right-radius: 5px;
        border-top-left-radius: 0px;
    }
`
export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 5px;
    @media only screen and (max-width: 550px) {
        width: 75%;
    }
`
export const RememberLabel = styled.label`
    display: flex;
`
export const RememberInput = styled.input`
    font-size: 10px;
    font-weight: 500;
    cursor: pointer;
    padding: 0;
    margin: 0;
`
export const RememberText = styled.h1`
    font-size: 10px;
    font-weight: 500;
    margin-left: 5px;
    cursor: pointer;
`
export const ForgotButton = styled.a`
    font-weight: 500;
    font-size: 10px;
    cursor: pointer;
`

export const ColumnTwo = styled.div`
    height: 500px;
    width: 350px;
    background-color: #dddddd73;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    position: relative;
    @media only screen and (max-width: 550px) {
        height: 350px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 0px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 250px;
    @media only screen and (max-width: 550px) {
        height: 75%;
        justify-content: space-evenly;
    }
`
export const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    color: #a1a4a9;
    @media only screen and (max-width: 550px) {
        margin-bottom: 10px;
    }
`

export const Input = styled.input`
    width: 200px;
    height: 35px;
    margin: 10px;
    border-radius: 5px;
    border-width: 0.1px;
    margin: 10px 0;
    padding: 5px;
    &:focus{
        outline: none;
    }
    @media only screen and (max-width: 550px) {
        width: 250px;
    }
`
export const Button = styled.button`
    background-color: purple;
    color: #fff;
    border: none;
    cursor: pointer;
    font-weight: bold;
    width: 212px;
    height: 40px;
    margin: 0px;
    border-radius: 5px;
    border-width: 1px;
    padding: 5px;
    @media only screen and (max-width: 550px) {
        width: 260px;
        margin-bottom: 10px;
    }
`
export const Error = styled.div`
    position: absolute;
    font-size: 12px;
    color: red;
    font-weight: bold;
    bottom: 150px;
    @media only screen and (max-width: 550px) {
        bottom: 80px;
    }
`
export const SocialLogin = styled.div`
    margin-top: 20px;
`
export const SocialLoginTitle = styled.h1`
    font-weight: 500;
    font-size: 12px;
    color: #a1a4a9;
`
export const SocialLoginIcons = styled.div`
    display: flex;
    justify-content: space-between;
`
export const SocialIconGithub = styled(GitHub)`
    color: #a1a4a9;
    cursor: pointer;
`
export const SocialIconGoogle = styled(Google)`
    color: #a1a4a9;
    cursor: pointer;
`
export const SocialIconFacebook = styled(Facebook)`
    color: #a1a4a9;
    cursor: pointer;
`