import { useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { SidebarContext } from '../../context/sidebar/sidebarContext';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

import { GlobalStyle } from '../../styles/global';

import {
    Container,
    Nav,
    Sidebar as SidebarStyled,
    Content
} from './styles';

import usePersistedState from '../../hooks/usePersistedState';

const Layout = ({ children }: any) => {

    const sidebarContext = useContext(SidebarContext);
    const { state: { open } } = sidebarContext;

    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    const toggleTheme = (theme: string) => {
        if (theme === 'light') {
            setTheme(light);
        }else{
            setTheme(dark);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container open={open}>
                <Nav>
                    <Navbar toggleTheme={toggleTheme} theme={theme}/>
                </Nav>
                <SidebarStyled open={open}>
                    <Sidebar toggleTheme={toggleTheme} />
                </SidebarStyled>
                <Content>
                    {children}
                </Content>
            </Container>
        </ThemeProvider>
    )
}

export default Layout
