import './asset/css/App.css';
import {Routes, Route, } from "react-router-dom";
import Home from './component/home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Routes> 
        <Route path="/" exact  element={<Home />}/>
      </Routes>
  );
}

export default App;
