import React from 'react'
import BasketP from '../../../Components/BasketP/BasketP'
import {Helmet} from "react-helmet";

function Basket() {
  return (
    <>
       <Helmet>
    <title>Basket</title>
  </Helmet>
    <BasketP/>
    
    </>
  )
}

export default Basket