import './asset/css/App.css';
import {Routes, Route, } from "react-router-dom";
import Home from './component/home'
import Type from './component/TypesPr/Type'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Routes> 
        <Route path="/" exact  element={<Home />}/>
        <Route path="/Type"  className="Type" exact  element={<Type />}/> 
      </Routes>
  );
}

export default App;
