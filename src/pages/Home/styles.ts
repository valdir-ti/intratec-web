import styled from "styled-components";

interface Props {
  open?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 60px 1fr 1fr 1fr 60px;
  grid-template-areas:
  "content1 content2 content3 content4";
  text-transform: uppercase;
  font-size: 12px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "content1 content2"
      "content3 content4";
  }

  @media only screen and (max-width: 880px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "content1 content2"
      "content3 content4";
    margin: 5px;
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "content1"
      "content2"
      "content3"
      "content4";
    margin: 5px;
  }
`;

export const ContainerWidget = styled.div`

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
  /* padding: var(--main-padding); */
  min-height: 120px;
`
export const ContentTwo = styled.div`
  grid-area: content2;
  /* padding: var(--main-padding); */
  min-height: 120px;
`
export const ContentThree = styled.div`
  grid-area: content3;
  /* padding: var(--main-padding); */
  min-height: 120px;
`
export const ContentFour = styled.div`
  grid-area: content4;
  /* padding: var(--main-padding); */
  min-height: 120px;
`
export const List = styled.div`
  grid-area: list;
  padding: var(--main-padding);
`
export const Footer = styled.footer`
  background: #1de9b6;
  grid-area: footer;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FooterP = styled.footer`
  font-size: 16px;
`