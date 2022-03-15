import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import White_Logo from '../ProdImg/kamoSvg/logo-white-g2.svg'
import Dark_Logo from '../ProdImg/kamoSvg/logo-black-g2.svg'
import { Call } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, GlobalStyles, Link, CssBaseline } from '@mui/material';
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { Fade } from 'react-reveal'

import '../asset/css/navbar.css'

function style(props) {
    return {
        bg: props.bg,
        logo: props.logo,
        marginTop: props.mt,
        Menu: { paddingTop: props.pt },
        links: {
            fontFamily: 'Rajdhani !important',
            fontSize: '20px !important',
            fontWeight: 600,
            color: props.color,
            my: 2,
            mx: 2.5,
            transition: '1s'
        }
    }
}
export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showNavSecond: false,
            visible: false,
            theme: style({ mt: 2, pt: 1, bg: 'transparent', logo: White_Logo, color: 'white' }),
        }
        this.setShowNavSecond = this.setShowNavSecond.bind(this)
    }
    setShowNavSecond() {
        this.setState({
            showNavSecond: !this.state.showNavSecond
        })
    }
    handleVisibleChange = flag => {
        this.setState({ visible: flag });
    }
    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({
                theme: style({ mt: 0, pt: 3, bg: '#f5f5f5', logo: Dark_Logo, color: 'black' }),
            }
            );
        } else {
            this.setState({
                theme: style({ mt: 2, pt: 1, bg: 'transparent', logo: White_Logo, color: 'white' }),
            });
        }
    };
    componentDidMount() {
        if(window.scrollY>50)
            this.setState({
                theme: style({ mt: 2, pt: 1, bg: 'transparent', logo: White_Logo, color: 'white' }),
            });
        window.addEventListener("scroll", this.listenScrollEvent);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.listenScrollEvent);
    }
    render() {
        const Product_Menu = (
            <Menu onClick={this.handleMenuClick} style={this.state.theme.Menu}>
                <Menu.Item key="1">Produits Chimique</Menu.Item>
                <Menu.Item key="2">Produits Lubrifiant</Menu.Item>
                <Menu.Item key="3">Produits Alimentaire</Menu.Item>
            </Menu>
        )
        return (
            <>
                <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color="default"
                    elevation={0}
                    sx={{
                        backgroundColor: `${this.state.theme.bg}`,
                        mt: this.state.theme.marginTop
                    }}
                >
                    <Toolbar sx={{ flexWrap: 'wrap' }}>
                        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                            <Fade left >
                                <img
                                    src={this.state.theme.logo}
                                    alt='Kamoplast'
                                    loading="lazy"
                                    width={360}
                                    height={55}
                                /></Fade>
                        </Typography>
                        <Fade top >
                            <nav>
                                <Link
                                    variant="button"
                                    underline='none'
                                    href="#"
                                    sx={this.state.theme.links}
                                    className='active'
                                >
                                    ACCUEIL
                                </Link>
                                <Link
                                    variant="button"
                                    underline='none'
                                    href="#PS"
                                    sx={this.state.theme.links}
                                >
                                    Presentation
                                </Link>
                                <Dropdown
                                    overlay={Product_Menu}
                                    onVisibleChange={this.handleVisibleChange}
                                    visible={this.state.visible}
                                >
                                    <Link
                                        className='ant-dropdown-link'
                                        variant="button"
                                        underline='none'
                                        color="text.primary"
                                        href="#PDS"
                                        sx={this.state.theme.links}
                                        onClick={e => e.preventDefault()}
                                    >
                                        Produits  <CaretDownOutlined className='dropdown' />
                                    </Link>
                                </Dropdown>
                                <Link
                                    variant="button"
                                    underline='none'
                                    href="#"
                                    sx={this.state.theme.links}
                                >
                                    <Call />Contact
                                </Link>
                            </nav>
                        </Fade>
                    </Toolbar>
                </AppBar>
            </ >
        )
    }
}