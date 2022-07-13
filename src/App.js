import { Routes, Route, } from "react-router-dom";
import * as React from 'react'
import Home from './component/home'
// import Type from './component/TypesPr/Type'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/Appbar'
import ErrorBoundary from './component/ErrorBoundary.jsx'
// import './asset/sass/navApp.sass'

class App extends React.Component {
  render() {
    return (
      <>
        <ErrorBoundary >
          <Navigation />
        </ErrorBoundary>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/Type" className="Type" exact element={<Type />} /> */}
        </Routes>
      </>
    );
  }
}

export default App;
