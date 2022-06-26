import styled from "styled-components";

interface Props {
    open?: boolean;
    hover?: any;
    right?: boolean;
}

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--lightgray);
`
export const Left = styled.div``
export const Right = styled.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const IconWrapper = styled.span<Props>`
    cursor: pointer;
    color: var(--main);
    font-weight: 600;
    font-size: 13px;
    margin-left: 10px;
    margin-right: 5px;
    @media only screen and (max-width: 550px) {
        display: ${props => props.right ? 'block' : 'none'};
    }
    &:hover {
        color: ${props => props.hover ? '#6439FF' : ''};
    }
`
export const NavbarIconWrapperResponsive = styled.span`
    display: none;
    @media only screen and (max-width: 550px) {
        display: block;
        cursor: pointer;
        color: var(--main);
        margin-left: 10px;
    }
`