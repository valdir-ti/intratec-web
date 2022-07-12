import styled from "styled-components";

export const Container = styled.div`
    height: 35px;
    width: 35px;
    background-color: ${props => props.theme.colors.secondText};
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Loading = styled.div`
    height: 25px;
    width: 25px;
    border-top: 2px solid #03FCFC;
    border-radius: 50%;
    border-right: 2px solid transparent;
    animation: 1s spin linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

`