import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, NavLink,Route,Routes } from 'react-router-dom';
import React from 'react';
import Form from './components/Form';
//var x=document.getElementById("firstName").value;
function App() {
 
 

  
  return (


   <div className="App">
  

<BrowserRouter>
     <Routes>
     
     <Route path='/Home' element={<Home/>}></Route>
     <Route path='/' element={<Form/>}></Route>
      <Route path='/Navbar' element={<Navbar/>}></Route>
     
      
     </Routes>
     
     </BrowserRouter>

    </div>
  );
}

export default App;
