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
                <li><Link to="/">Home</Link></li>
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
              <button className="btn btn-primary "type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><RxHamburgerMenu/>
                </button>

            </div>
          </div>
        </div>
      </header>
      <div style={{zIndex:"23333333333333", height:"300px"}} className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <ul>
            <li className='navbar'><Link to="/" data-bs-dismiss="offcanvas">Home</Link></li>
            <hr />
            <li  className='navbar'><Link to="aboutus" data-bs-dismiss="offcanvas">About Us</Link></li>
            <hr />
            <li className='navbar'><Link to="shop" data-bs-dismiss="offcanvas">Shop</Link></li>
            <hr />
            <li className='dropdown-container'><Link to="myaccount" data-bs-dismiss="offcanvas">My Account</Link>
            <ul className='dropdown2'>
                    <li>
                      <Link to="orders">Orders</Link>
                    </li>
                    <li>
                      <Link to="accountdetail">Account Detail</Link>
                    </li>
                  </ul>
            </li>
            <hr />
            <li className='navbar'><Link to="contactus" data-bs-dismiss="offcanvas">Contact Us</Link></li>
            <hr />
            <li className='navbar'><Link to="basket" data-bs-dismiss="offcanvas"><LiaShoppingBagSolid /></Link></li>
          </ul>
       
        </div>
      </div>

    </>
  )
}

export default Header