import styled from "styled-components";

interface Props {
  open?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: .1fr 1fr 1fr;
  grid-template-areas:
  "content1 content2 content3 content4"
  "feature feature chart chart"
  "list list list list";
  text-transform: uppercase;
  font-size: 12px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "content1 content2"
      "content3 content4"
      "feature feature"
      "chart chart";
  }

  @media only screen and (max-width: 880px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "content1 content2"
      "content3 content4"
      "feature feature"
      "chart chart";
    margin: 5px;
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "content1"
      "content2"
      "content3"
      "content4"
      "feature"
      "chart";
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
export const List = styled.div`
  grid-area: list;
  padding: var(--main-padding);
`