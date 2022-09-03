import React, { useContext, useEffect } from 'react';
import { Divider } from 'antd';
import env from './env'
import { Card, CardContent, CardMedia, CardHeader, IconButton, Button, CardActionArea, CardActions, Tooltip, Zoom } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';
// import { Borderlines } from '../Element/Borderlines'
// import b2 from "../../ProdImg/Bouchon/Bouchon-60-H-Rouge.png"

const Details = styled.dl`
dt,dd{
    font-family: Spinnaker !important;
}
dd{
    color: #51585e;                                                                                                                                                                                                                                          
}
`
const CardTheme = styled.div`
.MuiCardHeader-root span{
    font-family:'Antic Slab';
}
.MuiButton-root{
    margin-left: auto;
    font-family:'Antic Slab';
    font-weight:600;
}
`
export default class PrCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: this.props.theme,
            CardInfo: this.props.product
        };
    }
    render() {
        return (
            <CardTheme >
                <Card sx={{
                    maxWidth: 350,
                    bgcolor: 'rgba(0, 0, 0, 0.01)',
                    marginTop: 7,
                    border: '1px solid',
                    borderColor: '#E7EDF3',
                    borderRadius: 5,
                    transition: '0.4s',
                    '&:hover': {
                        borderColor: '#5B9FED',
                    },
                }}>
                    <CardHeader
                        action={<Tooltip title='Shoping Cart'
                            sx={{
                                padding: '2px',
                                fontFamily: 'Spinnaker !important'
                            }}
                            arrow
                            TransitionComponent={Zoom}>
                            <IconButton aria-label="settings"
                                sx={{ padding: '1rem' }}
                            >
                                <AddShoppingCartIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                        }
                        title={this.state.CardInfo._id}
                        subheader={this.state.CardInfo.Price.$numberDecimal + ' Dz'}
                    />
                    <Divider style={{ margin: "5px 0 0" }} />
                    <CardActionArea>
                        <CardMedia
                            className='Product_img'
                            component="img"
                            image={env.IMAGES_IMGKIT_PATH + this.state.CardInfo.Images[0]}
                            alt={'Produit'+this.state.CardInfo.Type}
                        />
                        <CardContent>
                            <Divider style={{ margin: "5px 0" }} />
                            <Details className='row'>
                                <dt className='col-4'>Ref</dt>
                                <dd className='col-8 '>{this.state.CardInfo._id}</dd>
                                <dt className='col-4'>Matiere</dt>
                                <dd className='col-8'>{this.state.CardInfo.Matier}</dd>
                                <dt className='col-4'>Volume</dt>
                                <dd className='col-8 '>{this.state.CardInfo.Volume + ' l'}</dd>
                                <dt className='col-4'>Poids</dt>
                                <dd className='col-8'>{this.state.CardInfo.Poids.join(',') + ' g'}</dd>
                                <dt className='col-4'>livree par</dt>
                                <dd className='col-8'>{this.state.CardInfo.Emballage + ' unites'}</dd>
                            </Details>
                        </CardContent>
                    </CardActionArea>
                    <Divider style={{ margin: "0 5px 5px" }} />
                    <CardActions disableSpacing>
                        <Tooltip title='add to favorites'
                            sx={{
                                padding: '0.3rem',
                                fontFamily: 'Spinnaker !important'
                            }}
                            arrow
                            TransitionComponent={Zoom}>
                            <IconButton aria-label="add to favorites"
                                sx={{ paddingInline: '.7rem' ,color: this.state.theme.color}}>
                                <FavoriteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='view more' arrow TransitionComponent={Zoom} placement="left" >
                            <Button
                                sx={{ color: this.state.theme.color }}
                                size="small">
                                Details
                            </Button>
                        </Tooltip>
                    </CardActions>
                </Card>
            </CardTheme>
        );
    }
}