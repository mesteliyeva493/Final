import React, { useState, lineRef } from 'react';
import { IoIosClose } from "react-icons/io";

import { Link } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";
import './Header.scss';
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <>
      <header>
        <div className='container'>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-6">
              <div>
                <img className='logo' src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/logo4-free-img.png" alt="logo" />
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
                    {/* <li>
                      <Link to="orders">Orders</Link>
                    </li>
                    <li>
                      <Link to="accountdetail">Account Detail</Link>
                    </li> */}
                    <li>
                      <Link to="login">Login</Link>
                    </li>
                    <li>
                      <Link to="register">Register</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="contactus">Contact Us</Link>
                </li>
                <li>
                  <Link to="checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="basket">Basket</Link>
                </li>
                <li className='basket'>
                  <span className='e' onClick={toggleCart}>£0.00</span>
                  <LiaShoppingBagSolid className='basket' onClick={toggleCart} />
                </li>
              </ul>
            </div>

            <div className="col-6 d-lg-none d-flex justify-content-end hamburger-menu">
              <button className="btn btn-primary " type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop1" aria-controls="offcanvasTop1"><RxHamburgerMenu />
              </button>

            </div>

          </div>
        </div>
      </header>
      <div style={{ zIndex: "23333333333333", height: "300px" }} className="offcanvas resOff offcanvas-top" tabindex="-1" id="offcanvasTop1" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li className='navbar'><Link to="/" data-bs-dismiss="offcanvas">Home</Link></li>
            <hr />
            <li className='navbar'><Link to="aboutus" data-bs-dismiss="offcanvas">About Us</Link></li>
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

  
      <div className={`offcanvas offcanvas-end ${showCart ? 'show' : ''}`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <p id="offcanvasRightLabel">Shopping Cart</p>
          <button type="button" className="btn-close text-reset" onClick={toggleCart} aria-label="Close"></button>
        </div>
        <div ref={lineRef} className='line'></div>
        <div className="offcanvas-body">
          <div className='basketimg'>
            <img src="	https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic06-free-img-300x300.jpg" alt="" />
          </div>
          <div className='basketdesc'>
            <div className='desc1'>
              <div>
                <p>Ayurvedic Soap
                </p>
              </div>
              <div>
                <button><IoIosClose />
                </button>
              </div>
            </div>
            <div className='desc2'>
              <div className='basketspan'>
                <span>-</span>
                <span>0</span>
                <span>+</span>
              </div>
              <div>
                <p>$64.00</p>
              </div>
            </div>
          </div>
        </div>
        <div ref={lineRef} className='line'></div>
        <div className="offcanvas-footer">
          <div className='sup'>
            <div>
              <p>Subtotal:
              </p>
            </div>
            <div>
              $64.00
            </div>
            
          </div>
          <div ref={lineRef} className='line'></div>
          <div className='basketbutton'>
            <button>view card</button>
            <button>checkout</button>
            <button>
              Continue Shopping</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;