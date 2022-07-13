import styled from "styled-components";
import { Dialog } from '@mui/material';

export const Container = styled(Dialog)``;

const Button = styled.button`
    border-radius: 5px;
    width: 75px;
    height: 30px;
    font-weight: 700;
    border: 1px solid #ddd;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const DialogYesButton = styled(Button)`
    background-color: #0b830b;
    &:hover {
        background-color: #0b830bb3;
    }
`

export const DialogNoButton = styled(Button)`
    background-color: #d74242;
    &:hover {
        background-color: #f36666;
    }
`