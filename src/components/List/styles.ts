import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material'

export const Container = styled.div`
    border-radius: var(--main-radius);
    height: 100%;
    padding: 10px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${props => props.theme.colors.secondBackground};
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 1px 8px -3px rgba(201, 201, 201, 0.47);
`;

export const LinkStyled = styled(Link)`
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    padding: 8px;
    border-radius: 5px;
    &:hover {
        color: ${props => props.theme.colors.activeText};
        background-color: ${props => props.theme.colors.secondText};
    }
`

export const PlusIcon = styled(Add)`
    margin-right: 5px;
`