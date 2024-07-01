import React from 'react'
import Account from '../../../Components/Account/Account'
import { Helmet } from "react-helmet";

function Login() {
  return (
    <>     <Helmet>
      <title>Login</title>
    </Helmet>
      <Account />

    </>
  )
}

export default Login