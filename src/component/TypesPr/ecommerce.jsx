import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip } from 'mdbreact';
import { MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import "../../asset/css/Type.css";
// import S4 from '../Produits/km.png'
import S4 from "../Produits/Km.png"


export default class CardPr extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="mb-5">
        <a href="#" className="product-images" aria-label="FL-J25L-Jerrican 25 Litres">

          <div className="featured-image">
            <img width="200" height="300" src={S4} className="imgPr" alt="img" sizes="(max-width: 500px) 100vw, 500px" data-wp-pid="11362" />
            <div className="cart-loading">
              <i className="fusion-icon-spinner"></i>
            </div>
          </div>
        </a>
        <div className="product-details-wrapper">
          <div className="fusion-product-content">
            <div className="product-details">
              <div className="product-details-container">
                <h3 className="product-title">
                  <a href="https://www.petpower.eu/product/carpo-square-1000ml/">
                    Ref:FL-J25L-Jerrican</a>
                </h3>
                <div className="fusion-price-rating">
                  <div className="wcj_brimful">25 L</div>
                  <span className="price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">€</span>0.00</span>
                  </span>
                  <div className="wcj_reference">PEHD</div>		</div>
              </div>
            </div>

            <div className="wcj_neck_finish">38 SP400</div><div className="wcj_material" id="11361">PET</div><div className="wcj_availability"></div>
            <div className="product-buttons">
              <div className="fusion-content-sep sep-double sep-solid"></div>
              <div className="product-buttons-container clearfix">
                <a rel="nofollow" href="?add-to-cart=11361" data-quantity="1" data-product_id="11361" data-product_sku="5038-1000c0001" className="button product_type_simple add_to_cart_button ajax_add_to_cart">
                  <span className="mh-sr-only">Add to samples</span>
                </a>
                <a href="https://www.petpower.eu/product/carpo-square-1000ml/" className="show_details_button">
                  Details</a>

              </div>
            </div>

          </div> </div>
      </li>






    );
  }
}





