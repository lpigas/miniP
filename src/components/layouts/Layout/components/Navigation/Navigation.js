import React from 'react'
import Buttonall from '../../../../atoms/Buttons/ButtonAll/Buttonall'
import { Link } from "react-router-dom";
import './Navigation.css'


export default function Navigation() {
let  id  = document.location.pathname;

  return (
    <div className='nav__menu'>
        
        <div className="nav__menu--button">
        <Buttonall 
        value={<Link to='../blog' 
          className={`link__button ${id==='/blog' && 'active'}`}>Blog</Link>}
        className='menu--button'/> 

        </div>
        <div className="nav__menu--button">
        <Buttonall 
        value={<Link to='../about' 
          className={`link__button ${id==='/about' && 'active'}`}>About</Link>} 
        className='menu--button'/>  

        </div>
        <div className="nav__menu--button">
        <Buttonall 
         value={<Link to='../home' 
          className={`link__button ${id==='/home' && 'active'}`}>Home</Link>} 
         className='menu--button'/>  
        </div>
    </div>
  )
}
