import styled from "styled-components";

export const Container = styled.div`
    border-radius: var(--main-radius);
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Title = styled.div`
    font-weight: 500;
    color: var(--darkgray);
    margin-bottom: 15px;
    font-size: 15px;
`;