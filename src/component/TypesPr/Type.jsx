import React from "react";
import Navigationbar from "../Appbar";
import ErrorBoundary from "../ErrorBoundary";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'mdbreact/dist/css/mdb.css';
import CardPr from './ProduitCard'
import { MDBInput } from "mdbreact";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import "../../asset/css/Type.css";

import p1 from "../../ProdImg/Product/p1.png"
import p2 from "../../ProdImg/Product/p2.png"
import p3 from "../../ProdImg/Product/p3.png"
import p4 from "../../ProdImg/Product/p4.png"
import p5 from "../../ProdImg/Product/p5.png"
import p6 from "../../ProdImg/Product/p6.png"
import p7 from "../../ProdImg/Product/p7.png"
import p8 from "../../ProdImg/Product/10L.png"
// import p8 from "../../ProdImg/Background/BackModals.jpg"






export default class Type extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            options: [
                { value: 'PEHD', label: 'PEHD' },
                { value: 'PVC', label: 'PVC' },
                { value: 'PL', label: 'PL' }
            ],
            volume: [
                { value: 'Jerican', label: '20L' },
                { value: 'Jerican', label: '10L' },
                { value: 'Bidon', label: '5L' },
                { value: 'Bidon', label: '2L' },
                { value: 'Bouteille', label: '1L' }
            ],
            Forme: [
                { value: 'carre', label: 'carre' },
                { value: 'oval', label: 'oval' },
                { value: 'Bidon', label: 'Bidon' },

            ],
            TypePr: [
                { value: 'Lubirifiant', label: 'Lubirifiant' },
                { value: 'chimique', label: 'chimique' },
                { value: 'Alimentaires', label: 'Alimentaires' },
                { value: 'Divers', label: 'Divers' }
            ],
            animatedComponents: makeAnimated()
        })
    }

    render() {


        return (
            <div className="Type">
                <ErrorBoundary >
                    <Navigationbar theme={this.state.navTheme} />
                </ErrorBoundary>
                <br /><br /><br />
                <Container fluid className="container-Pr mt-5 Container-PrPage "  >
                    <Row>
                        <Col xs={2}>
                            <Container className="filter">
                                <Row className="d-flex flex-row mt-5 mb-3">
                                    <Col className="d-flex justify-content-center ">
                                        <h1>Filtre</h1>
                                    </Col>
                                </Row>
                                <Row className="mb-3 ">
                                    <div className="Search " >
                                        <p>Utilisez le champ ci-dessous pour rechercher un numéro d'article ou un mot clé.</p>
                                        <MDBInput label="Search" icon="search" onIconClick={() => alert("Wait! This is an alert!")} outline size="md" />
                                    </div>
                                </Row>
                                <Row className="mb-3">
                                    <div className="TypePr">
                                        <h4 className="widget-title"><span className="prdctfltr_widget_title">Type Produit:<i className="prdctfltr-up"></i>
                                        </span>
                                        </h4>
                                        <Select options={this.state.TypePr} />

                                    </div>
                                </Row>
                                <Row className="mb-3">
                                    <div className="Volume">
                                        <h4 className="widget-title"><span className="prdctfltr_widget_title">Volume:<i className="prdctfltr-up"></i>
                                        </span>
                                        </h4>

                                        <Select size="sm" options={this.state.volume} closeMenuOnSelect={false} isMulti isClearable components={this.state.animatedComponents} />
                                    </div>
                                </Row>

                            </Container>
                        </Col>
                        <Col xs={8} md={{ offset: 1 }}>
                            <section className='text-center my-5'>
                                <div className="patterns">
                                    <svg width="100%" height="100%">
                                        <text x="50%" y="60%" textAnchor="middle"  >
                                            Nos Produits
                                        </text>
                                    </svg>
                                </div>

                            </section>
                            <section id="content">
                                <ul className=" d-flex align-content-around  justify-content-between flex-wrap">
                                    <CardPr img={p1} />
                                    <CardPr img={p2} />
                                    <CardPr img={p3} />
                                    <CardPr img={p4} />
                                    <CardPr img={p5} />
                                    <CardPr img={p6} />
                                    <CardPr img={p7} />
                                    <CardPr img={p8} />
                                    <CardPr img={p1} />
                                    <CardPr img={p2} />
                                    <CardPr img={p3} />
                                </ul>
                                <div className="d-flex justify-content-end mb-5">
                                    <nav aria-label="...">
                                        <ul className="pagination pagination-circle">
                                            <li className="page-item disabled">
                                                <a href='/#' className="page-link">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="/#">1</a></li>
                                            <li className="page-item active" aria-current="page">
                                                <a className="page-link" href="/#">2 <span className="visually-hidden">(current)</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="/#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </section>

                        </Col>


                    </Row>

                </Container>


            </div>);
    }
}

