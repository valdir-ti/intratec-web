import styled from "styled-components";
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

export const Container = styled.div`
    height: 100%;
    background-color: black;
`;

export const LinkStyle = styled(Link)`
    text-decoration: none;
`

export const Datagrid = styled(DataGrid)`
    & .MuiDataGrid-columnHeadersInner {
        color: ${props => props.theme.colors.text};
    }
    & .MuiDataGrid-virtualScroller {
        color: ${props => props.theme.colors.text};

        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background-color: ${props => props.theme.colors.secondBackground};
            border-radius: 50px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 20px;
            border: 2px solid ${props => props.theme.colors.menu};
            background-color: ${props => props.theme.colors.menu};
        }
    }
    & .MuiDataGrid-cell {
        &:focus{
            outline: none !important;
        }
    }
    & .active {
        color: ${props => props.theme.colors.activeText};
        background-color: ${props => props.theme.colors.activeBackground};
        padding: 4px;
        border-radius: 5px;
        font-size: 12px;
    }
    & .pending {
        color: ${props => props.theme.colors.pendingText};
        background-color: ${props => props.theme.colors.pendingBackground};
        padding: 4px;
        border-radius: 5px;
        font-size: 12px;
    }
    & .passive {
        color: ${props => props.theme.colors.passiveText};
        background-color: ${props => props.theme.colors.passiveBackground};
        padding: 4px;
        border-radius: 5px;
        font-size: 12px;
    }
    & .cellAction {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    & .viewButton {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        width: 75px;
        height: 35px;
        padding: 2px 5px;
        border-radius: 5px;
        border: 1px solid ${props => props.theme.colors.viewButton};
        cursor: pointer;
        &:hover {
            background-color: ${props => props.theme.colors.activeBackground};
        }
        &:visited {
            color: ${props => props.theme.colors.viewButton};
        }
    }
    & .viewButtonLink {
        color: ${props => props.theme.colors.viewButtonText};
        &:visited {
            color: ${props => props.theme.colors.viewButtonText};
        }
    }
    & .deleteButton {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        width: 75px;
        height: 35px;
        padding: 5px 5px;
        border-radius: 5px;
        color: ${props => props.theme.colors.deleteButtonText};
        border: 1px solid ${props => props.theme.colors.deleteButton};
        cursor: pointer;
        &:hover, &:visited {
            background-color: ${props => props.theme.colors.deleteButton};
            color: #FFF;
        }
        &:visited {
            color: ${props => props.theme.colors.deleteButton};
        }
    }
    & .deleteButtonLink {
        &:visited {
            ${props => props.theme.colors.viewButtonText};
        }
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.secondBackground};
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 20px;
        border: 2px solid ${props => props.theme.colors.menu};
        background-color: ${props => props.theme.colors.menu};
    }
`;