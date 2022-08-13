import React from 'react';
import $ from "jquery";

import { Divider } from 'antd';
import { Card, CardContent, CardMedia, CardHeader, IconButton, Button, CardActionArea, CardActions, Tooltip, Zoom } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
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
.cardhedear span{
  font-family:'Antic Slab' !important;
}
.detailsbtn{
  margin-left: auto;
  font-family:'Antic Slab' !important;
  font-weight:600;
}
`

export default class PrCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            item: {
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
            },
        };
        this.handleModalVisibility = this.handleModalVisibility.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidUpdate() {
        if (this.state.show) {
            $(".Type").addClass("TypeafterModal");
        } else {
            $(".Type").removeClass("TypeafterModal");
        }
        $(".image-gallery-content").click(() => {
            document.exitFullscreen();
        })
    }
    handleModalVisibility() {
        this.setState({ show: !this.state.show })
    }
    handleClose() {
        this.setState({ show: false })
    }
    handleShow() {
        this.setState({ show: true })
        // this.props.ModalCounter()
    }
    render() {

        return (
                <CardTheme >
                    <Card sx={{ 
                        maxWidth: 350,
                        bgcolor:'rgba(0, 0, 0, 0.01)' ,
                        marginTop: 7
                        }}>
                        <CardHeader
                            className='cardhedear'
                            action={<Tooltip title='Full Screen' TransitionComponent={Zoom}>
                                <IconButton aria-label="settings"
                                    onClick={this.handleShow}
                                >
                                    <FullscreenIcon />
                                </IconButton>
                            </Tooltip>
                            }
                            title={this.props.product.ref}
                            subheader={this.props.product.ref}
                        />
                        <Divider style={{ margin: "5px 0 0" }} />
                        <CardActionArea>
                            <CardMedia
                                className='Product_img'
                                component="img"
                                image={this.props.product.img}
                                alt="chemique"
                                onClick={this.handleShow}
                            />
                            <CardContent>
                                <Divider style={{ margin: "5px 0" }} />
                                <Details className='row'>
                                    <dt className='col-4'>Ref</dt>
                                    <dd className='col-8 '>{this.props.product.ref}</dd>
                                    <dt className='col-4'>Volume</dt>
                                    <dd className='col-8 '>{this.props.product.Volume}</dd>
                                    <dt className='col-4'>Matiere</dt>
                                    <dd className='col-8'>{this.props.product.Matier}</dd>
                                    <dt className='col-4'>Poids</dt>
                                    <dd className='col-8'>{this.props.product.Poids}</dd>
                                    <dt className='col-4'>livree par</dt>
                                    <dd className='col-8'>{this.props.product.Emballage}</dd>
                                </Details>
                            </CardContent>
                        </CardActionArea>
                        <Divider style={{ margin: "0 5px 5px" }} />
                        <CardActions disableSpacing>
                            <Tooltip title='view more' TransitionComponent={Zoom} placement="left" >
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={this.handleShow}
                                    className='detailsbtn'>
                                    Details
                                </Button>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </CardTheme>
        );
    }
}