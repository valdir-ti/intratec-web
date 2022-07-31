import styled from "styled-components";
import { Link } from 'react-router-dom';

interface Props {
    open?: boolean;
    defaultValue?: string;
}

export const Container = styled.div`
    display: grid;
    height: 100vh;
    gap: 1rem;
    grid-template-areas:
        "topDetails topChart"
        "bottom bottom";
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 2fr;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.menu};

    @media only screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "topDetails"
            "topChart"
            "bottom";
    }

    @media only screen and (max-width: 880px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "topDetails"
            "topChart"
            "bottom";
    }

    @media only screen and (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "topDetails"
            "topChart"
            "bottom";
    }
`
export const TopDetails = styled.div<Props>`
    grid-area: topDetails;
    background-color: ${props => props.theme.colors.secondBackground};
    color: ${props => props.theme.colors.menu};
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 1px 8px -3px rgba(201, 201, 201, 0.47);

    @media only screen and (max-width: 1280px) {
        min-height: 300px;
        width: ${props => props.open ? '80vw' : '92vw'};
    }

    @media only screen and (max-width: 1200px) {
        min-height: 300px;
        width: ${props => props.open ? '74vw' : '88vw'};
    }

    @media only screen and (max-width: 880px) {
        min-height: 300px;
        width: ${props => props.open ? '74vw' : '88vw'};
    }

    @media only screen and (max-width: 550px) {
        min-height: 220px;
        width: 96vw;
    }

    @media only screen and (max-width: 280px) {
        min-height: 220px;
        width: 93vw;
    }
`
export const TopFirstLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;
`;
export const TopSecondLine = styled.div`
    display: flex;
    justify-content: space-around;
`
export const TopChart = styled.div<Props>`
    grid-area: topChart;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 1px 8px -3px rgba(201, 201, 201, 0.47);

    @media only screen and (max-width: 1280px) {
        min-height: 430px;
        width: ${props => props.open ? '80vw' : '92vw'};
    }

    @media only screen and (max-width: 1200px) {
        height: 400px;
        width: ${props => props.open ? '74vw' : '88vw'};
    }

    @media only screen and (max-width: 880px) {
        height: 400px;
        width: ${props => props.open ? '74vw' : '88vw'};
    }

    @media only screen and (max-width: 550px) {
        height: 260px;
        width: 96vw;
    }

    @media only screen and (max-width: 280px) {
        min-height: 320px;
        width: 93vw;
    }
`
export const TopTitle = styled.h1`
    font-size: 16px;
    margin-left: 18%;
    color: #80808054;
`
export const TopDetailsTitle = styled.div`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 340px;
    font-size: 22px;
    margin-bottom: 16px;
    @media only screen and (max-width: 550px) {
        margin-bottom: 12px;
    }
    @media only screen and (max-width: 280px) {
        font-size: 18px;
    }
`
export const TopDetailsItems = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media only screen and (max-width: 550px) {
        width: auto;
    }
`
export const TopDetailsSpan = styled.span<Props>`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: ${props => props!.defaultValue !== 'title' ? '55%' : '200px'};
    max-width: 65%;
    text-align: left;
    @media only screen and (max-width: 550px) {
        width: 120px;
    }
`
export const TopDetailsItem = styled.div`
    font-size: 14px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    font-weight: 500;
    width: 100%;
    @media only screen and (max-width: 550px) {
        margin-bottom: 10px;
        font-size: 12px;
    }
    @media only screen and (max-width: 280px) {
        font-size: 11px;
    }
`
export const TopDetailsItemKey = styled.h1`
    font-weight: bold;
    font-size: 14px;
    @media only screen and (max-width: 550px) {
        font-size: 13px;
    }
    @media only screen and (max-width: 280px) {
        font-size: 11px;
    }
`
export const TopImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 30px;
    @media only screen and (max-width: 550px) {
        margin: 0;
        width: 64px;
        height: 64px;
        margin-top: 30px;
    }
    @media only screen and (max-width: 280px) {
        margin-top: 20px;
        margin-right: 10px;
        margin-left: 10px;
        width: 56px;
        height: 56px;
    }
`
export const EditButton = styled.button`
    font-size: 12px;
    color: ${props => props.theme.colors.menu};
    background-color: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.menu};
    border-radius: 5px;
    width: 90px;
    height: 35px;
    margin: 0 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Bottom = styled.div<Props>`
    grid-area: bottom;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 1px 8px -3px rgba(201, 201, 201, 0.47);

    @media only screen and (max-width: 1280px) {
        min-height: 300px;
        width: ${props => props.open ? '80vw' : '92vw'};
    }

    @media only screen and (max-width: 1200px) {
        min-height: 300px;
        width: ${props => props.open ? '74vw' : '88vw'};
    }

    @media only screen and (max-width: 880px) {
        min-height: 300px;
        width: ${props => props.open ? '74vw' : '88vw'};
    }

    @media only screen and (max-width: 550px) {
        width: 96vw;
    }

    @media only screen and (max-width: 280px) {
        width: 93vw;
    }
`
export const BottomTable = styled.div`
`

export const LinkStyled = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colors.menu};
    background-color: ${props => props.theme.colors.background};
    font-weight: bold;
    font-size: 16px;
`