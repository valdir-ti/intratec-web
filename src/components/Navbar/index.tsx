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
import Counter from '../Counter';

import {
  Container,
  Left,
  Right,
  IconWrapper,
  NavbarIconWrapperResponsive,
  Avatar
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
        <IconWrapper right hover title='Language Selector'>
          <LanguageOutlined />
        </IconWrapper>
        <IconWrapper right hover title='Dark Mode'>
          <DarkModeOutlined />
        </IconWrapper>
        <IconWrapper right hover title='Notifications'>
          <NotificationsOutlined />
          <Counter total={2}/>
        </IconWrapper>
        <IconWrapper right hover title='Chat'>
          <ChatBubbleOutline />
          <Counter total={7}/>
        </IconWrapper>
        <IconWrapper right hover title='User Settings'>
          <ListOutlined />
        </IconWrapper>
        <IconWrapper right title='Avatar user'>
          <Avatar
            src={'https://avatars.githubusercontent.com/u/11434239?v=4'}
            alt="Avatar"
          />
        </IconWrapper>
      </Right>
    </Container>
  )
}

export default Navbar