import styled from "styled-components";

type Props = {
    status?: string;
    color?: string;
    fontColor?: string;
}

export const WidgetContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    gap: 10px;
    height: 100%;
    border-radius: var(--main-radius);
    background-color: ${props => props.theme.colors.secondBackground};
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 1px 8px -3px rgba(201, 201, 201, 0.47);
`
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`
export const LeftTitle = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: ${props => props.theme.colors.text};
`
export const LeftCounter = styled.span`
    font-size: 28px;
    font-weight: 300;
    `
export const LeftLink = styled.a`
    font-size: 12px;
    border-bottom: 1px solid gray;
    width: max-content;
    `
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `
export const RightPercent = styled.div<Props>`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${props => props.status === 'positive' ? 'green' : 'red'};
`
export const RightIconWrapper = styled.span<Props>`
    padding: 5px;
    border-radius: 5px;
    background-color: ${props => props.color && props.color};
    color: ${props => props.fontColor && props.fontColor};
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
`

