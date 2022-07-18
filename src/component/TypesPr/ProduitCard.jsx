import React from 'react';
import { Link } from "react-router-dom"
import "../../asset/css/Type.css";
import $ from "jquery";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import { Nav } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import b2 from "../../ProdImg/Bouchon/Bouchon-60-H-Rouge.png"



export default class CardPr extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    };
  }
  componentDidUpdate() {
    if (this.state.show) {
      $(".Type").addClass("TypeafterModal");

    } else {
      $(".Type").removeClass("TypeafterModal");
    }

    var x = true;
    $(".image-gallery-content").click(() => {
      $(".image-gallery-svg").click(() => { x = false; });
      $(".image-gallery-thumbnail-image").click(() => { x = false; });
      if (x == true) {
        document.exitFullscreen();
        console.log("OK");
      }
      x = true;
    })


  }

  handleSelect(selectedKey) {
    console.log(selectedKey);
          $("#nav-profile").addClass("show active");

    if (selectedKey === "#nav-profile") {
      $("#nav-profile").show();
      $("#nav-home").hide();
    } else {
      $("#nav-profile").hide();
      $("#nav-home").show();
    }
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

      <li className="Card mb-3" key={this.props.product.id}>
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
                <div className="volume"><span>Volume:</span>{this.props.product.firstName}</div>
                <div className="matierePr"><span>Matiere:</span>{this.props.product.lastName}</div>
                <div className="Poids"><span>Poids</span>{this.props.product.lastName}</div>
                <div className="SacUnites" ><span>livree par </span> {this.props.product.email}</div>
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
          size="xl"
          // className="Modal"
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
                    <Nav fill variant="tabs" defaultActiveKey="#nav-home" onSelect={key => this.handleSelect(key)}>
                      <Nav.Item>
                        <Nav.Link className="nav-item nav-link " eventKey="#nav-home" aria-selected="true"><h6>Jerrican</h6></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="nav-item nav-link" eventKey="#nav-profile" aria-selected="true"><h6>Bouchon</h6></Nav.Link>
                      </Nav.Item>

                    </Nav>

                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-home" role="tabpanel">
                        <div className="sizes_box2 d-flex flex-row"><span>Matiere:</span><div>PEHD</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Poids:</span><div>1100/1200 g</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Tiente:</span><div>10L</div></div>
                        <div className="sizes_box2 d-flex flex-row "><span>Opacité</span><div>Transparent/Blanc/Bleu/Vert/Jaune/Rouge/Gris Metalise</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Empilable:</span><div>26 cm</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Sac de:</span><div>8 unites</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span><i className="fa fa-weight-hanging" ></i>Volume</span><div>10 L</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Hauteur</span><div>160 mm</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Longeur</span><div>15 mm</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Largeur</span><div>168 mm</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Etiquette</span><div className="d-flex flex-column Etiquette"><div className="p-2">180mm</div><div className="p-2">L190mm</div></div></div>
                      </div>
                      <div className="tab-pane fade " id="nav-profile" role="tabpanel">
                        <div className="sizes_box2 d-flex flex-row"><span>Matiere:</span><div>PEHD</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Capsule:</span><div>Oui/Non</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Joint:</span><div>Oui/Non</div></div>
                        <div className="sizes_box2 d-flex flex-row "><span>Degaseurs</span><div>Oui/Non</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Inovliable:</span><div>60 mm</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Dimension</span><div>60 mm</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span><i class="fa fa-weight-hanging" ></i>Volume</span><div>10 L</div></div>
                        <div className="sizes_box2 d-flex flex-row"><span>Couleurs</span><div>Noir/Blanc/Bleu/Vert/Noir/Blanc/Bleu/Vert</div></div>
                      </div>
                    </div>
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
