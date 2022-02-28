import * as React from 'react'
import { Container, Row } from 'react-bootstrap';
import NavBar from './navbar'
import Footer from './footer'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() {
        return <Container fluid='true'>
            <NavBar />
            <Footer  />
        </Container>
    }   
}