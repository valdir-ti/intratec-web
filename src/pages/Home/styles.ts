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
  "sidebar main main main main"
  "sidebar list list list list"
  "footer footer footer footer footer";
  grid-gap: 0.1rem;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 12px;
  color: #004d40;
  text-align: center;

   @media only screen and (max-width: 1200px) {
    grid-template-columns: ${props => props.open ? '0.5fr 1fr 1fr' : '80px 1fr 1fr'};
    grid-template-rows: 60px 1fr 1fr 2fr 1fr 50px;
    grid-template-areas:
       "sidebar nav nav"
       "sidebar content1 content2"
       "sidebar content3 content4"
       "sidebar main main"
       "sidebar list list"
       "footer footer footer";
   }

   @media only screen and (max-width: 880px) {
    grid-template-columns: ${props => props.open ? '0.3fr 1fr' : '80px 1fr'};
    grid-template-rows: 60px 1fr 1fr 1fr 1fr 3fr 2fr 60px;
    grid-template-areas:
       "sidebar nav"
       "sidebar content1"
       "sidebar content2"
       "sidebar content3"
       "sidebar content4"
       "sidebar main"
       "sidebar list"
       "footer footer";
   }

   @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: .5fr 1fr 1fr 1fr 1fr 3fr 2fr .5fr;
    grid-template-areas:
      "nav"
      "content1"
      "content2"
      "content3"
      "content4"
      "main"
      "list"
      "footer";
   }
`;

export const Nav = styled.nav`
  background: #a7ffeb;
  grid-area: nav;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .5rem;
`

export const Main = styled.main`
  background: #84ffff;
  grid-area: main;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
`

export const Sidebar = styled.div<Props>`
  grid-area: sidebar;

  @media only screen and (max-width: 550px) {
    position: absolute;
    left: ${props => props.open ? '-200px' : '0'};
    background-color: var(--white);
    height: 100vh;
  }
`
export const ContentOne = styled.div`
  background: #6fffd2;
  grid-area: content1;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
`

export const ContentTwo = styled.div`
  background: #64ffda;
  grid-area: content2;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
`

export const ContentThree = styled.div`
  background: #73ffba;
  grid-area: content3;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
`

export const ContentFour = styled.div`
  background: #ff2526;
  grid-area: content4;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
`

export const List = styled.div`
  background: #ff25ee;
  grid-area: list;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
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