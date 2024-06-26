import {useState } from 'react';

import './BeforeLogin.css'
import axios from 'axios';
import { ResponsiveAppBar, navigation } from '../CF_Lib/R---esponsiveAppBar';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Modal, TextField, Toolbar, Typography } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import handWave from '../assets/waving-hand.png'
import { LoginModal } from '../CF_Lib/LoginModal';
import { AppBarResponsive } from '../CF_Lib/AppBarResponsive';



// export const Context = createContext();

const BeforeLogin = ({ onOpenModal }) => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // const [open, setOpen] = useState(false);
    // const handleOpenClick = () => setOpen(true);

    return (
        <div className='appWithmain' style={{ display: 'flex' }}>
            <AppBarResponsive />
            <div className="beforeLogin">
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 1, marginTop: '70px' }}
                >
                    <h1>Welcome to our website!</h1>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    </Typography>
                </Box>
            </div>
        </div>
    )
}

export default BeforeLogin;