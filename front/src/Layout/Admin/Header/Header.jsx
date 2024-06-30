import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{padding:"0"}} className='col-2'>
       <div className=" navBg pl-0 pr-0">
      <nav className="nav navbar-toggleable-sm">
        <div className="navbar flex-column mt-md-0 pt-md-0 p-0 w-100" id="navbarWEX">
          <h1>Ayur Veda</h1>
          <Link to='/admin' Link className="nav-link"><i className="fa fa-dashboard"></i><span>Dashboard </span></Link>
          <Link to='/admin/add' Link className="nav-link"><i className="fa fa-dashboard"></i><span>Add </span></Link>
          <Link to='/admin/product' Link className="nav-link"><i className="fa fa-dashboard"></i><span>Product </span></Link>
        </div>
      </nav>
    </div>

    </header>
  )
}

export default Header