import React from 'react'
import { quantity } from './Home'
import { useContext,useState } from 'react'

import { Route ,Routes,NavLink } from 'react-router-dom'

import { price } from './Home'
import { quantity2 ,quantity3,quantity4} from './Home'


export default function Navbar() {
  

   //useContext hook can be used to fetch data of context 
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="logo-color.png" alt="Logo" width="150" height="80" style={{border:'0.1rem solid white'}} className="d-inline-block align-text-top"/> 
    </a>

   <div>

    <quantity.Consumer>
   {
      (data)=>{

        return (

            <quantity2.Consumer>
                {
                      (data2)=>{
                        return (//if you will put this bracket down , it will give error
                            <quantity3.Consumer>

                               {
                                (data3)=>{
                                 return (//click here ,if you want to add one more consumer 

                                 <quantity4.Consumer>
                                   {
                                    (data4)=>{
                                        return(
                                            <h6 style={{background:'orange',width:'2rem',borderRadius:'50%'}}>{data+data2+data3+data4}</h6>
                                        )
                                    }
                                   }

                                 </quantity4.Consumer>

                                 )
                                }

                               }
                            </quantity3.Consumer>
                            

                        )
                      }
                }

            </quantity2.Consumer>

        )
      }
   }

    </quantity.Consumer>

   
   
  <img src='cart.gif' width="120" height="80" />
  </div> 

  </div>
</nav>
      
    </div>
  )
}
