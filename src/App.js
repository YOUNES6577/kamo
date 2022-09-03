import { Routes, Route, } from "react-router-dom";
import React, { Suspense } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import  CircleSpinner from './component/Element/Spinner'
import ErrorBoundary from "./component/ErrorBoundary";
const Home = React.lazy(() => import('./component/home'))
const Produits = React.lazy(() => import('./component/Product'))
const Test = React.lazy(() => import('./component/Test'))


// productByTpe
class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={<CircleSpinner />}>
          <Routes>
            <Route path="/" exact element={<Home navTheme='auto' />} />
            <Route path="/Produits" exact element={<Produits navTheme='light' />} />
            <Route path="/Produits/:category"  element={<Produits navTheme='light' />} />
            <Route path="/ComponentTestings" exact element={<Test />} />
            <Route path="/Spinner" exact element={<CircleSpinner />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    );
  }
}

export default React.memo(App);
