import { useContext } from 'react';

import { SidebarContext } from '../../context/sidebar/sidebarContext';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import {
    Container,
    Nav,
    Sidebar as SidebarStyled,
    Content,
    Footer,
    FooterP
} from './styles'

const Layout = ({ children }: any) => {

    const sidebarContext = useContext(SidebarContext);
    const { state: { open } } = sidebarContext;

    return (
        <Container open={open}>
            <Nav>
                <Navbar />
            </Nav>
            <SidebarStyled open={open}>
                <Sidebar />
            </SidebarStyled>
            <Content>
                {children}
            </Content>
            <Footer>
                <FooterP>Developed by Valdir Silva</FooterP>
            </Footer>
        </Container>
    )
}

export default Layout
