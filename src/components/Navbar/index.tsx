import {
  Menu,
  ListOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  ChatBubbleOutline,
  NotificationsOutlined
} from '@mui/icons-material';
import { useContext } from 'react'


import { SidebarContext } from '../../context/sidebar/sidebarContext';

import {
  Container,
  Left,
  Right,
  IconWrapper,
  NavbarIconWrapperResponsive
} from './styles'

const Navbar = () => {

  const sidebarContext = useContext(SidebarContext);
  const { state: { open }, dispatch } = sidebarContext;

  function handleToggle () {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  return (
    <Container>
      <Left>
        <IconWrapper open={open}>
          <Menu onClick={handleToggle} titleAccess={open ? 'Close Menu' : 'Open Menu'} />
        </IconWrapper>
        <NavbarIconWrapperResponsive>
          <Menu onClick={handleToggle} titleAccess={'Close Menu'} />
        </NavbarIconWrapperResponsive>
      </Left>
      <Right>
        <IconWrapper open={open} hover title='Language Selector'>
          <LanguageOutlined />
        </IconWrapper>
        <IconWrapper open={open} hover title='Dark Mode'>
          <DarkModeOutlined />
        </IconWrapper>
        <IconWrapper open={open} hover title='Notifications'>
          <NotificationsOutlined />
        </IconWrapper>
        <IconWrapper open={open} hover title='Chat'>
          <ChatBubbleOutline />
        </IconWrapper>
        <IconWrapper open={open} hover title='User Settings'>
          <ListOutlined />
        </IconWrapper>
      </Right>
    </Container>
  )
}

export default Navbar