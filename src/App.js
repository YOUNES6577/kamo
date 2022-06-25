import { Routes, Route, } from "react-router-dom";
import Home from './component/home'
import Type from './component/TypesPr/Type'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/navbar'
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Type" className="Type" exact element={<Type />} />
      </Routes>
    </>
  );
}

export default App;
