import { useContext } from 'react'

import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import PersonAdd from '@mui/icons-material/PersonAdd';
import ListItemIcon from '@mui/material/ListItemIcon';

import useConfirm from '../../hooks/useConfirmDialog';

import { AuthContext } from '../../context/authentication/authContext';

interface IMenuNav {
    openMenu: boolean;
    anchorEl: any;
    onClose: () => void;
}

const MenuNav = ({ openMenu, anchorEl, onClose }: IMenuNav) => {

    const {ConfirmationDialog, confirm} = useConfirm(
        'Sair',
        'Deseja realmente fazer o logout?',
    )

    const { dispatch: AuthDispatch } = useContext(AuthContext);

    async function handleLogout() {
        const confirmAnswer = await confirm()
        if(confirmAnswer){
            AuthDispatch({type:"LOGOUT"})
        }
    }

    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={openMenu}
            onClose={onClose}
            PaperProps={{
                elevation: 0,
                sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                },
                '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem>
                <Avatar /> Profile
            </MenuItem>
            <MenuItem>
                <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
            <ConfirmationDialog />
        </Menu>
  )
}

export default MenuNav