import {
  Menu,
  ListOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  ChatBubbleOutline,
  NotificationsOutlined,
  LightModeOutlined
} from '@mui/icons-material';
import { useContext } from 'react'

import { SidebarContext } from '../../context/sidebar/sidebarContext';
import { AuthContext } from '../../context/authentication/authContext';
import Counter from '../Counter';

import GenericaAvatar from '../../assets/generic-avatar.png';

import {
  Container,
  Left,
  Right,
  IconWrapper,
  NavbarIconWrapperResponsive,
  Avatar
} from './styles'

interface INavbar {
  toggleTheme: (theme: string) => void;
  theme: any;
}

const Navbar = ({ toggleTheme, theme }: INavbar) => {

  const sidebarContext = useContext(SidebarContext);
  const { state: { open }, dispatch } = sidebarContext;
  const { state: { currentUser } } = useContext(AuthContext);

  function handleToggle () {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  function handleTheme() {
    if (theme.title === 'light') {
      toggleTheme('dark');
    }else{
      toggleTheme('light');
    }
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
        <IconWrapper right hover title='Dark Mode' onClick={handleTheme}>
          {theme.title === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
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
        <IconWrapper right title={`Avatar de ${currentUser.displayName}`}>
          <Avatar
            src={currentUser.photoURL || GenericaAvatar}
            alt={`Avatar de ${currentUser.displayName}`}
          />
        </IconWrapper>
      </Right>
    </Container>
  )
}

export default Navbar