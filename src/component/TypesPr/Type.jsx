import React from "react";
import Navigationbar from "../Appbar";
import ErrorBoundary from "../ErrorBoundary";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import Cards from "./PaginateCards"
import "../../asset/css/Type.scss";
import "../../asset/css/Type.sass";
import JsonData from "./MOCK_DATA.json";
import { TextField, InputAdornment, Paper } from '@mui/material';
import Search from '@mui/icons-material/Search';
import { Divider } from "antd";
import styled from "styled-components";


const SelectTheme = (theme) => ({
    ...theme,
    borderRadius: 15,
    colors: {
        ...theme.colors,
        primary: 'black',
    },
})
const SelectFiltre = styled.div`
select
    background: red;
`
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
            id: 0,
        })
        this.changeText = this.changeText.bind(this);
        this.selectoptionTProduit = this.selectoptionTProduit.bind(this);
        this.selectoptionVolume = this.selectoptionVolume.bind(this);
        this.Manupilate_Filter = this.Manupilate_Filter.bind(this)
    }
    Manupilate_Filter(id) {
        switch (id) {
            case 0: return this.state.cards;
            case 1: return (this.generalfilter())
            case 2: return (this.Filter_Produit())
            case 3: return (this.Filter_Volume())
            default: return undefined
        }
    }

    //Filter_Product_Generaly
    generalfilter() {
        let itemss = this.state.cards;
        console.log(this.state.name);
        if (this.state.name != null) {
            if (this.state.name !== "")
                return itemss.filter(Item => { return ((Item.id.toString()).toLowerCase().includes(this.state.name) || Item.firstName.toLowerCase().includes(this.state.name) || Item.lastName.toLowerCase().includes(this.state.name)) });
        }
        return itemss;
    }
    //Filter_Product_ByTypeProduit
    Filter_Produit() {
        let itemss = this.state.cards;
        console.log(this.state.S_Option1)
        if (this.state.S_Option1 !== "") {
            if (!(((this.state.S_Option1).toLowerCase()).includes("all")))
                return itemss.filter(Item => { return ((Item.id.toString()).toLowerCase().includes((this.state.S_Option1).toLowerCase())) });
        }
        return itemss
    }
    //Filter_Product_ByVolume
    Filter_Volume() {
        let items = [];
        if (this.state.S_Option2 != null) {
            if (this.state.S_Option2.length === 0) { items = this.state.cards }
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
        });
    }


    render() {


        return (
            <div className="Type">
                <ErrorBoundary >
                    <Navigationbar theme={this.state.navTheme} />
                </ErrorBoundary>
                {/* SideBar_Filter */}
                <Container fluid className="container-Pr mt-5 Container-PrPage "  >
                    <Row>
                        <Col xs={2}>
                            <Container className="filter">
                                <ErrorBoundary>
                                    {/* Filter Groups of Side Bar */}
                                    <Row className="">
                                        <Paper elevation={10} className='FilterGrp bg-light'>
                                            <div className="d-flex justify-content-center mt-2">
                                                <h1>Filtre</h1>
                                            </div>
                                            <Divider style={{ margin: "5px 0" }} />
                                            {/* General Filter */}
                                            <div className="Search p-3  bg-light" >
                                                <p>Rechercher un produit</p>
                                                <TextField
                                                    size="md"
                                                    onChange={this.changeText}
                                                    label="Search"
                                                    variant="outlined"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <Search />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            </div>
                                            <Divider style={{ margin: "5px 0" }} />
                                            {/* Filter By TypeProduit */}
                                            <div className="TypePr p-3 bg-light">
                                                <p >Category</p>
                                                <Select
                                                    className="TypeprSelect"
                                                    options={this.state.TypePr}
                                                    onChange={this.selectoptionTProduit}
                                                    isLoading
                                                    theme={SelectTheme} />
                                            </div>
                                            <Divider style={{ margin: "5px 0" }} />
                                            {/* Filter By Volume */}
                                            <div className="Volume p-3 bg-light">
                                                <p >Volume</p>
                                                <Select
                                                    className="VolumeSelect"
                                                    size="sm"
                                                    options={this.state.volume}
                                                    onChange={this.selectoptionVolume}
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    isClearable
                                                    isLoading
                                                    components={this.state.animatedComponents}
                                                    theme={SelectTheme} />
                                            </div>
                                        </Paper>
                                    </Row>
                                </ErrorBoundary>
                            </Container>
                        </Col>
                        {/* Display of items in cards */}
                        <Col xs={8} md={{ offset: 1 }}>
                            <ErrorBoundary >
                                {/* items */}
                                <section id="content">
                                    <header className="mb-3">
                                        <h1> Nos Produits</h1>
                                    </header>
                                    <Cards items={this.Manupilate_Filter(this.state.id)} />
                                </section>
                            </ErrorBoundary>
                        </Col>
                    </Row>
                </Container>
            </div >);
    }
}

