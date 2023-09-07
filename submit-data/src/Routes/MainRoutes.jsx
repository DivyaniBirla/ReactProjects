import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Auth/Login'
import { Register } from '../Auth/Register'
import { ForgetPassword } from '../Auth/ForgetPassword'
import { Layout } from '../WebPages/Layout'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/Layout' element= {<Layout/>} />
        <Route path='/Login' element= {<Login/>} />
        <Route path='/Register' element= {<Register/>} />
        <Route path='/ForgetPassword' element= {<ForgetPassword/>} />
    </Routes>
  )
}
