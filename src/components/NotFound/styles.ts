import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: '#f3f1ff';
    font-family: 'Roboto', sans-serif;
`;

export const Title = styled.p`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const SubTitle = styled(Link)`
    font-size: 1.5rem;
    cursor: pointer;
    color: '#1c1139';
    font-style: italic;
`