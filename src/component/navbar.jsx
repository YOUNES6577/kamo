import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo from './LOGO.jpg'
import { Call } from '@mui/icons-material';
import {AppBar,Toolbar,Typography,GlobalStyles,Link,CssBaseline} from '@mui/material';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showNavSecond: false
        }
        this.setShowNavSecond = this.setShowNavSecond.bind(this)
    }
    setShowNavSecond() {
        this.setState({
            showNavSecond: !this.state.showNavSecond
        })
    }
    render() {
        return (
            <React.Fragment>
                <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                >
                    <Toolbar sx={{ flexWrap: 'wrap' }}>
                        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                            <img 
                            src={Logo}
                            alt='Kamoplast' 
                            loading="lazy" 
                            />
                        </Typography>
                        <nav>
                            <Link
                                variant="button"
                                underline='none'
                                color="primary"
                                href="#"
                                sx={{ my: 1, mx: 1.5 }}
                            >
                                ACCUEIL
                            </Link>
                            <Link
                                variant="button"
                                underline='none'
                                color="text.primary"
                                href="#"
                                sx={{ my: 1, mx: 1.5 }}
                            >
                                Produits
                            </Link>
                            <Link
                                variant="button"
                                underline='none'
                                color="text.primary"
                                href="#"
                                sx={{ my: 1, mx: 1.5 }}
                            >
                                Présentation
                            </Link>
                            <Link
                                variant="button"
                                underline='none'
                                color="text.primary"
                                href="#"
                                sx={{ my: 2, mx: 1.5 }}
                            >
                                <Call />Contact
                            </Link>
                        </nav>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}