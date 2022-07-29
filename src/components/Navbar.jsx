import React from 'react'

import {Icon} from 'react-icons-kit'
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
//import {useHistory}from 'react-router-dom'
import img from '../img/img-icon.png'


export const Navbar = () => {
    
    const count = useSelector((state) => state.numberCart)

  return (
    <div className='navbar'>
        <div className="leftside">
            <div className="logo">
             <img  src={img} style={{width:'80px',height:"auto",padding: "15px"}}></img>
            </div>
        </div>
        <div className="rightside">
            <div><Link className='navlink' to='/product' >Home</Link></div>
        </div>
        <div className="rightside">
            <div><Link className='navlink' to='/'  >Logout</Link></div>
        </div>
        <div className="cart-menu-btn">
                <Link  className='navlink'  to='/cart'>

                <Icon icon={shoppingCart} size={20}></Icon>
                </Link> 
            
            <span className='cart-indicator'>{count}</span>
        </div>

    </div>
  )
}


