import { Link } from "react-router-dom";
import styled from 'styled-components';

interface Props {
    open?: boolean;
}

export const Container = styled.div`
    height: 100%;
    overflow: auto;
    @media only screen and (max-width: 550px) {
        width: 200px;
    }
`;
export const ContainerLogo = styled.div`
    height: 60px;
    border-bottom: 0.5px solid ${props => props.theme.colors.border};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LinkStyle = styled(Link)<Props>`
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: ${props => props.open ? 'center' : 'flex-start'};
    color: ${props => props.theme.colors.text};
    &:hover,
    &:focus{
        color: ${props => props.theme.colors.text};
    }
    &:active{
        color: ${props => props.theme.colors.text};
    };
`;
export const ContainerLogoSpan = styled.div<Props>`
    width: 100%;
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.open ? '16px' : '10px'};
    font-weight: bold;

    @media only screen and (max-width: 1000px) {
        font-size: ${props => props.open ? '13px' : '10px'};
        width: 100%;
    }
    @media only screen and (max-width: 550px) {
        width: 100%;
        font-size: 12px;
    }
`;
export const ContainerCenter = styled.div`
    display: flex;
    justify-content: start;
`;
export const Title = styled.p<Props>`
    font-size: ${props => props.open ? '10px' : '11px'};
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 5px;
    margin-left: ${props => props.open ? '10px' : '18px'};
    color: ${props => props.theme.colors.border};
`;
export const ContainerCenterUl = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
`;
export const ContainerCenterLi = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    width: 100%;
    &:hover{
        background-color: ${props => props.theme.colors.hover};
    }
`;
export const ContainerCenterSpan = styled.span<Props>`
    display: ${props => props.open ? 'block' : 'none'};

    @media only screen and (max-width: 550px) {
        display: block;
    }
`;
export const IconWrapper = styled.span<Props>`
    color: ${props => props.theme.colors.text};
    font-weight: 600;
    font-size: 13px;
    margin-left: ${props => props.open ? '10px' : '20px'};
    margin-right: 5px;
`;
export const MenuIconWrapper = styled.span`
    display: none;
    @media only screen and (max-width: 550px) {
        display: block;
        color: ${props => props.theme.colors.text};
        font-weight: 300;
        font-size: 10px;
        margin-right: 10px;
        cursor: pointer;
    }
`;
export const ContainerBottom = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;
export const ContainerBottomDiv = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.border};
    cursor: pointer;
    margin: 5px;

    &:nth-child(1){
        background-color: whitesmoke;
    }
    &:nth-child(2){
        background-color: #333;
    }
`;
