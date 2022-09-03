import React, { useRef, Suspense } from 'react'
import *  as RRD from 'react-router-dom'
import { Fade, Flip, Bounce, Zoom } from 'react-reveal'
import RubberBand from 'react-reveal/RubberBand'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Divider, Grid, ThemeProvider, createTheme, Paper, Link } from '@mui/material';
import { ArrowForward, Map, DoneAll, ClearAll } from '@mui/icons-material';
import { Typography } from 'antd'
import emailjs from '@emailjs/browser';
import { ShapDivider, ShapPath } from './Element/Shap'
import InputField from './Element/InputField'
import ErrorBoundary from './ErrorBoundary'
import env from './env'
import { Snackbars, openNotificationWithIcon } from './Notification'
import Navigationbar from './Appbar'
import CircleSpinner from './Element/Spinner'


import '../asset/sass/main.sass'
import '../asset/sass/Presentation.sass'
import '../asset/sass/Product.sass'
import '../asset/sass/About.sass'
import '../asset/sass/Contact.sass'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import produitChimique from '../ProdImg/Product/9ML7JVTS_4x.jpg'
import produitslubrifiant from '../ProdImg/Product/p3-1.png'
import produitsalimentaire from '../ProdImg/Product/p7-1.png'

// import kamoMap from '../ProdImg/kamo_map.png'
import styled from 'styled-components';

const Footer = React.lazy(() => import('./footer'))
const GMapFrame = React.lazy(() => import('./Maps'))

const { Paragraph, Title } = Typography;

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
const Img = styled.img`
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-origin: border-box;
width:  ${props => props.width};
height:${props => props.height};
margin: auto;
`
const Colors = styled.div`
    padding-left: 1em;
    div{
        margin-top: 3px;
        width: 15px;
        height: 15px;
        margin-right: 5px;
        float: left;
        span{
            width: 15px;
            height: 15px;
            display: block;
            border-radius: 50%;
            &:hover{
                width: 17px;
                height: 17px;
                margin: -1px 0 0 -1px;
            }
        }
        &.c-blue span{
            background: #6e8cd5;
        }
        &.c-red span{
            background: #f56060;
        }
        &.c-green span{
            background: #44c28d;
        }
        &.c-white span{
            background: #fff;
            width: 14px;
            height: 14px;
            border: 1px solid #e8e9eb;
        }
    }
`

