import { useContext, useState } from 'react';
import {
  AccountCircleOutlined,
  CreditCard,
  Dashboard,
  ExitToApp,
  InsertChart,
  NotificationsNone,
  PersonOutlineOutlined,
  PsychologyOutlined,
  SettingsApplications,
  SettingsSystemDaydream,
  Store,
  Close,
  Business,
  StarBorder,
  Send,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';

import useConfirm from '../../hooks/useConfirmDialog';

import { AuthContext } from '../../context/authentication/authContext';
import { SidebarContext } from '../../context/sidebar/sidebarContext';

import {
  Container,
  ContainerLogo,
  ContainerLogoSpan,
  ContainerCenter,
  Title,
  ContainerCenterUl,
  ContainerCenterLi,
  ContainerCenterLiLogout,
  ContainerCenterSpan,
  IconWrapper,
  MenuIconWrapper,
  ContainerBottom,
  ContainerBottomDiv,
  LinkStyle,
  ContainerCollapse,
  ContainerMenuIcon
} from './styles'

interface ISidebar {
  toggleTheme: (theme: string) => void;
}

const Sidebar = ({ toggleTheme }: ISidebar) => {

  const {ConfirmationDialog, confirm} = useConfirm(
    'Sair',
    'Deseja realmente fazer o logout?',
  )

  const [menuActive, setMenuActive] = useState("")

  const { dispatch: AuthDispatch } = useContext(AuthContext);
  const { state: { open }, dispatch: SidebarDispatch } = useContext(SidebarContext);

  async function handleLogout() {
    const confirmAnswer = await confirm()
    if(confirmAnswer){
      closeSidebar()
      AuthDispatch({type:"LOGOUT"})
    }
  }

  function handleSidebar() {
    SidebarDispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  function closeSidebar() {
    if(!open){
      return SidebarDispatch({ type: 'TOGGLE_SIDEBAR' })
    }
    return
  }

  function handleTheme(theme: string) {
    toggleTheme(theme)
  }

  function handleMenuActive(item: any) {
    if(menuActive === item){
      setMenuActive("")
      return
    }
    setMenuActive(item)
  }

  return (
    <Container>
      <ContainerLogo>
        <LinkStyle to='/' onClick={closeSidebar}>
          <ContainerLogoSpan open={open}>
            Intratec Tecnologia
          </ContainerLogoSpan>
        </LinkStyle>
        <MenuIconWrapper>
          <Close onClick={handleSidebar}/>
        </MenuIconWrapper>
      </ContainerLogo>
      <ContainerCenter>
        <ContainerCenterUl>
          <Title open={open} title={'Main'}>MAIN</Title>
            <ContainerCenterLi title={'Dashboard'} onClick={closeSidebar}>
              <LinkStyle to='/'>
                <IconWrapper open={open}>
                    <Dashboard />
                </IconWrapper>
                <ContainerCenterSpan open={open}>Dashboard</ContainerCenterSpan>
              </LinkStyle>
            </ContainerCenterLi>
          <Title open={open} title={'List'}>LISTS</Title>
              <ContainerCenterLi title={'Users'} onClick={closeSidebar}>
                <LinkStyle to='/users'>
                    <IconWrapper open={open}>
                        <PersonOutlineOutlined />
                    </IconWrapper>
                    <ContainerCenterSpan open={open}>Users</ContainerCenterSpan>
                </LinkStyle>
              </ContainerCenterLi>

              <ContainerCenterLi title={'Products'} onClick={() => handleMenuActive('products')}>
                  <IconWrapper open={open}>
                    <Store />
                  </IconWrapper>
                  <ContainerMenuIcon>
                    <ContainerCenterSpan open={open}>Gestão de Produtos</ContainerCenterSpan>
                    {menuActive === 'products' ? <ExpandLess /> : <ExpandMore />}
                  </ContainerMenuIcon>
              </ContainerCenterLi>
              <ContainerCollapse in={menuActive === 'products'} timeout="auto" unmountOnExit>
                  <ContainerCenterLi onClick={closeSidebar}>
                    <LinkStyle to='/products'>
                      <IconWrapper>
                        <StarBorder />
                      </IconWrapper>
                      <ContainerCenterSpan open={open}>Produtos</ContainerCenterSpan>
                    </LinkStyle>
                  </ContainerCenterLi>
                  <ContainerCenterLi onClick={closeSidebar}>
                    <LinkStyle to='/categories'>
                      <IconWrapper>
                        <StarBorder />
                        </IconWrapper>
                        <ContainerCenterSpan open={open}>Categorias</ContainerCenterSpan>
                      </LinkStyle>
                  </ContainerCenterLi>
                  <ContainerCenterLi onClick={closeSidebar}>
                    <LinkStyle to='/brands'>
                      <IconWrapper>
                        <StarBorder />
                      </IconWrapper>
                      <ContainerCenterSpan open={open}>Marcas</ContainerCenterSpan>
                    </LinkStyle>
                  </ContainerCenterLi>
              </ContainerCollapse>

              <ContainerCenterLi title={'Companies'} onClick={() => handleMenuActive('companies')}>
                  <IconWrapper open={open}>
                    <Business />
                  </IconWrapper>
                  <ContainerMenuIcon>
                    <ContainerCenterSpan open={open}>Gestão das Empresas</ContainerCenterSpan>
                    {menuActive === 'companies' ? <ExpandLess /> : <ExpandMore />}
                  </ContainerMenuIcon>
              </ContainerCenterLi>
              <ContainerCollapse in={menuActive === 'companies'} timeout="auto" unmountOnExit>
                  <ContainerCenterLi onClick={closeSidebar}>
                    <LinkStyle to='/companies'>
                      <IconWrapper>
                        <StarBorder />
                      </IconWrapper>
                      <ContainerCenterSpan open={open}>Empresas</ContainerCenterSpan>
                    </LinkStyle>
                  </ContainerCenterLi>
                  <ContainerCenterLi onClick={closeSidebar}>
                    <LinkStyle to='/categories'>
                      <IconWrapper>
                        <StarBorder />
                        </IconWrapper>
                        <ContainerCenterSpan open={open}>Categorias</ContainerCenterSpan>
                      </LinkStyle>
                  </ContainerCenterLi>
                  <ContainerCenterLi onClick={closeSidebar}>
                    <LinkStyle to='/brands'>
                      <IconWrapper>
                        <StarBorder />
                      </IconWrapper>
                      <ContainerCenterSpan open={open}>Marcas</ContainerCenterSpan>
                    </LinkStyle>
                  </ContainerCenterLi>
              </ContainerCollapse>


              <ContainerCenterLi title={'Orders'} onClick={closeSidebar}>
                <LinkStyle to='/orders'>
                    <IconWrapper open={open}>
                      <CreditCard />
                    </IconWrapper>
                    <ContainerCenterSpan open={open}>Orders</ContainerCenterSpan>
                </LinkStyle>
              </ContainerCenterLi>
          <Title open={open} title={'Useful'}>USEFUL</Title>
            <ContainerCenterLi title={'Stats'} onClick={closeSidebar}>
              <LinkStyle to='/stats'>
                  <IconWrapper open={open}>
                    <InsertChart />
                  </IconWrapper>
                  <ContainerCenterSpan open={open}>Stats</ContainerCenterSpan>
              </LinkStyle>
            </ContainerCenterLi>
            <ContainerCenterLi title={'Notifications'} onClick={closeSidebar}>
              <LinkStyle to='/notifications'>
                  <IconWrapper open={open}>
                    <NotificationsNone />
                  </IconWrapper>
                  <ContainerCenterSpan open={open}>Notifications</ContainerCenterSpan>
              </LinkStyle>
            </ContainerCenterLi>
          <Title open={open} title={'Service'}>SERVICE</Title>
            <ContainerCenterLi title={'System Health'} onClick={closeSidebar}>
              <LinkStyle to='/system-health'>
                  <IconWrapper open={open}>
                    <SettingsSystemDaydream />
                  </IconWrapper>
                  <ContainerCenterSpan open={open}>System Health</ContainerCenterSpan>
              </LinkStyle>
            </ContainerCenterLi>
            <ContainerCenterLi title={'Logs'} onClick={closeSidebar}>
              <LinkStyle to='/logs'>
                  <IconWrapper open={open}>
                    <PsychologyOutlined />
                  </IconWrapper>
                  <ContainerCenterSpan open={open}>Logs</ContainerCenterSpan>
              </LinkStyle>
            </ContainerCenterLi>
            <ContainerCenterLi title={'Settings'} onClick={closeSidebar}>
              <LinkStyle to='/settings'>
                  <IconWrapper open={open}>
                    <SettingsApplications />
                  </IconWrapper>
                  <ContainerCenterSpan open={open}>Settings</ContainerCenterSpan>
              </LinkStyle>
            </ContainerCenterLi>
          <Title open={open} title={'User'}>USER</Title>
            <ContainerCenterLi title={'Profile'} onClick={closeSidebar}>
              <LinkStyle to='/profile'>
                  <IconWrapper open={open}>
                    <AccountCircleOutlined />
                  </IconWrapper>
                  <ContainerCenterSpan open={open}>Profile</ContainerCenterSpan>
              </LinkStyle>
            </ContainerCenterLi>
          <ContainerCenterLiLogout onClick={handleLogout} title={'Logout'}>
            <IconWrapper open={open}>
              <ExitToApp />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Logout</ContainerCenterSpan>
          </ContainerCenterLiLogout>
        </ContainerCenterUl>
      </ContainerCenter>
      <ContainerBottom>
        <ContainerBottomDiv onClick={() => handleTheme('light')} />
        <ContainerBottomDiv onClick={() => handleTheme('dark')} />
      </ContainerBottom>
      <ConfirmationDialog />
    </Container>
  )
}

export default Sidebar