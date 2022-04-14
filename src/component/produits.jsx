import React from 'react'

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../asset/css/produits.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavBar from './navbar'
import NavSidebar from './SideBar'
import Slider from './Carousel'
import Produit from './TypeProduit'



export default class Produits extends React.Component {

    // constructor(props) {
    //     super(props)

    // }

    render() {

        return (
            <Container fluid className="ProduitPage">
                <NavBar />
                <Slider />
                <Container fluid className="mt-5 mb-5 "  >
                    <Row gutter={40} style={{ marginLeft: 50 + 'px', marginRight: 50 + 'px' }}>

                        <Col md={2} className="SideBar">
                                <div className="d-flex justify-content-center mb-3">
                                    <h4>KamoPlast</h4>
                                </div>
                                <section className="section justify-content-center">
                                    <NavSidebar />
                                </section>
                        </Col >
                        {/*  */}
                        <Col >
                            <Produit title="Lubirifiants" />
                            <Produit title="chimque" />
                            <Produit title="Alimentaire" />
                            <Produit title="Divers" />

                        </Col>


                    </Row>
                </Container>



            </Container>
        );
    }
}