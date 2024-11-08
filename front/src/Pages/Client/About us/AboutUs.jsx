import React from 'react'
import Hero from '../../../Components/AboutUs/Hero/Hero'
import Purus from '../../../Components/AboutUs/Purus/Purus'
import Author from '../../../Components/Home/Author/Author'
import Logo from '../../../Components/Home/Logo/Logo'
import Hcontact from '../../../Components/Home/Hcontact/Hcontact'
import Qee from '../../../Components/AboutUs/Qee/Qee'
import Bringing from '../../../Components/AboutUs/Bringing/Bringing'
import {Helmet} from "react-helmet";





function AboutUs() {
  return (
    <>
   <Helmet>
    <title>AboutUs</title>
  </Helmet>
    <Hero/>
    <Purus/>
   <Qee/>
   <Bringing/>
   <Logo/>
    <Author/>
    <Hcontact/>
    </>
  )
}

export default AboutUs