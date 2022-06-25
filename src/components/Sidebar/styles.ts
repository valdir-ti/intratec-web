import styled from 'styled-components'

export const Container = styled.div`
    border-right: 1px solid var(--lightgray);
    height: 100vh;
`
export const ContainerLogo = styled.div`
    height: 60px;
    border-bottom: 0.5px solid var(--lightgray);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerLogoSpan = styled.div`
    color: var(--purple);
    font-size: 16px;
    font-weight: bold;
`
export const ContainerCenter = styled.div`
    display: flex;
    justify-content: start;
`

export const Title = styled.p`
    font-size: 10px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 5px;
    margin-left: 10px;
    color: #888
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
    color: #888;
    width: 100%;
    &:hover{
        background-color: var(--second);
    }
`
export const ContainerCenterSpan = styled.span`

`
export const ContainerBottom = styled.div`

`
export const IconWrapper = styled.span`
    color: var(--main);
    font-weight: 600;
    font-size: 13px;
    margin-left: 10px;
    margin-right: 5px;
`