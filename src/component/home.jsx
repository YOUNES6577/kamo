import * as React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";
import *  as RRD from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { Divider, Grid, ThemeProvider, createTheme } from '@mui/material';
import { Fade, Flip, Bounce, Zoom } from 'react-reveal'
import { Typography } from 'antd'
import styled from 'styled-components';
import Footer from './footer'

import '../asset/sass/main.sass'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../asset/js/main'

import produitChimique from '../ProdImg/produitChimique.jpg'
import produitslubrifiant from '../ProdImg/produitslubrifiant.jpg'
import produitsalimentaire from '../ProdImg/produitsalimentaire.jpg'
import { ArrowForward } from '@mui/icons-material';
// import about_img02 from '../ProdImg/Background/about_img02.png'
// import prod_card from '../ProdImg/Background/produit-card.jpeg'
// import Mold2_5LDrawing from '../ProdImg/Background/Mold 2-5L Drawing.png'
const { Paragraph, Title } = Typography;

const Shap = styled.div`
position:absolute;
bottom:${props => props.bt};
top:${props => props.top};
left:0;
width:100%;
overflow:hidden;
line-height:0;
transform:${props => props.transform};`

const ShapSvg = styled.svg`
position:relative;
display:block;
width:${props => props.width};
height:${props => props.height}`

