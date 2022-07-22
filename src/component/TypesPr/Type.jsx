import React from "react";
import NavBar from "../navbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import makeAnimated from 'react-select/animated';

import { MDBInput } from "mdbreact";
import Select from 'react-select'

import Cards from "./PaginateCards"
import "../../asset/css/Type.scss";
import JsonData from "./MOCK_DATA.json";


import p1 from "../../ProdImg/Product/p1.png"
import p2 from "../../ProdImg/Product/p2.png"
import p3 from "../../ProdImg/Product/p3.png"
import p4 from "../../ProdImg/Product/p4.png"
import p5 from "../../ProdImg/Product/p5.png"
import p6 from "../../ProdImg/Product/p6.png"
import p7 from "../../ProdImg/Product/p7.png"
import p8 from "../../ProdImg/Product/10L.png"





export default class Type extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            volume: [
                { value: '20L', label: '20L' },
                { value: '10L', label: '10L' },
                { value: '5L', label: '5L' },
                { value: '2L', label: '2L' },
                { value: '1L', label: '1L' }
            ],

            TypePr: [
                { value: 'All', label: 'All' },
                { value: 'Lubirifiant', label: 'Lubirifiant' },
                { value: 'chimique', label: 'chimique' },
                { value: 'Alimentaires', label: 'Alimentaires' },
                { value: 'Divers', label: 'Divers' }
            ],
            animatedComponents: makeAnimated(),
            name: null,
            S_Option1: "",
            S_Option2: null,
            cards: JsonData.slice(0),
            id:0,
        })
        this.changeText = this.changeText.bind(this);
        this.selectoptionTProduit = this.selectoptionTProduit.bind(this);
        this.selectoptionVolume = this.selectoptionVolume.bind(this);
        this.Manupilate_Filter=this.Manupilate_Filter.bind(this)
    }
    Manupilate_Filter(id) {
        switch (id) {
            case 0: return this.state.cards;
            case 1: return(this.generalfilter()); 
            case 2: return(this.Filter_Produit());
            case 3: return(this.Filter_Volume()); 
        }
    }

    //Filter_Product_Generaly
    generalfilter() {
        let itemss = this.state.cards;
        console.log(this.state.name);
        if (this.state.name != null) {
            if (this.state.name != "") 
                return itemss.filter(Item => {return ((Item.id.toString()).toLowerCase().includes(this.state.name) || Item.firstName.toLowerCase().includes(this.state.name) || Item.lastName.toLowerCase().includes(this.state.name)) });
            
        } 
        return itemss;
    }
    //Filter_Product_ByTypeProduit
    Filter_Produit() {
        let itemss = this.state.cards;
        console.log(this.state.S_Option1)
        if (this.state.S_Option1 != ""){
            if (!(((this.state.S_Option1).toLowerCase()).includes("all"))) 
                return itemss.filter(Item => { return ((Item.id.toString()).toLowerCase().includes((this.state.S_Option1).toLowerCase())) });
        } 
        return itemss
    }
    //Filter_Product_ByVolume
    Filter_Volume() {
        let items = [];
        if (this.state.S_Option2 != null) {
            if (this.state.S_Option2.length == 0) { items = this.state.cards }
            else {
                let i = 0;
                for (const element of this.state.S_Option2) {
                    this.state.cards.filter(Item => {
                        if (Item.id.toString().includes(element.value)) {
                            items[i] = Item; i++;
                        }
                    })
                }
            }
            return (items)
        } else { return (this.state.cards) }
    }
    // Filter_PrVo(){
    //     if (this.state.S_Option1 != null && this.state.S_Option2!="") { 

    //     }
    // }

    //After Any click in general filter 
    changeText(event) {
        this.setState({
            name: (event.target.value).toLowerCase(),
            id: 1
        });

    }

    selectoptionTProduit(event) {
        this.setState({
            S_Option1: event.value,
            id: 2
        });

    }
       //Select Options From input Volume
       selectoptionVolume(event) {
        this.setState({
            S_Option2: event,
            id: 3
        });}

    render() {
        return (
            <div className="Type">
                {/* NavBar */}

                <NavBar />
                {/* SideBar_Filter */}
                <Container fluid className="container-Pr mt-5 Container-PrPage "  >
                    <Row>
                        <Col xs={2}>
                            <Container className="filter">
                                {/* Title of Side Bar */}
                                <Row className="d-flex flex-row mt-5 mb-3">
                                    <Col className="d-flex justify-content-center ">
                                        <h1>Filtre</h1>
                                    </Col>
                                </Row>
                                {/* Filter Groups of Side Bar */}
                                <Row className="FilterGrp">
                                    {/* General Filter */}
                                    <div className="mb-3">
                                        <div className="Search" >
                                            <p>Utilisez le champ ci-dessous pour rechercher un numéro d'article ou un mot clé.</p>
                                            <MDBInput   label="Search"  icon="search"   
                                                        onIconClick={() => alert("Wait! This is an alert!")} outline size="md" onChange={this.changeText} 
                                                        />
                                        </div>
                                    </div>
                                    {/* Filter By TypeProduit */}
                                    <div className="mb-3">
                                        <div className="TypePr">
                                            <h4 className="widget-title"><span className="prdctfltr_widget_title">Type Produit:<i className="prdctfltr-up"></i>
                                            </span>
                                            </h4>
                                            <Select className="TypeprSelect" options={this.state.TypePr} onChange={this.selectoptionTProduit} />

                                        </div>
                                    </div>
                                    {/* Filter By Volume */}
                                    <div className="mb-3">
                                        <div className="Volume">
                                            <h4 className="widget-title"><span className="prdctfltr_widget_title">Volume:<i className="prdctfltr-up"></i>
                                            </span>
                                            </h4>

                                            <Select className="VolumeSelect" size="sm" options={this.state.volume} onChange={this.selectoptionVolume} closeMenuOnSelect={false} isMulti isClearable components={this.state.animatedComponents} />
                                        </div>
                                    </div>
                                </Row>

                            </Container>
                        </Col>
                        {/* Display of items in cards */}
                        <Col xs={8} md={{ offset: 1 }}>
                            {/* Title_Nos produits */}
                            <section className='text-center my-5'>
                                <div className="patterns">
                                    <svg width="100%" height="100%">
                                        <text x="50%" y="60%" textAnchor="middle"  >
                                            Nos Produits
                                        </text>
                                    </svg>
                                </div>
                            </section>
                            {/* items */}
                            <section id="content">
                                <Cards items={this.Manupilate_Filter(this.state.id)} />
                            </section>
                        </Col>
                    </Row>
                </Container>


            </div>);
    }
}

