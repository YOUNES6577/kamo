import React, { useReducer, useEffect, useState, Suspense } from 'react'
import { ContentSpinner } from './Element/Spinner'
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import { Card, CardHeader, Collapse, IconButton, Icon, Chip, Breadcrumbs, Box, Tabs, Tab } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import HeightTwoToneIcon from '@mui/icons-material/HeightTwoTone';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/ViewList';
import WindowIcon from '@mui/icons-material/Window';
import { emphasize, styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { Divider } from 'antd'
import Footer from './footer'
import { Borderlines } from './Element/Borderlines'
import ErrorBoundary from './ErrorBoundary'
import Navigationbar from './Appbar'
import env from './env.jsx'
import '../asset/sass/Products.sass'

const ProductCardGridView = React.lazy(() => import('./PrdCardGrid'))
const ProductCardListView = React.lazy(() => import('./PrdCardList'))
export const ThemeContext = React.createContext(null);

const StyledChip = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(4),
        width: theme.spacing(15),
        color: theme.palette.text.primary,
        fontWeight: '500',
        margin: 'auto',
        fontSize: '1rem',
        fontFamily: 'Spinnaker',
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});
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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && [children]}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
function Props(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const datareducer = (state, action) => {
    switch (action.type) {
        case "fetch": return { items: action.data, count: action.count, isloaded: action.isloaded }
        default: return state
    }
}
export default function Product(props) {
    const [dataState, setdataState] = useReducer(datareducer, { items: [], count: 0, isloaded: false })
    const { category } = useParams()
    const [theme,] = useState({
        light: {
            primary: '#E7EDF3',
            secondary: "#5B9FED",
            border: '1px solid #E7EDF3',
            fontFamily: 'Spinnaker !important',
        },
        dark: {
            background: "#262626"
        }
    })
    const [view, setView] = useState('grid')
    const [isLoaded, setLoaded] = useState(false)
    const handleViewChange = (e, Switch) => {
        setView(Switch)
    }
    useEffect(() => {
        const fetchProducts = async () => {
            await axios.post(`${env.REMOTE_SERVER}/listingsProducts`, {
                category: category,
            }).then(res => {
                setdataState({ type: 'fetch', data: res.data, count: res.data.length, isloaded: true })
                console.dir({ "Fetched_Data": res.data })
                setLoaded(true)
            })
        }
        fetchProducts()
    }, [])
    return (    
        <ThemeContext.Provider value={theme.light}>
            <ErrorBoundary >
                <Navigationbar theme='light' />
            </ErrorBoundary>
            <Borderlines >
                <Container fluid className='Products-page container-pr'>
                    <Row>
                        <Col xs={3} className='SideBare mx-auto'>
                            <ErrorBoundary>
                                <Filter />
                            </ErrorBoundary>
                        </Col>
                        <Col xs={9} className='Product-section'>
                            <ErrorBoundary >
                                {/* items */}
                                <section className='Content'>
                                    <header className="mb-2 px-5">
                                        <Row>
                                            <Col xs={12} className='p-2 mb-3'>
                                                {/* <h3 className=''> Nos Produits</h3> */}
                                                <Breadcrumbs className='m-1' aria-label="breadcrumb">
                                                    <StyledChip label="Home" icon={<HomeIcon fontSize="small" />} />
                                                    <StyledChip className='font-weight-bold' label="Prodcuts" />
                                                </Breadcrumbs>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={9} className='d-flex flex-row'>
                                                <Box className='BoxBtnGroup'>
                                                    <Tabs value={view} onChange={handleViewChange} aria-label="icon tabs example">
                                                        <Tab icon={<WindowIcon />} aria-label="gridView" value={'grid'} {...Props(1)} />
                                                        <Tab icon={<ListIcon />} aria-label="listView" value={'list'} {...Props(0)} />
                                                    </Tabs>
                                                </Box>
                                            </Col>
                                            <Col xs={3} className='p-3 align-self-end'>
                                                <Chip className='ItemsCounter' variant='' label={dataState.count + ' items found '} />
                                            </Col>
                                        </Row>
                                        <Divider style={{ margin: "0" }} />
                                    </header>
                                    <main className='Items-List'>
                                        <TabPanel value={view} index={'grid'} className='grid'>
                                            {isLoaded ? dataState.items.length ? dataState.items.map(item =>
                                                <ProductCardGridView  product={item} theme={theme.light} />
                                            ) : <Empty />
                                                : <ContentSpinner />}
                                        </TabPanel>
                                        <TabPanel value={view} index={'list'} className='list'>
                                            <Suspense fallback={<ContentSpinner />}>
                                            {isLoaded ? dataState.items.length ? dataState.items.map(item =>
                                                <ProductCardListView product={item} theme={theme.light} />
                                            ) : <Empty />
                                                : <ContentSpinner />}
                                            </Suspense>
                                        </TabPanel>
                                    </main>
                                    <Divider className='w-100 px-5' />
                                </section>
                            </ErrorBoundary>
                        </Col>
                    </Row>
                </Container>
            </Borderlines>
            <Footer fill='#fff' />
        </ThemeContext.Provider>
    )
}

function Filter(props) {
    const [expandedCategory, setExpandedCategory] = React.useState(false);
    const [expandedMatier, setExpandedMatier] = React.useState(false);
    const [expandedForme, setExpandedForme] = React.useState(false);
    const [expandedVol, setExpandedVol] = React.useState(false);
    const [expandedColor, setExpandedColor] = React.useState(false);

    const fields = {
        Category: { list: ['chimique', 'Lubrifiants', 'argo-alimentaire'], icon: <ClassTwoToneIcon />, expand: () => setExpandedCategory(!expandedCategory) },
        Matier: { list: ['PHD', 'PVC', 'PL'], icon: <ScienceRoundedIcon />, expand: () => setExpandedMatier(!expandedMatier) },
        Forme: { list: ['Carre', 'Oval', 'Bidon'], icon: <CategoryTwoToneIcon />, expand: () => setExpandedForme(!expandedForme) },
        Volume: { list: ['20L', '10L', '5L', '2L', '1L'], icon: <HeightTwoToneIcon />, expand: () => setExpandedVol(!expandedVol) },
        Color: { list: ['red', 'blue', 'green', 'yellow', 'white'], icon: <ColorLensTwoToneIcon />, expand: () => setExpandedColor(!expandedColor) },
    }
    const styles = makeStyles(() => ({
        filter: {
            border: '1px solid',
            borderColor: '#E7EDF3',
            borderRadius: 5,
            transition: '0.4s',
            width: '90%',
            height: 'auto',
            position: 'sticky',
            top: '22%',
            display: 'flex',
            justifyContent: 'end',
            backgroundColor: ' rgba(0, 0, 0, 0.01)',
            fontFamily: 'Spinnaker !important',
            '& aside': {
                alignContent: 'center',
                width: '100%'
            },
            '& .MuiCardHeader-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
            },
            '& .MuiCardHeader-title': {
                fontFamily: 'Spinnaker ',
            },
            '& h4': {
                fontFamily: '"Antic Slab",sans-serif !important',
                letterSpacing: '3px'
            }
        },
    }))();

    return (
        <Card className={styles.filter}>
            <aside className='Filter'>
                <h4 className='p-2 mb-1 text-center'>Filter</h4>
                <Card>
                    <CardHeader
                        avatar={
                            <Icon className='h-auto' aria-label="settings">
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
                        className='px-3 Collapse'>
                        {fields.Category.list.map(values =>
                            <label className='checkbox-btn'>
                                <input type={'checkbox'} onChange={() => props.filtercallback("Type", values)} />
                                <span className='btn btn-light'>{values}</span>
                            </label>
                        )}
                    </Collapse>
                </Card>
                <Card >
                    <CardHeader
                        avatar={
                            <Icon className='h-auto' aria-label="settings">
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
                        className='px-3 Collapse'>
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
                            <Icon className='h-auto' aria-label="settings">
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
                        className='px-3 Collapse'>
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
                            <Icon className='h-auto' aria-label="settings">
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
                        className='px-3 Collapse'>
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
                            <Icon className='h-auto' aria-label="settings">
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
                        className='px-3 Collapse'>
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
function Empty() {
    return (
        <div className='Empty'>
            <div className='w-75'>
                <p className='alert text-danger text-center'>No items Found ...</p>
            </div>
        </div>
    )
}

