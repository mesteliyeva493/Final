import React from 'react'
import { Link } from 'react-router-dom'
import { LiaShoppingBagSolid } from "react-icons/lia";
import './Header.scss'
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <>
      <header>
        <div className='container'>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-6">
              <div>
                <img className='logo' src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/logo4-free-img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-6 d-lg-flex d-none justify-content-end align-items-center">
              <ul className="nav-links">
                <li className='Home'><Link to="/">Home</Link></li>
                <li><Link to="aboutus">About Us</Link></li>
                <li><Link to="shop">Shop</Link></li>
                <li className='dropdown-container'>
                  <Link to="myaccount">My Account</Link>
                  <ul className='dropdown'>
                    <li>
                     <Link to="orders">Orders</Link>
                    </li>
                    <li>
                    <Link to="accountdetail">Account Detail</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="contactus">ContactUs</Link>
                </li>
                <li>
                  <span className='e'>£0.00</span>
                </li>
                <li>
                  <Link to="basket"><LiaShoppingBagSolid className='basket' />
                  </Link>
                </li>
                <li>
                </li>
              </ul>
             
            </div>
            <div className="col-6 d-lg-none d-flex justify-content-end hamburger-menu">
                <RxHamburgerMenu  />
              </div>
            
          </div>
         
        </div>

      </header>




    </>
  )
}

export default Header