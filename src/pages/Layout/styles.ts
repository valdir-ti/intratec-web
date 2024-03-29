import styled from "styled-components";

interface Props {
    open?: boolean;
  }

export const Container = styled.div<Props>`
  display: grid;
  height: 100vh;
  grid-template-columns: ${props => props.open ? '240px 1fr' : '80px 1fr'};
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar nav nav"
    "sidebar content content";
  font-size: 12px;
  color: ${props => props.theme.colors.text};
  text-align: center;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: ${props => props.open ? '0.6fr 1fr 1fr' : '80px 1fr 1fr'};
    grid-template-rows: 60px 1fr;
    grid-template-areas:
      "sidebar nav nav"
      "sidebar content content";
  }

  @media only screen and (max-width: 880px) {
    grid-template-columns: ${props => props.open ? '0.6fr 1fr 1fr' : '80px 1fr'};
    grid-template-rows: 60px 3fr;
    grid-template-areas:
      "sidebar nav nav"
      "sidebar content content";
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: .1fr 1fr;
    grid-template-areas:
      "nav nav"
      "content content";
  }
`;

export const Nav = styled.nav`
  grid-area: nav;
  border-radius: var(--main-radius);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Sidebar = styled.div<Props>`
  grid-area: sidebar;
  z-index: 1;

  @media only screen and (max-width: 550px) {
    position: fixed;
    left: ${props => props.open ? '-200px' : '0'};
    background-color: ${props => props.theme.colors.background};
    height: 100%;
  }
`;

export const Content = styled.div`
  grid-area: content;
  min-height: 220px;
  padding: var(--main-padding);
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.secondBackground};
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 2px solid ${props => props.theme.colors.menu};
    background-color: ${props => props.theme.colors.menu};
  }
`;