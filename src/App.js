import './asset/App.css';
import {Routes, Route, } from "react-router-dom";
import Home from './component/home'

function App() {
  return (
      <Routes>
        <Route path="/" exact  element={<Home />}/>
      </Routes>
  );
}

export default App;
