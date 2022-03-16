import React, { useState } from "react";
import NavBar from "../navbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CardPr from './ecommerce'
import { MDBInput, MDBRow } from "mdbreact";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { Checkbox, CheckboxGroup } from 'rsuite';
import Paginate from "./PaginateCard"
import "../../asset/css/Type.css";




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
    // onSelect(selectedList, selectedItem) {
    //     alert("sele")
    // }

    // onRemove(selectedList, removedItem) {
    //     alert("remove")

    // }
    render() {
        return (
            <>
                <NavBar />
                <br />
                <br />
                <br />

                <Container fluid className="container-Pr mt-5"  >
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
                                <Row className="mb-3">
                                    <div className="MatierePr mt-2">
                                        <h4 className="widget-title"><span className="prdctfltr_widget_title">Matiere Produit:<i className="prdctfltr-up"></i>
                                        </span>
                                        </h4>
                                        <Select size="sm" options={this.state.options} closeMenuOnSelect={false} isMulti isClearable components={this.state.animatedComponents} />
                                    </div>
                                </Row>
                                <Row className="mb-3">
                                    <div className=" Forme mt-2" >
                                        <h4 className="widget-title"><span className="prdctfltr_widget_title">Forme:<i className="prdctfltr-up"></i>
                                        </span>
                                        </h4>
                                        {/* <Select size="sm" options={this.state.Forme} closeMenuOnSelect={false} isMulti isClearable components={this.state.animatedComponents} /> */}
                                        <CheckboxGroup label="Favorite sports">
                                            <Checkbox value="soccer">{this.state.Forme[0].value}</Checkbox>
                                            <Checkbox value="baseball">{this.state.Forme[1].value}</Checkbox>
                                            <Checkbox value="basketball">{this.state.Forme[2].value}</Checkbox>
                                        </CheckboxGroup>


                                    </div>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs={7} md={{ offset: 1 }}>
                            <section className='text-center my-5'>
                                <h2 className='h1-responsive font-weight-bold text-center my-5'>Nos Produits</h2>
                                {/* <p className='grey-text text-center w-responsive mx-auto mb-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
                                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                                </p> */}
                            </section>
                            <section id="content">
                                <ul className=" d-flex align-content-around  justify-content-between flex-wrap">
                                    <CardPr img="" Title="" />
                                    <CardPr />
                                    <CardPr />
                                    <CardPr />
                                    <CardPr />
                                    <CardPr />
                                    <CardPr />
                                    <CardPr />
                                    <CardPr />
                                    <CardPr />
                                    <CardPr />
                                    {/* <Paginate/> */}

                              
                                </ul>
                                <div className="d-flex justify-content-end mb-5">
                                    <nav aria-label="...">
                                        <ul class="pagination pagination-circle">
                                            <li class="page-item disabled">
                                                <a class="page-link">Previous</a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item active" aria-current="page">
                                                <a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </section>

                            {/* <EcommercePage /> */}
                        </Col>


                    </Row>

                </Container>


            </>);
    }
}

