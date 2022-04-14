import React from 'react';
import { Link } from "react-router-dom"
import "../../asset/css/Type.css";

import b2 from "../../ProdImg/Bouchon/Bouchon-60-H-Rouge.png"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import { Divider } from '@mui/material';



import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import $ from "jquery";



export default class CardPr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      hol:"as"

    };
  }
  componentDidUpdate(){
    if(this.state.show){
        $(".Type").addClass("TypeafterModal");
        
      }else{
        $(".Type").removeClass("TypeafterModal");
      }
    
    $(".image-gallery-fullscreen-button").click(()=>{
      console.log("ok")  
     })
     
     
     
     
  }

  componentDidMount() {
  
    
       
        
  }
  


  render() {


    const images = [
      {
        original: this.props.img,
        thumbnail: this.props.img,
      },
      {
        original: this.props.img,
        thumbnail: this.props.img,
      },
      {
        original: this.props.img,
        thumbnail: this.props.img,
      },
    ];

    
    return (

      
      <li className="mb-3">

        <Link to="" onClick={() => this.setState({ show: true })}>
          <div className="Card_Container-image">
            <img className="imgPr" width="200" height="300" src={this.props.img} alt="img" sizes="(max-width: 500px) 100vw, 500px" />
          </div>
        </Link>
        <div className="product-details-wrapper">
          <div className="fusion-product-content">
            <div className="product-details">
              <h3 className="product-title d-flex justify-content-center">
                <Link to="" onClick={() => this.setState({ show: true })}>
                  <span className="RefPr">Ref:FL-J25L-Jerrican</span>
                </Link>
              </h3>

              <div className="DescriptionPr">
                <div className="volume"><span>Volume:</span>25 L</div>
                <div className="matierePr"><span>Matiere:</span>PEHD</div>

                <div className="Poids"><span>Poids</span>90g</div>
                <div className="SacUnites" ><span>livree par </span> 8 unite</div>
                <div className="product-buttons">

                  <Link to="" onClick={() => this.setState({ show: true })}>
                    <div className="product-buttons-container d-flex justify-content-between">
                      <span >voir description</span>
                      <span >
                        Details</span>
                    </div>
                  </Link>

                </div>
              </div>


            </div>

          </div>

        </div>
        
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="example-custom-modal-styling-title"
          animation={true}
          centered={true}
          size= "xl"
          className="Modal"
          dialogClassName="modal-90w"

        >
          
          <div className="container ContainerModel " >
        
          <Modal.Header closeButton ><h4 className="Reference">Ref:FL-J25L-Jerrican</h4></Modal.Header >

            <Modal.Body className="ModalBody">

              <Container fluid className="Model-Description">
                <Row>
                  <Col md={{ span: 4, offset: 1 }} className="mr-5">

                    <div className="images-Products" >

                      <ImageGallery items={images}
                        showNav={true}
                        showPlayButton={false}
                        autoPlay={true}
                        slideDuration={450}
                        thumbnailPosition="left"
                        useTranslate3D={true}
                      />
                      <div className="Bouchon-Produit-list container-fluid " >
                        <div className="images-buchon d-flex flex-row justify-content-between" >
                          <img alt="b1" src={b2} />
                          <img alt="b2" src={b2} />
                          <img alt="b3" src={b2} />
                          <img alt="b4" src={b2} />
                        </div>
                      </div>

                    </div>
                  </Col>
                  <Col md={{ span: 6 }} className="ColumnDetails">

                    <Row>
                      <Col md={{ span: 5, offset: 0 }}>
                        <div className="description-Product">
                          <div className="d-flex flex-row caractere-Product  " >
                            <div className="compenant-description">
                              <h4 className="Details">Jerrican</h4>
                              <div className="d-flex flex-row "><h5 className="HeaderTitle" >Matiere:</h5><span>PEHD</span></div>
                              <div className="d-flex flex-row mr-auto"><h5 className="HeaderTitle" >Poids:</h5> <span>1100/1200 g </span></div>
                              <div className="d-flex flex-row "><h5 className="HeaderTitle" >Volume:</h5><span> 10L</span></div>
                              <div className="d-flex flex-row "><h5 className="HeaderTitle" >Tiente:</h5><span> Transparent/Blanc/Bleu/Vert/Jaune/Rouge</span></div>
                              <div className="d-flex flex-row "><h5 className="HeaderTitle" >Opacité:</h5><span>Opaque</span></div>
                              <div className="d-flex flex-row "><h5 className="HeaderTitle" >Empilable:</h5><span>oui/non</span></div>
                              <div className="d-flex flex-row "><h5 className="HeaderTitle" >Sac de:</h5><span> 8 Unités</span></div>
                              <div className="d-flex flex-row "><h5 className="HeaderTitle" >Hauteur:</h5><span>160mm</span></div>
                              <div className="d-flex flex-row "><h5 className="HeaderTitle" >Longeur:</h5><span>15mm</span></div>
                              <div className="d-flex flex-row "><h5 className="HeaderTitle" >Largeur:</h5><span>168mm</span></div>
                              <div className="d-flex flex-row "><h5 className="HeaderTitle" >Etiquette:</h5> <span>H:180 mm / L:190 mm</span></div>

                            </div>
                            <Divider orientation="vertical" flexItem>
                              <br></br>
                            </Divider>
                          </div>

                        </div>

                      </Col>

                      <Col md={{ offset: 2, span: 5 }}>
                        <div className="Bouchon-Produit " style={{ marginLeft: 5 + "px" }}>
                          <h4 className="Details">Buchon</h4>
                          <div className="BuchonDescr d-flex flex-column">
                            <div className="d-flex flex-row "><h5 className="HeaderTitle" ><b>Matiere:</b></h5><span>PEHD</span></div>
                            <div className="d-flex flex-row "><h5 className="HeaderTitle" ><b>Capsule:</b></h5><span>oui/Non</span></div>
                            <div className="d-flex flex-row "><h5 className="HeaderTitle" ><b>Joint:</b></h5><span>oui/non</span></div>
                            <div className="d-flex flex-row "><h5 className="HeaderTitle" ><b>Degaseur:</b></h5><span>oui/Non</span></div>
                            <div className="d-flex flex-row "><h5 className="HeaderTitle" ><b>inovliable:</b></h5><span>oui/Non</span></div>
                            <div className="d-flex flex-row "><h5 className="HeaderTitle" ><b>Dimension:</b></h5><span>60mm</span></div>
                            <div className="d-flex flex-row "><h5 className="HeaderTitle" ><b>Couleurs:</b></h5><span>Noir/Blanc/Bleu/Vert/Noir/Blanc/Bleu/Vert</span></div>

                          </div>
                        </div>
                      </Col>
                    </Row>

                  </Col>
                </Row>

              </Container>
            </Modal.Body>
          </div>
        </Modal>




      </li >





    );
  }
}

