import styled from "styled-components";
import TableContainer from '@mui/material/TableContainer';

export const Container = styled.div`
  display: grid;
  padding: 20px;
  margin-top: 5px;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: .2fr 1fr auto;
  grid-template-areas:
    "content1 content2 content3 content4"
    "feature feature chart chart"
    "list list list list";
  text-transform: uppercase;
  font-size: 12px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "content1 content2"
      "content3 content4"
      "feature feature"
      "chart chart"
      "list list";
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "content1"
      "content2"
      "content3"
      "content4"
      "feature"
      "chart"
      "list";
    margin: 5px;
  }
`;

export const Feature = styled.div`
  grid-area: feature;
  padding: var(--main-padding);
`
export const Chart = styled.div`
  grid-area: chart;
  padding: var(--main-padding);
`
export const ContentOne = styled.div`
  grid-area: content1;
  min-height: 120px;
`
export const ContentTwo = styled.div`
  grid-area: content2;
  min-height: 120px;
`
export const ContentThree = styled.div`
  grid-area: content3;
  min-height: 120px;
`
export const ContentFour = styled.div`
  grid-area: content4;
  min-height: 120px;
`
export const List = styled(TableContainer)`
  grid-area: list;
  padding: var(--main-padding);
`