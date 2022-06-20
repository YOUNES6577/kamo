/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import Logo from '../ProdImg/LOGO.jpg'
import White_Logo from '../ProdImg/kamoSvg/logo-white-g2.svg'
import Dark_Logo from '../ProdImg/kamoSvg/logo-black-g2.svg'

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

export default class NavBt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showNavSecond: false,
            visible: false,
            theme: style({ mt: 2, pt: 1, bg: 'transparent', logo: White_Logo, color: 'white' }),
        }
        this.setShowNavSecond = this.setShowNavSecond.bind(this)
    }

    render() {
        return <Navbar collapseOnSelect fixed='top' bg="transparent" variant='dark' expand="sm">
            <Container>
                <Navbar.Brand href="#home"><img src={Logo} width={220} height={45} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className='me-auto' />
                    <Nav >
                        <Nav.Link
                            // style={this.state.theme.links}
                            href="#home">ACCUEIL</Nav.Link>
                        <Nav.Link href="#link">Presentation</Nav.Link>
                        <NavDropdown title="Produits" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    }
}