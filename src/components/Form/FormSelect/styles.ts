import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';

export const FormInputSelectContainer = styled.div`
    width: 45%;
    margin: 15px 0 10px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 880px) {
        width: 90%;
    }
    @media only screen and (max-width: 280px) {
        width: 100%;
    }

    & .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root{
        line-height: 1em;
    }

    & .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
        padding: 10px 10px;
        text-align: left;
    }
`

export const MenuItemStyled = styled(MenuItem)`

`