import React from 'react';
import { Box, Grid, CardActionArea, CardMedia, CardActions, Button, CardHeader, Tooltip, Zoom, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';
import { Divider } from 'antd';
import env from './env'

const CardTheme = styled.div`
.MuiCardHeader-root {
    padding: 8px;
    span{
    font-family:'Antic Slab';
    padding-inline: .8rem;
}}
.MuiButton-root{
    margin-left: auto;
    font-family:'Antic Slab';
    font-weight:600;
}
.MuiCardHeader-title{
    font-weight:600;
}
.MuiCardHeader-subheader{
    font-weight:600;
    font-size: 1rem
}
`
const useStyles = makeStyles(() => ({
    card: {
        border: '2px solid',
        padding: '.65rem',
        borderColor: '#E7EDF3',
        borderRadius: 16,
        minWidth: '330px',
        transition: '0.4s',
        '&:hover': {
            borderColor: '#5B9FED',
        },
    },
    image: {
        padding: '5px',
        width: 'auto !important',
        alignSelf: 'center',
        height: '250px ',
        margin: '0 auto'
    }
}));

const Details = styled.dl`
padding :.5rem;
margin:0;
dt,dd{
    font-family: Spinnaker !important;
    font-size: .9rem;
}
dd{
    color: #51585e;                                                                                                                                                                                                                                          
}`

export default function PrdCard(props) {
    const CardInfo= props.product
    const theme= props.theme
    const styles = useStyles();
    return (<CardTheme>
        <Grid xs={5} minWidth={500}></Grid>
        <Grid container spacing={2} className={styles.card}>
            <Grid xs={5} sx={{ alignSelf: 'center' }} >
                <CardActionArea minWidth={300}
                    sx={{ borderRadius: 5 , alignSelf: 'center' }}>
                    <Box minHeight={250} minWidth={300} borderRadius={8} >
                        <CardMedia
                            className={styles.image}
                            component="img"
                            image={env.IMAGES_IMGKIT_PATH + CardInfo.Images[0]}
                            alt={'Produit'+CardInfo.Type}
                        />
                    </Box>
                </CardActionArea>
            </Grid>
            <Grid xs={7}  minWidth={300}>
                <Box minHeight={250} bgcolor={'#F4F7FA'} borderRadius={5}
                    sx={{ padding: '8px' }}>
                    <CardHeader
                        action={<Tooltip title='Shoping Cart'
                            sx={{
                                padding: '0.3rem',
                                fontFamily: 'Spinnaker !important'
                            }}
                            arrow
                            TransitionComponent={Zoom}>
                            <IconButton aria-label="settings"
                                sx={{ padding: '1rem' ,color:theme.color}}
                            >
                                <AddShoppingCartIcon color="primary" />
                            </IconButton>
                        </Tooltip>}
                        title={CardInfo._id}
                        subheader={CardInfo.Price.$numberDecimal + ' Dz'}
                    />
                    <Divider style={{ margin: "0 5px 5px" }} />
                    <Details className='row'>
                        {/* <dt className='col-4'>Ref</dt>
                        <dd className='col-8 '>FL-B5L</dd> */}
                        <dt className='col-4'>Matiere</dt>
                        <dd className='col-8'>{CardInfo.Matier}</dd>
                        <dt className='col-4'>Volume</dt>
                        <dd className='col-8 '>{CardInfo.Volume + ' l'}</dd>
                        <dt className='col-4'>Poids</dt>
                        <dd className='col-8'>{CardInfo.Poids.join(',') + ' g'}</dd>
                        <dt className='col-4'>livree par</dt>
                        <dd className='col-8'>{CardInfo.Emballage + ' unites'}</dd>
                    </Details>
                    <CardActions disableSpacing>
                        <Tooltip title='add to favorites'
                            sx={{
                                padding: '0.3rem',
                                fontFamily: 'Spinnaker !important'
                            }}
                            arrow
                            TransitionComponent={Zoom}>
                            <IconButton aria-label="add to favorites"
                                sx={{ paddingInline: '1rem' }}>
                                <FavoriteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='view more' arrow TransitionComponent={Zoom} placement="left" >
                            <Button
                                sx={{ color: theme.color }}
                                size="small">
                                Details
                            </Button>
                        </Tooltip>
                    </CardActions>
                </Box>
            </Grid>
        </Grid>
    </CardTheme>
    )
}

