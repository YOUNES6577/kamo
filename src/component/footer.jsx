import React from 'react'
import { Grid, Container, Divider } from '@mui/material';
import { Call, Mail, Phone, Map, Language } from '@mui/icons-material';
import { Typography, Space } from 'antd'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Roll, Fade, Zoom, Slide } from 'react-reveal'

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Logo from '../ProdImg/kamoSvg/logo-black-g2.svg'
import '../asset/sass/footer.sass'

const { Text, Link } = Typography;

const foot_Content = {
    'References': [
        'HYGINDUST',
        'SIKA Algérie',
        'NAFTAL-ENAD',
        'GRANITEX',
        'BASF',
        'TOTAL',
        'PROCHIMAL',
        'FLAVORAL INTERNATIONAL',
        'LAFARGE'],
    'Contact': {
        Adress: '   Pôle urbain AIn D\'Heb Médéa 26000',
        Tel: '  +213(0) 25 78 55 36 ',
        Fax: '  +213(0) 25 78 57 24',
        Mob: '  +213(0) 661 62 65 48',
        'Email': '  kamoplast@gmail.com',
        'Siteweb': '    http://kamoplast.com/'
    }
};

function Copyright(props) {
    return (
        <Slide right cascade>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright @'}{new Date().getFullYear()} {' | Designed By '}
                <Link color="inherit" href="ASoft.com/">ASoft.com</Link>{'.'}
            </Typography>
        </Slide>
    );
}


// const Item=() 
export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            style: {
                fontSize: '14px'
            }
        })
    }
    shapDividerTop() {
        return (
            <div className="shape-divider-top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
                </svg>
            </div>
        )
    }
    render() {
        return (
            <Container
                maxWidth="xxl" 
                component="footer"
                sx={{
                    py: [3, 6],
                }}
            >
                <this.shapDividerTop />
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={4} className='d-flex flex-row  justify-content-evenly align-items-center'>
                            <Roll left>
                                <img src={Logo}
                                    alt='Kamoplast'
                                    loading="lazy"
                                    width={375}
                                    height={75}
                                /></Roll> 
                            <Divider orientation="vertical" flexItem> </Divider>
                        </Grid>
                        <Grid item xs={3} className='mt-3'>
                            <Space direction="vertical">
                                <Text strong >Nos réferences :</Text>
                                {foot_Content.References.map((ref) => <Text style={this.state.style} key={ref} ><Fade bottom >{ref}</Fade></Text>)}
                            </Space>
                        </Grid>
                        <Divider orientation="vertical" flexItem className='mt-4' > </Divider>
                        <Grid item xs={4} className='mt-4'>
                            <Zoom right  >
                                <Space direction="vertical">
                                    <Text strong > Contactez Nous :</Text>
                                    <Text style={this.state.style} key='Adress'><Map />{foot_Content.Contact.Adress}</Text>
                                    <Text style={this.state.style} key='Tel'><Call />{foot_Content.Contact.Tel}</Text>
                                    <Text style={this.state.style} key='Fax'><Call />{foot_Content.Contact.Fax}</Text>
                                    <Text style={this.state.style} key='Mob'><Phone />{foot_Content.Contact.Mob}</Text>
                                    <Text style={this.state.style} key='Email'><Mail />{foot_Content.Contact.Email}</Text>
                                    <Text style={this.state.style} key='Siteweb'><Language /><Link underline={false} href='/' target='_blank'>{foot_Content.Contact.Siteweb}</Link></Text>
                                </Space>
                            </Zoom>
                        </Grid>
                        <Grid item xs={4}>
                            <Slide left cascade >
                                <div className='d-flex flex-wrap  justify-content-evenly align-items-center'>
                                    <MDBIcon className='ms-1' size='2x' fab icon="facebook" />
                                    <MDBIcon className='ms-1' size='2x' fab icon="instagram" />
                                    <MDBIcon className='ms-1' size='2x' fab icon="twitter" />
                                </div>
                            </Slide>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <Copyright sx={{ mt: 5 }} />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        )
    }
}