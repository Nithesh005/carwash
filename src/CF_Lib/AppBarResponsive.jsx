import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { navigation } from "../MappingObjects/Mappings"
import { createContext, useContext, useEffect, useState } from "react";
import { LoginModal } from "./LoginModal";
import { MenuOption } from "../Components/MenuOption";
export const MyContext = createContext();

export const AppBarResponsive = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [open, setOpen] = useState(false);
    const handleOpenClick = () => setOpen(true);

    const [Auth, setAuth] = useState(false);
    const sessionData = localStorage.getItem('LoginKey');
    useEffect(() => {
      if (sessionData) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    }, [sessionData]);

    const destroySession = () =>{
        localStorage.removeItem('LoginKey');
        setAuth(false);
    }
   
    return (
        <div className="withModal">
            <MyContext.Provider value={[open, setOpen]}>
                <LoginModal />
            </MyContext.Provider>
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
                                menu
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
                        {Auth ?
                            (
                                <Typography>
                                    <MenuOption setAuth={setAuth}/>
                                </Typography>
                            ) :
                            (
                                <Typography>
                                    <Button
                                        onClick={handleOpenClick}
                                    >
                                        Sign In
                                    </Button>
                                </Typography>
                            )
                        }


                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}