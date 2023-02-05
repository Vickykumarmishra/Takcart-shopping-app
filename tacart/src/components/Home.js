import React from 'react'
import { createContext,useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


import Navbar from './Navbar';

const quantity=createContext();
const quantity2=createContext();//context for passing values of 2nd image
const quantity3=createContext();//context for passing values of 3rd image
const quantity4=createContext();


export default function Home() {
   
   
    const [data,setData]=useState(0);
    const [data2,setData2]=useState(0);
    const [data3,setData3]=useState(0);
    const [data4,setData4]=useState(0);

    
    const [price, setPrice]=useState(0);
    const [price2, setPrice2]=useState(0);
    const [price3, setPrice3]=useState(0);
    const [price4, setPrice4]=useState(0);
    
    function adder(){
      setData(data+1);
      setPrice(price+150);
    }

    function remover(){
        if(data!=0){       //pahle cart me negative usestate ka value chala ja raha tha isliye if lagaya
        setData(data-1);
        setPrice(price-150);
    }
    }

    function adder2(){
        setData2(data2 +1);
        setPrice2(price2+250);
    }
   
    function remover2(){
        if(data2!=0){ 
        setData2(data2 - 1);
        setPrice2(price2-250);}
    }

    function adder3(){
        setData3(data3+1);
        setPrice3(price3+300);
    }
   
    function remover3(){
        if(data3!=0){ 
        setData3(data3-1);
        setPrice3(price3-300);}
    }

    function adder4(){
        setData4(data4+1);
        setPrice4(price4+165);
    }
   
    function remover4(){
        if(data4!=0){ 
        setData4(data4-1);
        setPrice4(price4-165);}
    }

    const myTimeout=setTimeout(greet,1000);
  
    function greet(){
  
      alert('NAMASTE DEAR USER ,TAKCART WELCOMES YOU!')
    }

  return (
    <div>

<quantity.Provider value={data}>


<quantity2.Provider value={data2}>

<quantity3.Provider value={data3}>

    <quantity4.Provider value={data4}>

      
    <Navbar/>
  
    </quantity4.Provider>

</quantity3.Provider>

</quantity2.Provider>


</quantity.Provider>

{/**grids taken and cards put inside columns */}
{/**grid for mens clothing section */}
      <div className="container text-center" >
  <div className="row">

    <div className="col">
        <p>Black and grey jacket</p>
       
      <img src="blackcloth.jpg" className='img-thumbnail' style={{height:'20rem'}}/>
      <p> price:150₹</p>
      <h6 style={{background:'orange'}}>Total items added:{data}</h6>
      <button className='btn btn-primary' onClick={adder}>Add To Cart</button>
      <button className='btn btn-danger'  onClick={remover}>Remove</button>
    </div>

    <div className="col">
        <p>Formal black dress</p>
      <img src='formal men.jpg' className='img-thumbnail' style={{height:'20rem'}}/>
      <p> price:250₹</p>
      <h6 style={{background:'orange'}}>Total items added:{data2}</h6>
      <button className='btn btn-primary' onClick={adder2}>Add To Cart</button>
      <button className='btn btn-danger' onClick={remover2} >Remove</button>
    </div>

    <div className="col">
        <p>Tactical Pants</p>
      <img src='black pant.jpg' className='img-thumbnail' style={{height:'20rem'}}></img>
      <p> price:300₹</p>
      <h6 style={{background:'orange'}}>Total items added:{data3}</h6>
      <button className='btn btn-primary' onClick={adder3} >Add To Cart</button>
      <button className='btn btn-danger' onClick={remover3} >Remove</button>
    </div>

    <div className="col">
        <p>Black-white Combo</p>
      <img src='white and black.jpg' className='img-thumbnail' style={{height:'20rem'}}></img>
      <p> price:165₹</p>
      <h6 style={{background:'orange'}}>Total items added:{data4}</h6>
      <button className='btn btn-primary'  onClick={adder4} >Add To Cart</button>
      <button className='btn btn-danger' onClick={remover4}>Remove</button>
    </div>

  </div>
</div>
{/**grids for mens clothing section end here */}

<div>
    <p style={{color:'red',fontStyle:'bold'}}>Total price of added Items in cart={price+price2+price3+price4}₹</p>
</div>


{/**carousel starts here */}

<center><div id="carouselExampleCaptions" className="carousel slide"  data-bs-ride="carousel" style={{border:'0.1rem solid grey',background:'grey'}} >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="pink saree.jpg" className="d-block w-50 img-thumbnail" alt="..."   style={{height:'25rem'}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Womens cloths</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="saree girl.jpg" className="d-block w-50 img-thumbnail" alt="..."  style={{height:'25rem'}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Womens cloths</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="pink suit.jpg" className="d-block w-50 img-thumbnail" alt="..."  style={{height:'25rem'}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>Womens cloths</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{background:'black'}}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{background:'black'}}>
    <span className="carousel-control-next-icon" aria-hidden="true" style={{color:'red'}}></span>
    <span className="visually-hidden" style={{color:'black'}}>Next</span>
  </button>
</div>

</center>

    </div>
  )
}

export {quantity,quantity2,quantity3}
export{quantity4}
