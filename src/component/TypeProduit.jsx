import React from 'react'
import Card from "./Card"

import { MDBRow } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import S4 from "./Produits/jer.png"


export default class Produit extends React.Component {
    // constructor(props) {
    //     super(props)

    // }

    render() {

        return <div className="container " >
            <Row>
                <Row><h1>{this.props.title}</h1></Row>
                <Row>
                    <Col className="mb-3 d-flex ">
                        <div className="">
                            <MDBRow className='row-cols-1 row-cols-sm-4  MDBROW'>
                                <Card title="Jerican 25L" description="This is a longer card with supporting text below as a natural lead-in to additional content.
                                 This content is a little bit longer." imgSrc={S4} />
                                <Card title="Card title" description="This is a longer card with supporting text below as a natural lead-in to additional content.
                                 This content is a little bit longer." imgSrc="https://www.kamoplast.com/images/ImageProduit/Chimique/10L_PLAT_DT.png" />

                                <Card title="Card title" description="This is a longer card with supporting text below as a natural lead-in to additional content.
                                 This content is a little bit longer." imgSrc="https://www.kamoplast.com/images/ImageProduit/Chimique/5l_CARRE_DT_DJ.png" />
                                <Card title="Card title" description="This is a longer card with supporting text below as a natural lead-in to additional content.
                                 This content is a little bit longer." imgSrc="https://www.kamoplast.com/images/ImageProduit/Chimique/2L_NM_DT.png" >
                                    <Link title="View More"  className="Link" to="/Type">
                                        <button className="btn btn_card " ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg></button>
                                    </Link>
                                </Card>

                            </MDBRow>

                        </div>

                    </Col>
                </Row>

            </Row>

        </div>




    }
}