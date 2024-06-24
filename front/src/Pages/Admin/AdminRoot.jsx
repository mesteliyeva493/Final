import React from 'react'
import Header from '../../Layout/Admin/Header/Header'
import { Outlet } from 'react-router'

function AdminRoot() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default AdminRoot