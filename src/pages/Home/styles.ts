import styled from "styled-components";

interface Props {
  open: boolean;
}

export const Container = styled.div<Props>`
  display: grid;
  height: 100vh;
  grid-template-columns: ${props => props.open ? '240px 1fr 1fr 1fr 1fr' : '80px 1fr 1fr 1fr 1fr'};
  grid-template-rows: 60px .6fr 1.5fr 1fr 60px;
  grid-template-areas:
    "sidebar nav nav nav nav"
    "sidebar content1 content2 content3 content4"
    "sidebar feature feature chart chart"
    "sidebar list list list list"
    "footer footer footer footer footer";
  grid-gap: 0.1rem;
  text-transform: uppercase;
  font-size: 12px;
  color: #004d40;
  text-align: center;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: ${props => props.open ? '0.6fr 1fr 1fr' : '80px 1fr 1fr'};
    grid-template-rows: 60px 1fr 1fr 2fr 1fr 50px;
    grid-template-areas:
      "sidebar nav nav"
      "sidebar content1 content2"
      "sidebar content3 content4"
      "sidebar feature chart"
      "sidebar list list"
      "footer footer footer";
  }

  @media only screen and (max-width: 880px) {
    grid-template-columns: ${props => props.open ? '0.6fr 1fr 1fr' : '80px 1fr'};
    grid-template-rows: 60px 1fr  1fr 1fr 1fr 3fr 2fr 60px;
    grid-template-areas:
      "sidebar nav nav"
      "sidebar content1 content2"
      "sidebar content3 content4"
      "sidebar feature feature"
      "sidebar chart chart"
      "sidebar list list"
      "footer footer footer";
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: .5fr 1fr .5fr;
    grid-template-areas:
      "nav nav"
      "content1 content2"
      "content3 content4"
      "feature feature"
      "chart chart"
      "list list"
      "footer footer";
  }
`;

export const Nav = styled.nav`
  grid-area: nav;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Main = styled.main`
  grid-area: main;
  min-height: 220px;
  padding: var(--main-padding);
`
export const Feature = styled.div`
  grid-area: feature;
  padding: var(--main-padding);
`
export const Chart = styled.div`
  grid-area: chart;
  padding: var(--main-padding);
`
export const Sidebar = styled.div<Props>`
  grid-area: sidebar;
  z-index: 1;

  @media only screen and (max-width: 550px) {
    position: fixed;
    left: ${props => props.open ? '-200px' : '0'};
    background-color: var(--white);
    height: 100%;
  }
`
export const ContentOne = styled.div`
  grid-area: content1;
  padding: var(--main-padding);
  min-height: 120px;
`
export const ContentTwo = styled.div`
  grid-area: content2;
  padding: var(--main-padding);
  min-height: 120px;
`
export const ContentThree = styled.div`
  grid-area: content3;
  padding: var(--main-padding);
  min-height: 120px;
`
export const ContentFour = styled.div`
  grid-area: content4;
  padding: var(--main-padding);
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