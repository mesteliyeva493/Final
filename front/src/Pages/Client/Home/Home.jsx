import React, { useEffect, useState } from 'react'
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
import { Helmet } from "react-helmet";
import ResultModal from '../../../Components/ResultModal/ResultModal'
import { useLocation } from 'react-router-dom'
function Home() {
  const [successModal, setSuccessModal] = useState(false)
  const location = useLocation()
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const successParam = queryParams.get('success');
    if (successParam === 'true') {
      setSuccessModal(true);
      setTimeout(() => {
        setSuccessModal(false);

      }, 10000);
    } else {
      setSuccessModal(false);

    }
  }, [location.search]);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <DoYou />
      <Author />
      <Lofo />
      <Metus />
      <Logo />
      <Our />
      <Rhoncus />
      <Pdd />
      <Aliquet />
      <Hcontact />
      {successModal == true ?
        <ResultModal /> : ''
      }
    </>
  )
}

export default Home