import styled from "styled-components";

export const Container = styled.div`
    border-radius: var(--main-radius);
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${props => props.theme.colors.secondBackground};
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 1px 8px -3px rgba(201, 201, 201, 0.47);
`;

export const Title = styled.div`
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    margin-bottom: 15px;
    font-size: 15px;
`;