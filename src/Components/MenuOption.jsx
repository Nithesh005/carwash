import { Avatar, Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { navigation } from "../MappingObjects/Mappings"
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

export const MenuOption = ({setAuth}) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const destroySession = () =>{
        localStorage.removeItem('LoginKey');
        setAuth(false);
        handleCloseNavMenu();
    }


    return (
        // <div className="hai">hello</div>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <Avatar alt="P" src="/static/images/avatar/1.jpg" />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'block' },
                }}
            >
                {navigation.map((item) => (
                    <MenuItem key={item.tittle} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{item.tittle}</Typography>
                    </MenuItem>
                ))}
                <MenuItem onClick={destroySession}>
                    <Typography textAlign="center">Log Out</Typography>
                </MenuItem>
                {/* <Button 
                onClick={destroySession}
                >
                    Log Out
                </Button> */}
            </Menu>
        </Box>
    )
}