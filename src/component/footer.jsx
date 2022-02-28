import React from 'react'
import {  Link, Grid, Container, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../asset/footer.css'
import 'react-bootstrap/dist/react-bootstrap.min.js'
import Logo from './LOGO.jpg'
import { Call } from '@mui/icons-material';
import { Typography, Space } from 'antd';
const { Text } = Typography;

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
        Adress: ' Pôle urbain AIn D\'Heb Médéa 26000',
        Tel: '+213(0) 25 78 55 36 ',
        Fax: '+213 (0) 25 78 57 24',
        Mob: ' +213 (0) 661 62 65 48',
        'E-mail': 'kamoplast@gmail.com',
        'Siteweb': 'http://kamoplast.com/'
    }
};

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright @'}{new Date().getFullYear()} {' | Designed With by '}
            <Link color="inherit" href="ASoft.com/"> ASoft.com</Link>{'.'}
        </Typography>
    );
}


// const Item=() 
export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({})
    }
    render() {
        return (
            <Container
                maxWidth="xl"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={4} display='flex' justifyItems='center'>
                        <img src={Logo}
                            alt='Kamoplast'
                            loading="lazy" />
                    </Grid>
                    <Grid item xs={4}>
                        <Space direction="vertical">
                            <Text strong >Nos réferences</Text>
                        </Space>
                    </Grid>
                    <Grid item xs={4}>
                        xs=4
                    </Grid>
                    <Grid item xs={8}>
                        xs=8
                    </Grid>
                    <Grid item xs={4}>
                        <Copyright sx={{ mt: 5 }} />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}