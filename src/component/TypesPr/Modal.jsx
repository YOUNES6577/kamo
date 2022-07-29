import React, { useState } from 'react';
import { Nav, Modal, Col, Row, Container } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
// import styled from 'styled-components';
// import { Borderlines } from '../Element/Borderlines'
import "react-image-gallery/styles/css/image-gallery.css";
import ColorCircel from '../Element/ColorCircel';

function Prepare_Data(name, value) {
    switch (name) {
        case 'Teinte':
        case 'Couleurs':
            value = value.split(',').map(hex => hex === '#fff' || hex === '#ffffff' ? <ColorCircel bgc={hex} white /> : <ColorCircel bgc={hex} />)
            break;
        default: break;
    }
    return { name, value }
}
export default function ProductModal(props) {
    const rows = {
        Jerrican: [
            Prepare_Data('Matier', 'PEHD'),
            Prepare_Data('Poids', '1100/1200g'),
            // Prepare_Data('Teinte', 'Transparent/Blanc/Bleu/Vert/Jaune/Rouge/Gris Metalise'),
            Prepare_Data('Teinte', '#ffffff,#4287f5,#42f578,#f5ee25,#c9c9c3'),
            Prepare_Data('Opacité', 'Oui'),
            Prepare_Data('Empilable', 'Oui'),
            Prepare_Data('sac', '8 unites'),
            Prepare_Data('volume', '10 l'),
            Prepare_Data('Hauteur', '160 mm'),
            Prepare_Data('Longeur', '15 mm'),
            Prepare_Data('Largeur', '168 mm'),
            Prepare_Data('Etiquette', <Row>
                <Col><b>Hauteur :</b> 180mm</Col>
                <Col><b>Largeur :</b> 190mm</Col>
                <Col><b>Longeur :</b> 190mm</Col>
            </Row>),
        ],
        Bouchon: [
            Prepare_Data('Matier', 'PEHD'),
            Prepare_Data('Capsule', 'oui/non'),
            Prepare_Data('Joint', 'oui/non'),
            Prepare_Data('Degaseurs', 'oui/non'),
            Prepare_Data('Inovliable', '60 mm'),
            Prepare_Data('Dimension', '60 mm'),
            Prepare_Data('Couleurs', '#fff,#4287f5,#42f578,#f5ee25,#c9c9c3'),
        ]
    }
    const [switchNav, setSwitch] = useState('Jerrican')
    const handleSwitch = () => {
        setSwitch(switchNav === 'Jerrican' ? 'Bouchon' : 'Jerrican')
    }
    return (
        <Modal
            key={props.id}
            // show={props.showup}
            show={true}
            onHide={props.Hide}
            animation={true}
            centered={true}
            size="xl"
            dialogClassName="modal-90w"
            className='ProductModal'
        >
            <Modal.Header closeButton >
                <Modal.Title className='ModalHedear'>{props.Title}</Modal.Title>
            </Modal.Header >
            <Modal.Body className='ModalBody'>
                <Container fluid className='Model-Description'>
                    <Row className='justify-content-center'>
                        <Col md={{ span: 4 }} className='mr-5'>
                            <div className=''>
                                <ImageGallery items={props.listeImages}
                                    showNav={false} showPlayButton={false} lazyLoad autoPlay slideDuration={450}
                                    thumbnailPosition="left"
                                    useTranslate3D={true}
                                    additionalClass='Product-Images'
                                />
                                <div className='Bouchon-images slider'>
                                    {props.BouchonList}
                                </div>
                            </div>
                        </Col>
                        <Col md={{ span: 6 }}>
                            <Nav fill variant="tabs" defaultActiveKey="#nav-Jerrican" onSelect={handleSwitch}>
                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-item nav-link"
                                        eventKey="#nav-Jerrican"
                                        aria-selected="true">Jerrican</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-item nav-link"
                                        eventKey="#nav-Bouchon"
                                        aria-selected="true">Bouchon</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className='tab-content' id='nav-tabContent'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="content_table">
                                        <TableBody>
                                            {rows[switchNav].map((row) =>
                                                <TableRow
                                                    key={row.name}
                                                    sx={{
                                                        '&:last-child td, &:last-child th': { border: 0 },
                                                        'th,td': { fontFamily: 'Spinnaker', padding: '8px' },
                                                        'th': { fontWeight: 600 }
                                                    }}
                                                >
                                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                                    <TableCell align="left">{row.value}</TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}