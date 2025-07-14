import { Fragment, useState } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Content from './content/Content'
import Login from './login/Login'
import Fruits from "./Fruits item/Fruits"
import Juice from "./Juice items/Juice"
import Snacks from "./Snacks items/Snacks"

import { Routes, Route } from "react-router-dom"

import './App.css'
import Signup from './Signup/Signup'
import Dashboard from './dashboard/dashboard'

function App() {
  return (
    <Fragment>
      <Header />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/content" element={<Content />} />
        <Route path="/Juice" element={<Juice />} />
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/Snacks" element={<Snacks />} />

      </Routes>

      <Footer />

    </Fragment>
  )
}
export default App
