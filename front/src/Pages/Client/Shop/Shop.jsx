import React from 'react'
import Shopp from '../../../Components/Shopp/Shopp'
import {Helmet} from "react-helmet";

function Shop() {
  return (
    <>
       <Helmet>
    <title>Shop</title>
  </Helmet>
    <Shopp/>
    
    </>
  )
}

export default Shop