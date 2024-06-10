import React from 'react'
import { Link } from 'react-router-dom'
import { LiaShoppingBagSolid } from "react-icons/lia";

function Header() {
  return (
    <>
      <header>
        <img src="" alt="" />
         <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="aboutus">About Us</Link></li>
          <li><Link to="shop">Shop</Link></li>
          <li><Link to="myaccount">My Account</Link></li>
          <li>
            <Link to="contactus">ContactUs</Link>
          </li>
          <li>
            <Link to="basket"><LiaShoppingBagSolid />
</Link>
          </li>
         </ul>


      </header>
    
    
    
    
    </>
  )
}

export default Header