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
    background-color: ${props => props.theme.colors.secondBackground};
    color: ${props => props.theme.colors.menu};
`
export const Left = styled.div``
export const Right = styled.div`
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const IconWrapper = styled.span<Props>`
    cursor: pointer;
    font-weight: 600;
    font-size: 13px;
    margin-left: 10px;
    margin-right: 5px;
    position: relative;
    @media only screen and (max-width: 550px) {
        display: ${props => props.right ? 'block' : 'none'};
    }
    &:hover {
        color: ${props => props.theme.colors.hover};
    }
`
export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50px;
`
export const NavbarIconWrapperResponsive = styled.span`
    display: none;
    @media only screen and (max-width: 550px) {
        display: block;
        cursor: pointer;
        margin-left: 10px;
    }
`