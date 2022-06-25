import styled from 'styled-components'

interface Props {
    open: boolean;
}

export const Container = styled.div`
    border-right: 1px solid var(--lightgray);
    height: 100vh;
    overflow: auto;
`
export const ContainerLogo = styled.div`
    height: 60px;
    border-bottom: 0.5px solid var(--lightgray);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerLogoSpan = styled.div<Props>`
    color: var(--purple);
    font-size: ${props => props.open ? '16px' : '10px'};
    font-weight: bold;

    @media only screen and (max-width: 1000px) {
        font-size: ${props => props.open ? '13px' : '10px'};
    }
`

export const ContainerCenter = styled.div`
    display: flex;
    justify-content: start;
`

export const Title = styled.p<Props>`
    font-size: ${props => props.open ? '10px' : '11px'};
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 5px;
    margin-left: ${props => props.open ? '10px' : '18px'};
    color: var(--darkgray);
`
export const ContainerCenterUl = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
`
export const ContainerCenterLi = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    color: var(--darkgray);
    width: 100%;
    &:hover{
        background-color: var(--second);
    }
`
export const ContainerCenterSpan = styled.span`

`
export const IconWrapper = styled.span<Props>`
    color: var(--main);
    font-weight: 600;
    font-size: 13px;
    margin-left: ${props => props.open ? '10px' : '20px'};
    margin-right: 5px;
`
export const ContainerBottom = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`
export const ContainerBottomDiv = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid var(--main);
    cursor: pointer;
    margin: 5px;

    &:nth-child(1){
        background-color: whitesmoke;
    }
    &:nth-child(2){
        background-color: #333;
    }
`
