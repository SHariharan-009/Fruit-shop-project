import { Fragment, useState } from 'react'
import Header from './header/Header'
import Content from './content/Content'
import Login from './login/Login'
import Fruits from "./Fruits item/Fruits"
import Juice from "./Juice items/Juice"
import Snacks from "./Snacks items/Snacks"
import Order from './header/Order'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Signup from './Signup/Signup'
import Dashboard from './dashboard/dashboard'
import Detailbar from './header/Detailbar.JSX'
import Socialmedia from './content/Socialmedia'

function App() {
  return (
    <Fragment>
      <Header />
      <Socialmedia />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Detailbar" element={<Detailbar />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Juice" element={<Juice />} />
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/Snacks" element={<Snacks />} />
      </Routes>
    </Fragment>
  )
}
export default App
