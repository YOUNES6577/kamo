import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Navigationbar from './Appbar'
import { Container, Row, Col } from 'react-bootstrap'

import '../asset/sass/Products.sass'
import { Card, CardHeader, Collapse, IconButton, Icon } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';

import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import HeightTwoToneIcon from '@mui/icons-material/HeightTwoTone';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default class Product extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            navTheme: props.navTheme,
        }
    }

    render() {
        return (
            <>
                <ErrorBoundary >
                    <Navigationbar theme='light' />
                </ErrorBoundary>
                <ErrorBoundary >
                    <Container fluid className='Products-page container-pr'>
                        <Row>
                            <Col className='SideBare'>
                                <Filter />
                            </Col>
                            <Col xs={10}></Col>
                        </Row>
                        {/* <Footer /> */}
                    </Container>
                </ErrorBoundary>
            </>
        )
    }

}
function Filter() {

    const [expandedCategory, setExpandedCategory] = React.useState(false);
    const [expandedMatier, setExpandedMatier] = React.useState(false);
    const [expandedForme, setExpandedForme] = React.useState(false);
    const [expandedVol, setExpandedVol] = React.useState(false);
    const [expandedColor, setExpandedColor] = React.useState(false);

    const fields = {
        Category: { list: ['chimique', 'Lubrifiants', 'argo-alimentaire'], icon: <ClassTwoToneIcon />,expand:()=>setExpandedCategory(!expandedCategory)},
        Matier: { list: ['PHD', 'PVC', 'PL'], icon: <ScienceRoundedIcon />,expand:()=> setExpandedMatier(!expandedMatier)},
        Forme: { list: ['Carre', 'Oval', 'Bidon'], icon: <CategoryTwoToneIcon />,expand:()=>setExpandedForme(!expandedForme) },
        Volume: { list: ['20L', '10L', '5L', '2L', '1L'], icon: <HeightTwoToneIcon/> ,expand:()=>setExpandedVol(!expandedVol)},
        Color: { list: ['red', 'blue', 'green', 'yellow', 'white'], icon: <ColorLensTwoToneIcon/> ,expand:()=>setExpandedColor(!expandedColor)},
    }

    return (
        <Card className='Filter'>
            <aside>
                <Card >
                    <CardHeader
                        avatar={
                            <Icon className='h-auto'  aria-label="settings">
                                {fields.Category.icon}
                            </Icon>
                        }
                        action={
                            <ExpandMore
                                expand={expandedCategory}
                                onClick={fields.Category.expand}
                                aria-expanded={expandedCategory}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        }
                        title='Category'
                    />
                    <Collapse
                        in={expandedCategory}
                        timeout='auto'
                        unmountOnExit
                        className='px-3'>
                        {fields.Category.list.map(values =>
                            <label className='checkbox-btn'>
                                <input type={'checkbox'} />
                                <span className='btn btn-light'>{values}</span>
                            </label>
                        )}
                    </Collapse>
                </Card>
                <Card >
                    <CardHeader
                        avatar={
                            <Icon className='h-auto'  aria-label="settings">
                                {fields.Matier.icon}
                            </Icon>
                        }
                        action={
                            <ExpandMore
                                expand={expandedMatier}
                                onClick={fields.Matier.expand}
                                aria-expanded={expandedMatier}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        }
                        title='Matier'
                    />
                    <Collapse
                        in={expandedMatier}
                        timeout='auto'
                        unmountOnExit
                        className='px-3'>
                        {fields.Matier.list.map(values =>
                            <label className='checkbox-btn'>
                                <input type={'checkbox'} />
                                <span className='btn btn-light'>{values}</span>
                            </label>
                        )}
                    </Collapse>
                </Card>
                <Card >
                    <CardHeader
                        avatar={
                            <Icon className='h-auto'  aria-label="settings">
                                {fields.Forme.icon}
                            </Icon>
                        }
                        action={
                            <ExpandMore
                                expand={expandedForme}
                                onClick={fields.Forme.expand}
                                aria-expanded={expandedForme}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        }
                        title='Forme'
                    />
                    <Collapse
                        in={expandedForme}
                        timeout='auto'
                        unmountOnExit
                        className='px-3'>
                        {fields.Forme.list.map(values =>
                            <label className='checkbox-btn'>
                                <input type={'checkbox'} />
                                <span className='btn btn-light'>{values}</span>
                            </label>
                        )}
                    </Collapse>
                </Card>
                <Card >
                    <CardHeader
                        avatar={
                            <Icon className='h-auto'  aria-label="settings">
                                {fields.Volume.icon}
                            </Icon>
                        }
                        action={
                            <ExpandMore
                                expand={expandedVol}
                                onClick={fields.Volume.expand}
                                aria-expanded={expandedVol}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        }
                        title='Volume'
                    />
                    <Collapse
                        in={expandedVol}
                        timeout='auto'
                        unmountOnExit
                        className='px-3'>
                        {fields.Volume.list.map(values =>
                            <label className='checkbox-btn'>
                                <input type={'checkbox'} />
                                <span className='btn btn-light'>{values}</span>
                            </label>
                        )}
                    </Collapse>
                </Card>
                <Card >
                    <CardHeader
                        avatar={
                            <Icon className='h-auto'  aria-label="settings">
                                {fields.Color.icon}
                            </Icon>
                        }
                        action={
                            <ExpandMore
                                expand={expandedColor}
                                onClick={fields.Color.expand}
                                aria-expanded={expandedColor}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        }
                        title='Color'
                    />
                    <Collapse
                        in={expandedColor}
                        timeout='auto'
                        unmountOnExit
                        className='px-3'>
                        {fields.Color.list.map(values =>
                            <label className='checkbox-btn'>
                                <input type={'checkbox'} />
                                <span className='btn btn-light'>{values}</span>
                            </label>
                        )}
                    </Collapse>
                </Card>
            </aside>
        </Card>
    )
}