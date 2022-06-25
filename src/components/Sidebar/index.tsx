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

import {
  Container,
  ContainerLogo,
  ContainerLogoSpan,
  ContainerCenter,
  Title,
  ContainerCenterUl,
  ContainerCenterLi,
  ContainerCenterSpan,
  ContainerBottom,
  IconWrapper
} from './styles'

const Sidebar = () => {

  const { dispatch: AuthDispatch } = useContext(AuthContext);

  function handleLogout() {
    AuthDispatch({type:"LOGOUT"})
  }

  return (
    <Container>
      <ContainerLogo>
        <ContainerLogoSpan>
          Intratec Tecnologia
        </ContainerLogoSpan>
      </ContainerLogo>
      <ContainerCenter>
        <ContainerCenterUl>
          <Title>MAIN</Title>
          <ContainerCenterLi>
            <IconWrapper>
              <Dashboard />
            </IconWrapper>
            <ContainerCenterSpan>Dashboard</ContainerCenterSpan>
          </ContainerCenterLi>
          <Title>LISTS</Title>
          <ContainerCenterLi>
            <IconWrapper>
              <PersonOutlineOutlined />
            </IconWrapper>
            <ContainerCenterSpan>Users</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi>
            <IconWrapper>
              <Store />
            </IconWrapper>
            <ContainerCenterSpan>Products</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi>
            <IconWrapper>
              <CreditCard />
            </IconWrapper>
            <ContainerCenterSpan>Orders</ContainerCenterSpan>
          </ContainerCenterLi>
          <Title>USEFUL</Title>
          <ContainerCenterLi>
            <IconWrapper>
              <InsertChart />
            </IconWrapper>
            <ContainerCenterSpan>Stats</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi>
            <IconWrapper>
              <NotificationsNone />
            </IconWrapper>
            <ContainerCenterSpan>Notifications</ContainerCenterSpan>
          </ContainerCenterLi>
          <Title>SERVICE</Title>
          <ContainerCenterLi>
            <IconWrapper>
              <SettingsSystemDaydream />
            </IconWrapper>
            <ContainerCenterSpan>System Health</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi>
            <IconWrapper>
              <PsychologyOutlined />
            </IconWrapper>
            <ContainerCenterSpan>Logs</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi>
            <IconWrapper>
              <SettingsApplications />
            </IconWrapper>
            <ContainerCenterSpan>Settings</ContainerCenterSpan>
          </ContainerCenterLi>
          <Title>USER</Title>
          <ContainerCenterLi>
            <IconWrapper>
              <AccountCircleOutlined />
            </IconWrapper>
            <ContainerCenterSpan>Profile</ContainerCenterSpan>
          </ContainerCenterLi>
          <ContainerCenterLi onClick={handleLogout}>
            <IconWrapper>
              <ExitToApp />
            </IconWrapper>
            <ContainerCenterSpan>Logout</ContainerCenterSpan>
          </ContainerCenterLi>
        </ContainerCenterUl>
      </ContainerCenter>
      <ContainerBottom>
        Color Options
      </ContainerBottom>
    </Container>
  )
}

export default Sidebar