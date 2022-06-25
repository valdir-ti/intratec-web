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
  Store
} from '@mui/icons-material';

import { AuthContext } from '../../context/authentication/authContext'
import { SidebarContext } from '../../context/sidebar/sidebarContext'

import {
  Container,
  ContainerLogo,
  ContainerLogoSpan,
  ContainerCenter,
  Title,
  ContainerCenterUl,
  ContainerCenterLi,
  ContainerCenterSpan,
  IconWrapper,
  ContainerBottom,
  ContainerBottomDiv
} from './styles'

const Sidebar = () => {

  const { dispatch: AuthDispatch } = useContext(AuthContext);
  const { state: { open } } = useContext(SidebarContext);

  console.log('State ===> ', open)

  function handleLogout() {
    AuthDispatch({type:"LOGOUT"})
  }

  return (
    <Container>
      <ContainerLogo>
        <ContainerLogoSpan open={open}>
          Intratec Tecnologia
        </ContainerLogoSpan>
      </ContainerLogo>
      <ContainerCenter>
        <ContainerCenterUl>
          <Title open={open}>MAIN</Title>
          <ContainerCenterLi>
            <IconWrapper open={open}>
              <Dashboard />
            </IconWrapper>
            {open && <ContainerCenterSpan>Dashboard</ContainerCenterSpan>}
          </ContainerCenterLi>
          <Title open={open}>LISTS</Title>
          <ContainerCenterLi>
            <IconWrapper open={open}>
              <PersonOutlineOutlined />
            </IconWrapper>
            {open && <ContainerCenterSpan>Users</ContainerCenterSpan>}
          </ContainerCenterLi>
          <ContainerCenterLi>
            <IconWrapper open={open}>
              <Store />
            </IconWrapper>
            {open && <ContainerCenterSpan>Products</ContainerCenterSpan>}
          </ContainerCenterLi>
          <ContainerCenterLi>
            <IconWrapper open={open}>
              <CreditCard />
            </IconWrapper>
            {open && <ContainerCenterSpan>Orders</ContainerCenterSpan>}
          </ContainerCenterLi>
          <Title open={open}>USEFUL</Title>
          <ContainerCenterLi>
            <IconWrapper open={open}>
              <InsertChart />
            </IconWrapper>
            {open && <ContainerCenterSpan>Stats</ContainerCenterSpan>}
          </ContainerCenterLi>
          <ContainerCenterLi>
            <IconWrapper open={open}>
              <NotificationsNone />
            </IconWrapper>
            {open && <ContainerCenterSpan>Notifications</ContainerCenterSpan>}
          </ContainerCenterLi>
          <Title open={open}>SERVICE</Title>
          <ContainerCenterLi>
            <IconWrapper open={open}>
              <SettingsSystemDaydream />
            </IconWrapper>
            {open && <ContainerCenterSpan>System Health</ContainerCenterSpan>}
          </ContainerCenterLi>
          <ContainerCenterLi>
            <IconWrapper open={open}>
              <PsychologyOutlined />
            </IconWrapper>
            {open && <ContainerCenterSpan>Logs</ContainerCenterSpan>}
          </ContainerCenterLi>
          <ContainerCenterLi>
            <IconWrapper open={open}>
              <SettingsApplications />
            </IconWrapper>
            {open && <ContainerCenterSpan>Settings</ContainerCenterSpan>}
          </ContainerCenterLi>
          <Title open={open}>USER</Title>
          <ContainerCenterLi>
            <IconWrapper open={open}>
              <AccountCircleOutlined />
            </IconWrapper>
            {open && <ContainerCenterSpan>Profile</ContainerCenterSpan>}
          </ContainerCenterLi>
          <ContainerCenterLi onClick={handleLogout}>
            <IconWrapper open={open}>
              <ExitToApp />
            </IconWrapper>
            {open && <ContainerCenterSpan>Logout</ContainerCenterSpan>}
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