import styled from "styled-components";

interface Props {
    open?: boolean;
}

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Left = styled.div``
export const Right = styled.div``
export const NavbarIconWrapper = styled.span<Props>`
    cursor: pointer;
    color: var(--main);
    font-weight: 600;
    font-size: 13px;
    margin-left: 10px;
    margin-right: 5px;
    @media only screen and (max-width: 550px) {
        display: none;
    }
`
export const NavbarIconWrapperResponsive = styled.span`
    display: none;
    @media only screen and (max-width: 550px) {
        display: block;
        cursor: pointer;
        color: var(--main);
    }
`