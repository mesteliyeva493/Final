import React from 'react'
import Header from '../../Layout/Admin/Header/Header'
import { Outlet } from 'react-router-dom'
function AdminRoot() {
  return (
    <div style={{display:'flex',width:'100%'}}>
    <Header/>
    <Outlet/>
    </div>
  )
}

export default AdminRoot