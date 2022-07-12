import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';

export const Container = styled.div`
    height: 100%;
    background-color: black;
`;

export const Datagrid = styled(DataGrid)`

    & .active {
        color: green;
        background-color: rgba(0,128,0,0.19);
        padding: 4px;
        border-radius: 5px;
        font-size: 12px;
    }
    & .pending {
        color: goldenrod;
        background-color: rgba(255,217,0,0.1);
        padding: 4px;
        border-radius: 5px;
        font-size: 12px;
    }
    & .passive {
        color: crimson;
        background-color: rgba(255,0,0,0.5);
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
        color: darkblue;
        border: 1px solid rgba(0,0,139,0.6);
        cursor: pointer;
        &:hover {
            background-color: #00008b2e;
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
        color: darkred;
        color: crimson;
        border: 1px solid rgba(220,20,60,0.6);
        cursor: pointer;
        &:hover {
            background-color: #dc143c36;
        }
    }
`;