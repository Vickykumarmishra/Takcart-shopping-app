import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, Route,Routes } from 'react-router-dom';

import Offcanvas from './components/Offcanvas';


function App() {
  return (
    <div className="App">
      
    <Offcanvas/>
<BrowserRouter>
     <Routes>

      <Route path='/' element={<Home/>}></Route>
      
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
