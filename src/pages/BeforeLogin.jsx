import { createContext, useState } from 'react';

import './BeforeLogin.css'
import axios from 'axios';
import { ResponsiveAppBar, navigation } from '../CF_Lib/ResponsiveAppBar';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Modal, TextField, Toolbar, Typography } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import handWave from '../assets/waving-hand.png'
import { LoginModal } from '../CF_Lib/LoginModal';



export const Context = createContext();

const BeforeLogin = ({ onOpenModal }) => {

    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    // };

    // const handleCloseModal = () => {
    //     setIsModalOpen(false);
    // };

    // const [formValues, setFormValues] = useState({
    //     username: '',
    //     password: ''
    // });
    // const handleChange = (prop) => (event) => {
    //     setFormValues({ ...formValues, [prop]: event.target.value });
    // };

    // const ValidateUser = async () => {
    //     console.log(formValues);
    //     try {
    //         const response = await axios.post('http://localhost:8080/login', formValues);
    //         console.log('Response:', response.data);
    //         // Handle the response as needed
    //     } catch (error) {
    //         console.error('Error:', error);
    //         // Handle the error as needed
    //     }

    // }
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

    const [open, setOpen] = useState(false);
    const handleOpenClick = () => setOpen(true);

    return (
        <div className='appWithmain' style={{ display: 'flex' }}>
            {/* <ResponsiveAppBar onOpenModal={handleOpenModal} /> */}
            {/* <ResponsiveAppBar /> */}
            {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
            <Context.Provider value={[open, setOpen]}>
                <LoginModal />
            </Context.Provider>

            <AppBar sx={{ backgroundColor: "white", color: "black" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                menu icon
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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {navigation.map((item) => (
                                    <MenuItem key={item.tittle} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{item.tittle}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography>
                            <Button onClick={handleOpenClick}>
                                Sign In
                            </Button>
                        </Typography>

                    </Toolbar>
                </Container>
            </AppBar>
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