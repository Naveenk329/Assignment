import React from 'react'
import {Link}from 'react-router-dom'
import {Icon} from 'react-icons-kit'
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
//import {useHistory}from 'react-router-dom'
import img from '../img/img-icon.png'


export const Navbar = ({user,totalProduct}) => {

  return (
    <div className='navbar'>
        <div className="leftside">
            <div className="logo">
             <img  src={img} style={{width:'80px',height:"auto",padding: "15px"}}></img>
            </div>
        </div>
        <div className="rightside">
            <div><Link className='navlink' to='login' >LogIn</Link></div>
        </div>
        <div className="cart-menu-btn">
            <a href='#' className='navlink' >
                <Icon icon={shoppingCart} size={20}></Icon>
            </a>
            <span className='cart-indicator'>11</span>
        </div>

    </div>
  )
}
