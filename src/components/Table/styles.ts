import styled from "styled-components";
import Table from '@mui/material/Table';

interface Props {
    value: string;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.secondBackground};
    overflow-x: auto;
`;

export const ContainerTable = styled.div`
    color: ${props => props.theme.colors.text};
    overflow-x: auto;
`;
export const TableStyled = styled(Table)`

    & .MuiTableCell-root {
        color: ${props => props.theme.colors.text};
    }
`
export const CellWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const ProductImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`;
export const CellStatusWrapper = styled.div<Props>`
    background-color: ${props => props.value === 'Approved' ? 'rgba(0,128,1,0.151)' : 'rgba(189,189,3,0.103)'};
    color: ${props => props.value === 'Approved' ? 'green' : 'goldenrod'};
    padding: 5px;
    border-radius: 5px;
    font-weight: 600;
`;

export const Title = styled.div`
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    margin: 10px;
    padding: 10px;
    font-size: 20px;
`;