import { Routes, Route, } from "react-router-dom";
import React, { Suspense } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {HourglassSpinner} from './component/Element/Spinner'
const Home = React.lazy(() => import('./component/home'))
// const Type = React.lazy(()=> import('./component/TypesPr/Type'))

// import 'https://scripts.sirv.com/sirv.js'



class App extends React.Component {
  render() {
    return (<Suspense  fallback={<HourglassSpinner  />}>
      <Routes>
        <Route path="/" exact element={<Home navTheme='auto' />} />
        <Route path="/Spinner"  exact element={<HourglassSpinner />} />
        {/* <Route path="/Type"  exact element={<Type />} /> */}
      </Routes>
    </Suspense>
    );
  }
}

export default React.memo(App);