const Productcard = (props) => {
    const [Classname, setClassname] = React.useState("product-card")
    const [bttn, setBttn] = React.useState('button')
    const handleHover = () => {
        setClassname(Classname + ' animate')
    }
    const handleBlur = () => {
        setClassname("product-card")
    }
    const handleMouseUp = () => {
        setBttn(bttn + ' active')
        setTimeout(function () {
            setBttn('button');
        }, 300);
    }
    return (<Paper elevation={5} style={{ borderRadius: '10px' }} className='mx-5 '>
        <div className={Classname} onMouseEnter={handleHover} onMouseLeave={handleBlur} >
            <div className="product-front">
                <div className="shadow"></div>
                <div className='d-flex pt-3'>{props.imgsrc}</div>
                <div className="image_overlay"></div>
                <div className="view_details">
                    <RRD.Link to='/Produits' className='button' onMouseUp={handleMouseUp}>
                        <span className="button__text">Show more</span>
                        <ArrowForward className='button__icon' />
                    </RRD.Link>
                </div>
                <div className="stats">
                    <div className="stats-container">
                        {/* <span className="product_price"></span> */}
                        <div className='text-center'>  <span className="product_name">{props.title}</span></div>
                        <p>{props.subtitle}</p>
                        <div className="product-options">
                            <strong>SIZES</strong>
                            <span>{props.sizes}</span>
                            <strong>COLORS</strong>
                            {props.colors}
                        </div>
                    </div>
                </div>
            </div>
        </div></Paper>
    )
}
const ContactForm = () => {
    const form = useRef();
    const [open, setOpen] = React.useState(false);
    const [res, setRes] = React.useState(false);
    const [message, setMessage] = React.useState({ type: '', msg: '' });
    const [validatedInput, setValidated] = React.useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway')
            return;
        setOpen(false);
        setMessage({ type: '', msg: '' })
    };
    const handleSubmit = (e) => {
        if (validatedInput) {
            // openNotificationWithIcon({ type: 'info', title: 'info', description: 'All Required fields are exist .' })
            sendEmail(e)
        }
        else
            openNotificationWithIcon({ type: 'warning', title: 'warning', description: 'Some Required Fields are missing !' })
    }
    const handleValidate = (bool) => {
        setValidated(bool)
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            env.EMAIL_JS_SERVICE_ID,
            env.EMAIL_JS_TEMPLATE_ID,
            form.current,
            env.EMAIL_JS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                if (result.status === 200) {
                    setRes(true)
                    openNotificationWithIcon({ type: 'success', title: 'message sent', description: 'Veuillez attendre notre réponse dans votre boîte-mail' })
                }
                else
                    setRes(false)
            }, (error) => {
                console.error(error.text);
                setRes(false)
                openNotificationWithIcon({ type: 'error', title: 'message not sent', description: error.text })
            });
    };
    return (
        <ErrorBoundary>
            <Container className='container-contact' >
                <div className='wrap-contact'>
                    <form className="contact-form validate-form"
                        ref={form}>
                        <span className='contact-form-title'>
                            Contactez Nous
                        </span>
                        <InputField data_validate="Please Type Your Name"
                            label="FULL NAME *"
                            type="text"
                            name='name'
                            placeholder='Enter Your Name'
                            parentClass='wrap-input validate-input bg1'
                            className="input"
                            handleValidate={handleValidate}
                        />
                        <InputField data_validate="Please Type Your Email "
                            label="Email *"
                            type="text"
                            name='email'
                            placeholder='Enter Your Email'
                            parentClass='wrap-input validate-input bg1 rs1-wrap-input'
                            className="input"
                            handleValidate={handleValidate}
                        />
                        <InputField data_validate="Please Type Your Phone"
                            label="Phone"
                            type="text"
                            name='phone *'
                            placeholder='Enter Number Phone'
                            parentClass='wrap-input validate-input bg1 rs1-wrap-input'
                            className="input"
                            handleValidate={handleValidate}
                        />
                        <InputField data_validate="Please Type Your Message"
                            label='Message  *'
                            type="text"
                            handleValidate={handleValidate}
                            parentClass=" wrap-input validate-input bg1 rs1-alert-validate"
                            className="input"
                            name="message"
                            placeholder="Your message here..." />
                        <div className="container-contact-form-btn">
                            <Snackbars open={open}
                                onClose={handleClose}
                                msg={message.msg}
                                type={message.type}
                            >
                                <button
                                    className="contact-form-btn " disabled={false}
                                    type='button'
                                    onClick={handleSubmit}
                                >
                                    <span>
                                        Submit
                                        <ArrowForward className='Arrow m-l-7' />
                                    </span>
                                </button>
                            </Snackbars>
                        </div>
                    </form>
                </div>
            </Container>
        </ErrorBoundary>
    );
}
export default class Home extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            navTheme: props.navTheme,
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
    Presentation() {
        return (<ErrorBoundary>
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
        </ErrorBoundary>
        )
    }

    Products() {
        const SingleColor = (props) => <div className={props.className}><span></span></div>
        return (
            <ErrorBoundary>
                <Container fluid='fluid'>
                    <RubberBand >
                        <Title className='Product-title text-center mx-auto pt-3'>Nos Produits</Title>
                    </RubberBand>
                    <Grid className='Product-items'>
                        <Fade left    >
                            <Productcard
                                title='Chimique'
                                subtitle='Produits chimiques & détergents'
                                sizes='10L, 20L, 25L'
                                // imgsrc={<Img src="https://ik.imagekit.io/younes6577/tr:h-350/kamoplast/9ML7JVTS_4x_NK1HgNHn9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657907449047" alt="Chimique" />}
                                imgsrc={<Img src={produitChimique} width='auto' height='350' alt="Chimique" />}
                                colors={<Colors>
                                    <SingleColor className='c-blue' />
                                    <SingleColor className='c-red' />
                                    <SingleColor className='c-white' />
                                    <SingleColor className='c-green' />
                                </Colors>}
                            /></Fade>
                        <RubberBand bottom>
                            <Productcard
                                title='Lubrifiant'
                                subtitle='Produits Lubrifiant'
                                sizes='5L, 6L, 10L'
                                // imgsrc={<Img src="https://ik.imagekit.io/younes6577/tr:h-350/kamoplast/p7-1_jK9cnAjn6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657907456792" alt="lubrifiant" />}
                                imgsrc={<Img src={produitslubrifiant} width='auto' height='350' alt="lubrifiant" />}
                                colors={<Colors>
                                    <SingleColor className='c-blue' />
                                    <SingleColor className='c-red' />
                                    <SingleColor className='c-white' />
                                    <SingleColor className='c-green' />
                                </Colors>}
                            /></RubberBand>
                        <Fade right >
                            <Productcard
                                title='Agro-alimentaire'
                                subtitle='Produits Agro-alimentaire'
                                sizes='33Cl , 50Cl, 100 Cl'
                                // imgsrc={<Img src="https://ik.imagekit.io/younes6577/tr:h-350/kamoplast/zyro-image_5myn1xmQD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657907463969" alt="alimentaire" />}
                                imgsrc={<Img src={produitsalimentaire} width='auto' height='350' alt="alimentaire" />}
                                colors={<Colors>
                                    <SingleColor className='c-blue' />
                                    <SingleColor className='c-red' />
                                    <SingleColor className='c-white' />
                                    <SingleColor className='c-green' />
                                </Colors>}
                            /></Fade>
                    </Grid>
                </Container>
                <ShapDivider direction='top' top='100%' width='100%' height='55px' >
                    <ShapPath fill='#e6e6e6' d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                </ShapDivider>
            </ErrorBoundary>
        )
    }
    AboutSwiper() {
        return (
            <ErrorBoundary>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        type: "fraction",
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="AboutSwiper"
                >
                    <SwiperSlide>
                        <Title className='About-Title'><RubberBand cascade>Activités</RubberBand></Title>
                        <Fade > <p>Fabrication d'emballage en plastique (PE & PP) par soufflage et injection <strong>(Jerrycan,Bidon,Bouteille,Bocal,Pot,Boite & Divers Article)</strong>destiné au conditionnement et au stockage des divers produits <strong>(chimiques,Lubrifiants,détergents,cosmetique & argo-alimentaire)</strong>
                            Notre société a developpe une large gamme de produits de contenance allant de 25cl a 25 litres. </p></Fade>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Title className='About-Title'><RubberBand cascade>Réactivités</RubberBand></Title>
                        <Fade > <p>Notre société possede de grands moyens matériels et humains compétents qui peuvent répondre aux exigences du marché national et aux attentes des clients en adoptant les nouvelles technologies et procedure de fabrication pour pouvoir offirir des produits de qualité.</p></Fade>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Title className='About-Title'><RubberBand cascade>Compétitivité</RubberBand></Title>
                        <Fade > <p> Grace a nos liens priviliege avec tous nos fournisseurs en matiere premiere importee Nous Pouvons garantir un produit de choix rappondant aux besoins de nos clients , aux quels nous assurons : </p></Fade>
                    </SwiperSlide>
                </Swiper>
            </ErrorBoundary>
        );
    }
    Contact() {
        return (
            <ErrorBoundary>
                <RubberBand >
                    <Title className='Contact-title text-center'> Trouvez Nous</Title>
                </RubberBand>
                <Container fluid='True' className='Ct_body'>
                    <Row >
                        <Col className='Map' xs={7}>
                            <Fade left>
                                <Paper elevation={20} className='mappaper'>
                                    {/* <Image src={kamoMap} />
                                <div className="middle">
                                    <Link target='_blank' href='https://goo.gl/maps/iK3HTQ61fTAudVxE7' underline='none' className='underline'>Voir dans Google Map</Link>  <Map />
                                </div> */}
                                    <Suspense fallback={<CircleSpinner />}>
                                        <GMapFrame />
                                    </Suspense>
                                </Paper></Fade>
                        </Col>
                        <Col className='Ct' xs={5}>
                            <Zoom bottom>
                                <ContactForm />
                            </Zoom>
                        </Col>
                    </Row>
                </Container>
            </ErrorBoundary>
        )
    }
    
    render() {
        return (<>
            <ErrorBoundary >
                <Navigationbar theme={this.state.navTheme} />
            </ErrorBoundary>
            <ThemeProvider theme={theme}>
                <Container fluid='true' className='home-page' id='home'>
                    <Container className='main' fluid>
                        <Container className='main-content' >
                            <Fade left cascade>
                                <Title style={{ fontFamily: 'Tangerine !important' }}>
                                    Kamoplast
                                </Title>
                                <Paragraph style={{ my: 3, mx: 4, maxWidth: 850 }}>
                                    Fabrication d'emballage en plastique en (PE et PP) par soufflage ou injection .... { /*nos produits sont : jerrycans, bidons, bouteilles, bocaux, pots et boites et divers articles, de contenance allant de 40 ml à 25 litre destinés au conditionnement de produits divers; Chimiques, Détergents,  Lubrifiants et Agro-alimentaire.} */}
                                </Paragraph>
                                <Link href='#AboutSection' className='animated-arrow'>
                                    <span className='the-arrow -left'>
                                        <span className='shaft'></span>
                                    </span>
                                    <span className='main-arrow'>
                                        <span className='text'>
                                            Explore plus
                                        </span>
                                        <span className='the-arrow -right'>
                                            <span className='shaft'></span>
                                        </span>
                                    </span>
                                </Link>
                            </Fade>
                        </Container>
                        <Container className='sub-content'>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <Title className='sub-title'><span>Notre plus grand défi</span> ... nous satisfaire avec un emballage ideal !!!  </Title>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex'>
                                    <div className="scrolldown-arrow mx-auto" >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <ShapDivider direction='bottom' bt='0' width='150%' height='73px'  >
                            <ShapPath fill='#f5f5f5' d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
                            <ShapPath fill='#f5f5f5' d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
                            <ShapPath fill='#f5f5f5' d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
                        </ShapDivider>
                    </Container>
                    <section className='Presentation-section' id='PSN'>
                        <this.Presentation />
                    </section>
                    <section className='Product-section' id='PDS'>
                        <this.Products />
                    </section>
                    <section className='About' id='AboutSection'>
                        <Container className='SwiperContainer'>
                            <this.AboutSwiper />
                        </Container>
                    </section>
                    <section className='Contact' id='Contact'>
                        <this.Contact />
                    </section>
                    <Suspense  fallback={<CircleSpinner />}>
                        <Footer  fill='#f5f5f5'/>
                    </Suspense>
                </Container>
            </ThemeProvider>
        </>
        )
    }
} 