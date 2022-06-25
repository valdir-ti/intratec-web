import { useContext } from 'react';
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
  ArrowBack
} from '@mui/icons-material';

import { AuthContext } from '../../context/authentication/authContext'
import { SidebarContext } from '../../context/sidebar/sidebarContext'

import {
  Container,
  ContainerLogo,
  ContainerLogoResponsive,
  ContainerLogoSpan,
  ContainerCenter,
  Title,
  ContainerCenterUl,
  ContainerCenterLi,
  ContainerCenterSpan,
  IconWrapper,
  MenuIconWrapper,
  ContainerBottom,
  ContainerBottomDiv
} from './styles'

const Sidebar = () => {

  const { dispatch: AuthDispatch } = useContext(AuthContext);
  const { state: { open }, dispatch: SidebarDispatch } = useContext(SidebarContext);

  function handleLogout() {
    AuthDispatch({type:"LOGOUT"})
  }

  function handleSidebar() {
    SidebarDispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  return (
    <Container>
      {open ?
      <ContainerLogo>
        <ContainerLogoSpan open={open} title={'Intratec Tecnologia'}>
          Intratec Tecnologia
        </ContainerLogoSpan>
      </ContainerLogo>:<ContainerLogoResponsive>
        <ContainerLogoSpan open={open} title={'Intratec Tecnologia'}>
          Intratec Tecnologia
        </ContainerLogoSpan>
        <MenuIconWrapper>
          <ArrowBack onClick={handleSidebar}/>
        </MenuIconWrapper>
      </ContainerLogoResponsive>
      }
      <ContainerCenter>
        <ContainerCenterUl>
          <Title open={open} title={'Main'}>MAIN</Title>
          <ContainerCenterLi title={'Dashboard'}>
            <IconWrapper open={open}>
              <Dashboard />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Dashboard</ContainerCenterSpan>
          </ContainerCenterLi>
          <Title open={open} title={'List'}>LISTS</Title>
          <ContainerCenterLi title={'Users'}>
            <IconWrapper open={open}>
              <PersonOutlineOutlined />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Users</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi title={'Products'}>
            <IconWrapper open={open}>
              <Store />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Products</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi title={'Orders'}>
            <IconWrapper open={open}>
              <CreditCard />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Orders</ContainerCenterSpan>
          </ContainerCenterLi>
          <Title open={open} title={'Useful'}>USEFUL</Title>
          <ContainerCenterLi title={'Stats'}>
            <IconWrapper open={open}>
              <InsertChart />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Stats</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi title={'Notifications'}>
            <IconWrapper open={open}>
              <NotificationsNone />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Notifications</ContainerCenterSpan>
          </ContainerCenterLi>
          <Title open={open} title={'Service'}>SERVICE</Title>
          <ContainerCenterLi title={'System Health'}>
            <IconWrapper open={open}>
              <SettingsSystemDaydream />
            </IconWrapper>
            <ContainerCenterSpan open={open}>System Health</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi title={'Logs'}>
            <IconWrapper open={open}>
              <PsychologyOutlined />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Logs</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi title={'Settings'}>
            <IconWrapper open={open}>
              <SettingsApplications />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Settings</ContainerCenterSpan>
          </ContainerCenterLi>
          <Title open={open} title={'User'}>USER</Title>
          <ContainerCenterLi title={'Profile'}>
            <IconWrapper open={open}>
              <AccountCircleOutlined />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Profile</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi onClick={handleLogout} title={'Logout'}>
            <IconWrapper open={open}>
              <ExitToApp />
            </IconWrapper>
            <ContainerCenterSpan open={open}>Logout</ContainerCenterSpan>
          </ContainerCenterLi>
        </ContainerCenterUl>
      </ContainerCenter>
      <ContainerBottom>
        <ContainerBottomDiv />
        <ContainerBottomDiv />
      </ContainerBottom>
    </Container>
  )
}

export default Sidebar