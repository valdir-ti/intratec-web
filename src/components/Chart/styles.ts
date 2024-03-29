import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    border-radius: var(--main-radius);
    background-color: ${props => props.theme.colors.secondBackground};
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 1px 8px -3px rgba(201, 201, 201, 0.47);
`;
export const ChartTitle = styled.div`
    width: 100%;
    text-align: left;
    padding: 10px;
    font-size: 15px;
    color: ${props => props.theme.colors.text};

    @media only screen and (max-width: 280px) {
        font-size: 12px;
    }
`;