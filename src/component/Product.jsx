import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Navigationbar from './Appbar'
import { Container, Row, Col } from 'react-bootstrap'

import '../asset/sass/Products.sass'
import { Divider } from '@mui/material'
import {Card, CardHeader } from '@mui/material'


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
    const filterFileds = [
        { field: 'Category', list: ['chimique', 'Lubrifiants', 'argo-alimentaire'] },
        { field: 'Matier', list: ['PHD', 'PVC', 'PL'] },
        { field: 'Forme', list: ['Carre', 'Oval', 'Bidon'] },
        { field: 'Volume', list: ['20L', '10L', '5L', '2L', '1L'] },
        { field: 'Color', list: ['red', 'blue', 'green', 'yellow', 'white'] }
    ]
    return (
        <Card className='Filter'>
            <aside>
                {filterFileds.map(obj =>
                    <>
                        <div className='mb-2'>
                            <h5 className='card-title'>{obj.field}</h5>
                            {obj.list.map(values =>
                                <label className='checkbox-btn'>
                                    <input type={'checkbox'} />
                                    <span className='btn btn-light'>{values}</span>
                                </label>
                            )}
                        </div>
                        <Divider className='mb-3    ' />
                    </>
                )}
            </aside>
        </Card>
    )
}