const ShapPath = styled.path`
fill:${props => props.fill}`

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        margin: {
            inputMargin: 1,
        },
    },
});
const TextField = function (props) {
    return (
        <div className={props.className} data-validate={props.data_validate}>
            <span className="label-input">{props.label}</span>
            <input className="input" type={props.type} name={props.name} placeholder={props.placeholder} />
        </div>
    )
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentStyle: {
                height: '160px',
                color: '#fff',
                lineHeight: '160px',
                textAlign: 'center',
                background: '#364d79',
            },
            index: 0
        }
        this.handleIndex = this.handleIndex.bind(this)
    }
    componentDidMount() { }
    handleIndex(selectedIndex, e) {
        this.setState({
            index: selectedIndex
        })
    }
    shapDivider_1(props) {
        return (
            <Shap bt={props.bt} top={props.top} transform={props.direction === 'bottom' ? 'rotate(180deg)' : 'rotate(0deg)'}>
                <ShapSvg width={props.width} height={props.height} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <ShapPath fill={props.fill} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                </ShapSvg>
            </Shap>
        )
    }
    shapDividerS1(props) {
        return (
            <Shap bt={props.bt} top={props.top} transform={props.direction === 'bottom' ? 'rotate(180deg)' : 'rotate(0deg)'}>
                <ShapSvg width={props.width} height={props.height} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <ShapPath fill={props.fill} d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
                    <ShapPath fill={props.fill} d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
                    <ShapPath fill={props.fill} d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
                </ShapSvg>
            </Shap>
        )
    }
    shapDividerS2(props) {
        return (
            <Shap bt={props.bt} top={props.top} transform={props.direction === 'bottom' ? 'rotate(180deg)' : 'rotate(0deg)'}>
                <ShapSvg width={props.width} height={props.height} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <ShapPath fill={props.fill} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                </ShapSvg>
            </Shap>
        )
    }
    Productcard(props) {
        return (
            <div className='card' >
                <figure className='card__image-container'>
                    <RRD.Link to='/Type'><img className="card__image" src={props.imgsrc} alt={'Produit ' + props.title} /></RRD.Link>
                    <figcaption className='card__caption'><RRD.Link to='/Type' className='card__link' >View more</RRD.Link></figcaption>
                </figure>
                <div className="card__shape_divider">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className='card__content' >
                    <Title className='card__title'>{props.title}</Title>
                    <Paragraph className='card__text' >{props.children}</Paragraph>
                </div>
            </div>
        )
    }
    AboutSwiper() {
        return (
            <>
                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="AboutSwiper"
                >
                    <SwiperSlide>
                        <Title className='About-Title'><Zoom cascade>Activités</Zoom></Title>
                        <Fade > <p>Fabrication d'emballage en plastique (PE & PP) par soufflage et injection <strong>(Jerrycan,Bidon,Bouteille,Bocal,Pot,Boite & Divers Article)</strong>destiné au conditionnement et au stockage des divers produits <strong>(chimiques,Lubrifiants,détergents,cosmetique & argo-alimentaire)</strong>
                            Notre société a developpe une large gamme de produits de contenance allant de 25cl a 25 litres. </p></Fade>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Title className='About-Title'><Zoom cascade>Réactivités</Zoom></Title>
                        <Fade > <p>Notre société possede de grands moyens matériels et humains compétents qui peuvent répondre aux exigences du marché national et aux attentes des clients en adoptant les nouvelles technologies et procedure de fabrication pour pouvoir offirir des produits de qualité.</p></Fade>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Title className='About-Title'><Zoom cascade>Compétitivité</Zoom></Title>
                        <Fade > <p> Grace a nos liens priviliege avec tous nos fournisseurs en matiere premiere importee Nous Pouvons garantir un produit de choix rappondant aux besoins de nos clients , aux quels nous assurons : </p></Fade>
                    </SwiperSlide>
                </Swiper>
            </>
        );
    }
    ContactForm() {
        return (
            <Container className='container-contact' >
                <div className='wrap-contact'>
                <form className="contact-form validate-form">
                    <span className='contact-form-title'>
                        Contact Us
                    </span>
                    <TextField data_validate="Please Type Your Name"
                        label="FULL NAME *"
                        type="text"
                        name='name'
                        placeholder='Enter Your Name'
                        className='wrap-input validate-input bg1'
                    />
                    <TextField data_validate="Enter Your Email (e@a.x)"
                        label="Email *"
                        type="text"
                        name='email'
                        placeholder='Enter Your Email'
                        className='wrap-input validate-input bg1 rs1-wrap-input'
                    />
                    <TextField 
                        label="Phone"
                        type="text"
                        name='phone'
                        placeholder='Enter Number Phone'
                        className='wrap-input bg1 rs1-wrap-input'
                    />
                    <div className="wrap-input validate-input bg1 rs1-alert-validate"
                        data-validate="Please Type Your Message">
                        <span className="label-input">Message</span>
                        <textarea className="input" name="message" placeholder="Your message here..."></textarea>
                    </div>
                    <div className="container-contact-form-btn">
                        <button className="contact-form-btn">
                            <span>
                                Submit
                                <ArrowForward className='Arrow m-l-7' />
                            </span>
                        </button>
                    </div>
                    </form>
                </div>
            </Container>
        );
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Container fluid='true' className='home-page'>
                    <Container className='main' fluid='true' >
                        <Container className='main-content' >
                            <Fade left cascade>
                                <Title style={{ fontFamily: 'Tangerine !important' }}>
                                    Kamoplast
                                </Title>
                                <Paragraph style={{ my: 3, mx: 4, maxWidth: 850 }}>
                                    Fabrication d'emballage en plastique en (PE et PP) par soufflage ou injection, nos produits sont : jerrycans, bidons, bouteilles, bocaux, pots et boites et divers articles, de contenance allant de 40 ml à 25 litre destinés au conditionnement de produits divers; Chimiques, Détergents,  Lubrifiants et Agro-alimentaire.
                                </Paragraph>
                            </Fade>
                        </Container>
                        <Container className='sub-content'>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <Title className='sub-title'><span>Notre plus grand défi</span> ... nous satisfaire avec un emballage ideal !!!  </Title>
                                </Col>
                            </Row>
                        </Container>
                        <this.shapDividerS1 direction='bottom' bt='0' width='150%' height='73px' fill='#f5f5f5' />
                    </Container>
                    <section className='Presentation-section' id='PSN'>
                        <Container className='Presentation-container' >
                            <Container fluid='sm'  >
                                <Bounce bottom cascade >
                                    <Fade cascade >
                                        <div className='Presentation-paper'>
                                            <Title >
                                                <Divider sx={{ mx: 0 }} textAlign="left" ><Flip bottom cascade >Presentation</Flip></Divider>
                                            </Title>
                                            <Paragraph className='Presentation-prg'>
                                                <b>N</b>otre société a été crée en 1996 sous l'appellation de PLASTIMED, qui deviendra par la suite en 2003 Sarl KAMOPLAST et se situe dans le chef lieu  de la wilaya de Médéa. KAMOPLAST qui dispose d'un effectif de 65 salaries, est spécialisée dans la fabrication d'emballage en plastique en (PE et PP)  par soufflage ou injection, nos produits sont : jerrycans, bidons, bouteilles, bocaux, pots et boites et divers articles, de contenance allant de 40 ml à 30   litre destinés au conditionnement de produits divers; Chimiques, Détergents,  Lubrifiants et Agro-alimentaire.<br />
                                            </Paragraph>
                                        </div>
                                    </Fade>
                                    <div className='Presentation-footer'>
                                        <Divider sx={{ mx: 0 }} textAlign="right" ><Flip bottom cascade >Mr .Directeur</Flip></Divider>
                                    </div>
                                </Bounce>
                            </Container>
                        </Container>
                    </section>
                    <section className='Product-section' id='PDS'>
                        <this.shapDivider_1 direction='top' top='0' width='calc(300% + 1.3px)' height='125px' fill='#fff' />
                        <Container fluid='fluid' className='Product-items'>
                            <Title className='Product-title text-center'>Produits</Title>
                            <Grid container spacing={2} className='po'>
                                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'end', }} ><this.Productcard title='Chimique' imgsrc={produitChimique}> Produits chimiques & détergents </this.Productcard></Grid>
                                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', }}><this.Productcard title='Lubrifiant' imgsrc={produitslubrifiant}> Produits Lubrifiant </this.Productcard></Grid>
                                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'start', }}><this.Productcard title='Agro-alimentaire' imgsrc={produitsalimentaire}> Produits Agro-alimentaire </this.Productcard></Grid>
                            </Grid>
                        </Container>
                        {/* <this.shapDividerS2 direction='top' top='100%' width='100%' height='55px' fill='#fff' /> */}
                    </section>
                    <section className='About'>
                        <Container className='SwiperContainer'>
                            <this.AboutSwiper />
                        </Container>
                    </section>
                    <section className='Contact' id='Contact'>
                        <Container fluid='True' className='Ct_body'>
                            <Row >
                                <Col className='Map'>
                                    Map
                                </Col>
                                <Col className='Ct'>
                                    <this.ContactForm />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <Footer />
                </Container>
            </ThemeProvider>
        )
    }
} 