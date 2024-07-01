import React, { useState, useContext } from 'react';
import { IoIosClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { basketc } from '../../../Context/Basketc';
import mainContext from '../../../Context/Context';
import './Header.scss';
import toast from 'react-hot-toast';

function Header() {
  const { basket, decrease, increase, deletedBasket, calculateSubtotal } = useContext(basketc);
  const { product, currentUser, setCurrentUser } = useContext(mainContext);
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
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><Link to="/aboutus" activeClassName="active">About Us</Link></li>
                <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
                <li className='dropdown-container'>
                  <NavLink to="/myaccount" activeClassName="active">My Account</NavLink>
                  <ul className='dropdown'>
                    {
                      currentUser ? <>

                        <li>
                          <p>
                            {currentUser?.username}
                          </p>
                        </li>
                        <li>
                          <button className='btn btn-danger' onClick={() => {
                            localStorage.removeItem('token')
                            setCurrentUser(null)
                            toast.success('Successfully Logouted')
                          }}>Logout</button>
                        </li>
                      </> : <>

                        <li>
                          <NavLink to="/login" activeClassName="active">Login</NavLink>
                        </li>
                        <li>
                          <NavLink to="/register" activeClassName="active">Register</NavLink>
                        </li>
                      </>
                    }

                  </ul>
                </li>
                <li>
                  <NavLink to="/contactus" activeClassName="active">Contact Us</NavLink>
                </li>
                <li className='basket'>
                  <span className='e' onClick={toggleCart}>£{calculateSubtotal().toFixed(2)}</span>
                  <LiaShoppingBagSolid className='basket' onClick={toggleCart} />

                  {basket.length > 0 && (
                    <span className="badge">{basket.length}</span>
                  )}
                </li>
              </ul>
            </div>
            <div className="col-6 d-lg-none d-flex justify-content-end hamburger-menu">
              <button className="btn btn-primary" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop1" aria-controls="offcanvasTop1">
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div style={{ zIndex: "23333333333333", height: "inherit" }} className="offcanvas resOff offcanvas-top" tabIndex="-1" id="offcanvasTop1" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li className='navbar'><Link exact to="/" data-bs-dismiss="offcanvas" activeClassName="active">Home</Link></li>
            <hr />
            <li className='navbar'><Link to="/aboutus" data-bs-dismiss="offcanvas" activeClassName="active">About Us</Link></li>
            <hr />
            <li className='navbar'><Link to="/shop" data-bs-dismiss="offcanvas" activeClassName="active">Shop</Link></li>
            <hr />
            <li className='dropdown-container'>
              <Link to="/myaccount" data-bs-dismiss="offcanvas" activeClassName="active">My Account</Link>
              <ul className='dropdown2'>
                <li>
                  <Link to="/orders" activeClassName="active">Orders</Link>
                </li>
                <li>
                  <Link to="/accountdetail" activeClassName="active">Account Detail</Link>
                </li>
              </ul>
            </li>
            <hr />
            <li className='navbar'><Link to="/contactus" data-bs-dismiss="offcanvas" activeClassName="active">Contact Us</Link></li>
            <hr />
            <li className='navbar'><Link to="/basket" data-bs-dismiss="offcanvas" activeClassName="active"><LiaShoppingBagSolid /></Link></li>
          </ul>
        </div>
      </div>

      <div className={`offcanvas offcanvas-end ${showCart ? 'show' : ''}`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <p id="offcanvasRightLabel">Shopping Cart</p>
          <button type="button" className="btn-close text-reset" onClick={toggleCart} aria-label="Close"></button>
        </div>
        <div className='line'></div>
        <div className="offcanvas-body">
          {basket.map((products) => (
            <div key={products.product.id}>
              <div className='basketimg'>
                <img src={products.product.img} alt="" />
              </div>
              <div className='basketdesc'>
                <div className='desc1'>
                  <div>
                    <p>{products.product.title}</p>

                  </div>

                  <div>
                    <button onClick={() => deletedBasket(products._id)}><IoIosClose /></button>
                  </div>
                </div>

                <div className='desc2'>

                  <div className='basketspan'>
                    <span onClick={() => decrease(products)}>-</span>
                    <span>{products.count}</span>
                    <span onClick={() => increase(products)}>+</span>

                  </div>

                  <div>

                    <p>${products.product.price}</p>
                  </div>

                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>

        <div className='line'></div>
        <div className="offcanvas-footer">
          <div className='sup'>
            <div>
              <p>Subtotal:</p>
            </div>
            <div>
              <p>$ {calculateSubtotal().toFixed(2)}</p>
            </div>
          </div>
          <div className='line'></div>
          <div className='basketbutton'>
            <NavLink to="/basket"><button>View Cart</button></NavLink>
            <NavLink to="/checkout"><button>Checkout</button></NavLink>
            <NavLink to="/shop"><button>Continue Shopping</button></NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
