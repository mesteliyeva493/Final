import React from 'react'
import Header from '../../Layout/Client/Header/Header'
import Footer from '../../Layout/Client/Footer/Footer'
import { Outlet } from 'react-router-dom'

function MainRoot() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default MainRoot