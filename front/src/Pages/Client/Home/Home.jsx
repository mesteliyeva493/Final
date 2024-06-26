import React from 'react'
import Author from '../../../Components/Home/Author/Author'
import DoYou from '../../../Components/Home/DoYou/DoYou'
import Lofo from '../../../Components/Home/Lofo/Lofo'
import Metus from '../../../Components/Home/Metus/Metus'
import Logo from '../../../Components/Home/Logo/Logo'
import Our from '../../../Components/Home/Our/Our'
import Pdd from '../../../Components/Home/Pdd/Pdd'
import Aliquet from '../../../Components/Home/Aliquet/Aliquet'
import Rhoncus from '../../../Components/Home/Rhoncus/Rhoncus'
import Hcontact from '../../../Components/Home/Hcontact/Hcontact'
import Hero from '../../../Components/Home/Hero/Hero'

function Home() {
  return (
    <>

    <Hero/> 
      <DoYou/>
    <Author/>
    <Lofo/>
      <Metus/>
    <Logo/>
    <Our/>
    <Rhoncus/>
    <Pdd/>
    <Aliquet/>
    <Hcontact/>
    
    </>
  )
}

export default Home