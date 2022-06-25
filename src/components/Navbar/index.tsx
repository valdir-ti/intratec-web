import {
  Menu
} from '@mui/icons-material';
import { useContext } from 'react'


import { SidebarContext } from '../../context/sidebar/sidebarContext';

import {
  Container,
  Left,
  Right,
  NavbarIconWrapper,
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
        <NavbarIconWrapper open={open}>
          <Menu onClick={handleToggle} titleAccess={open ? 'Close Menu' : 'Open Menu'} />
        </NavbarIconWrapper>
        <NavbarIconWrapperResponsive>
          <Menu onClick={handleToggle} titleAccess={'Close Menu'} />
        </NavbarIconWrapperResponsive>
      </Left>
      <Right>Right</Right>
    </Container>
  )
}

export default Navbar