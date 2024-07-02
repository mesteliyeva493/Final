
import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header-container'>
      <div className="navBg">
        <nav className="nav">
          <div className="navbar" id="navbarWEX">
            <h1>Ayur Veda</h1>
            <Link to='/admin' className="nav-link"><i className="fa fa-product"></i><span>Product</span></Link>
            <Link to='/admin/add' className="nav-link"><i className="fa fa-plus"></i><span>Add</span></Link>
            <Link to='/admin/logo' className="nav-link"><i className="fa fa-product-hunt"></i><span>Logo</span></Link>
            <Link to='/admin/card' className="nav-link"><i className="fa fa-product-hunt"></i><span>Card</span></Link>
            <Link to='/admin/user' className="nav-link"><i className="fa fa-product-hunt"></i><span>User</span></Link>
            <Link to='/admin/order' className="nav-link"><i className="fa fa-product-hunt"></i><span>Orders</span></Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
