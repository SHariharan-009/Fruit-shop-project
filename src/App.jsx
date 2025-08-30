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
import Dashboard from './dashboard/Dashboard'
import Cartdetails from './content/Cartdetails'
import Socialmedia from './content/Socialmedia'
import Overallfruits from './content/Overallfruits'
import Overallsnacks from './content/Overallsnacks'
import Overalljuice from './content/Overalljuice'
import Error from './content/Error'

function App() {
  return (
    <Fragment>
      <Header />
      <Socialmedia />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Login/:username" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Juice" element={<Juice />} />
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/Snacks" element={<Snacks />} />
        <Route path="/Cartdetails" element={<Cartdetails />} />
        <Route path="/Overallfruits" element={<Overallfruits />} />
        <Route path="/Overalljuice" element={<Overalljuice />} />
        <Route path="/Overallsnacks" element={<Overallsnacks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  )
}
export default App
