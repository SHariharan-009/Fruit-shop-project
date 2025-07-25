import React, { useContext, useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import menuSVG from "../../src/assets/menu.svg"
import Home from '../content/Home'
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { myContext } from '../Context/Context'

const Header = () => {

  const { clkcutn, setclkcutn } = useContext(myContext)





  return (
    <div className='navbar' style={{ backgroundColor: clkcutn ? "white" : "black", backgroundAttachment: "fixed" }}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg> */}
      <label>Shop name</label>
      <div className="menu">
        <select name="" id="" required>
          <option value="">  - All categories -  </option>
          <option value="Fruits">Fruits</option>
          <option value="Juices">Juices</option>
          <option value="Snacks">Snacks</option>
        </select>
        <input type="text" className='searchbar' placeholder='  Search' required />
        <span style={{ padding: "0px" }}><FaSearch /></span>
        <Link to="/">Home</Link>
        <Link to="/Login"><span><FaRegUser /></span></Link>
        <Link to=""><FaRegHeart /></Link>
        <Link to="" onClick={() => setclkcutn(prev => !prev)}> {clkcutn ? <BsToggle2On /> : <BsToggle2Off />}</Link>
      </div>
    </div>
  )
}
export default Header