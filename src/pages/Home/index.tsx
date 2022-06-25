import { useContext } from 'react';

import List from '../../components/List';
import Main from '../../components/Main';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Widget from '../../components/Widget';

import { SidebarContext } from '../../context/sidebar/sidebarContext';

import {
  Container,
  Nav,
  Main as MainStyled,
  Sidebar as SidebarStyled,
  ContentOne,
  ContentTwo,
  ContentThree,
  ContentFour,
  List as ListStyled,
  Footer,
  FooterP
} from './styles'

const Home = () => {

  const sidebarContext = useContext(SidebarContext);
  const { state: { open } } = sidebarContext;

  return (
    <Container open={open}>
      <Nav>
        <Navbar />
      </Nav>
      <MainStyled>
        <Main />
      </MainStyled>
      <SidebarStyled open={open}>
        <Sidebar />
      </SidebarStyled>
      <ContentOne>
        <Widget />
      </ContentOne>
      <ContentTwo>
        <Widget />
      </ContentTwo>
      <ContentThree>
        <Widget />
      </ContentThree>
      <ContentFour>
        <Widget />
      </ContentFour>
      <ListStyled>
        <List />
      </ListStyled>
      <Footer>
        <FooterP>Developed by Valdir Silva</FooterP>
      </Footer>
      </Container>
  );
}

export default Home
