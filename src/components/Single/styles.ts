import styled from "styled-components";

interface Props {
    open?: boolean;
}

export const Container = styled.div`
    display: grid;
    height: 100vh;
    gap: 1rem;
    grid-template-areas:
        "topDetails topChart"
        "bottom bottom";
    grid-template-columns: .5fr 1fr;
    grid-template-rows: 1fr 1fr;
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
    width: 100vw;
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
export const TopDetailsTitle = styled.h1`
    font-size: 22px;
    margin-bottom: 16px;
    @media only screen and (max-width: 550px) {
        margin-bottom: 12px;
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
export const TopDetailsItem = styled.h1`
    font-size: 14px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    font-weight: 500;
    @media only screen and (max-width: 550px) {
        margin-bottom: 10px;
        font-size: 12px;
    }
`
export const TopDetailsItemKey = styled.h1`
    font-weight: bold;
    font-size: 14px;
    @media only screen and (max-width: 550px) {
        font-size: 13px;
    }
`
export const TopImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 40px;
    margin-top: 30px;
    @media only screen and (max-width: 550px) {
        margin: 0;
        width: 72px;
        height: 72px;
    }
`
export const EditButton = styled.button`
    padding: 5px;
    font-size: 12px;
    color: ${props => props.theme.colors.menu};
    background-color: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.menu};
    border-radius: 5px;
    width: 60px;
    margin: 0 30px;
    cursor: pointer;
`
export const Bottom = styled.div<Props>`
    grid-area: bottom;
    width: 100vw;
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