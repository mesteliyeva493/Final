import React from 'react'
import Hero from '../../../Components/ContactUs/Hero/Hero'
import Visitors from '../../../Components/ContactUs/Visitors/Visitors'
import Contact from '../../../Components/ContactUs/Contact/Contact'
import {Helmet} from "react-helmet";

function ContactUs() {
  return (
    <>
       <Helmet>
    <title>ContactUs</title>
  </Helmet>
   <Hero/>
   <Visitors/>
   <Contact/>
    </>
  )
}

export default ContactUs