import styled from "styled-components";

interface Props {
    status: string;
}

export const Container = styled.div`
    height: 100%;
    border-radius: var(--main-radius);
    background-color: ${props => props.theme.colors.secondBackground};
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
`
export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.text};
`
export const TopTitle = styled.div`
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
`
export const Bottom = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const FeatureChart = styled.div`
    width: 100px;
    height: 100px;
`
export const BottomTitle = styled.p`
    font-weight: 500;
    color: ${props => props.theme.colors.text};
`
export const BottomAmount = styled.p`
    font-size: 30px;
    font-weight: 300px;
`
export const BottomDesc = styled.p`
    font-weight: 300;
    font-size: 12px;
    color: ${props => props.theme.colors.text};
    text-align: center;
`
export const BottomSummary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const BottomSummaryItem = styled.div`
    text-align: center;
`
export const BottomSummaryItemTitle = styled.div`
    font-size: 14px;
    color: ${props => props.theme.colors.text};
`
export const BottomSummaryItemResult = styled.div<Props>`
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
    color: ${props => props.status === 'positive' ? 'green' : 'red'};
`
export const BottomSummaryItemResultAmount = styled.div``