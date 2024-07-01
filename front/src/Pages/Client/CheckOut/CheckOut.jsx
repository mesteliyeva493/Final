import React from 'react'
import Checkout from '../../../Components/Checkout/Checkout'
import {Helmet} from "react-helmet";

function CheckOut() {
  return (
    <>
       <Helmet>
    <title>CheckOut</title>
  </Helmet>
    <Checkout/>
    </>
  )
}

export default CheckOut