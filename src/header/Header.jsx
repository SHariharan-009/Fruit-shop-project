import React, { useContext, useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { myContext } from '../Context/Context'
import { FaShoppingCart } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {

  const { clkcutn, setclkcutn } = useContext(myContext)

  return (
    <div className='navbar' style={{ backgroundColor: clkcutn ? "white" : "black", backgroundAttachment: "fixed" }}>

      < Link to="/Detailbar" className='hover:bg-gray-200 z-100'><FiAlignJustify style={{ margin: "0px" }} className="hover:bg-green" /> </Link> <label >Shop name</label>

      <div className="menu">
        <select required>
          <option value="">  - All categories -  </option>
          <option value="Fruits">Fruits</option>
          <option value="Juices">Juices</option>
          <option value="Snacks">Snacks</option>
        </select>
        <input type="text" className='searchbar' placeholder='  Search' required />
        <span style={{ padding: "0px" }}><FaSearch /></span>
        <Link to="/" className='hover:bg-gray-200 z-100' >Home</Link>
        <Link to="/Login" className='text-center items-center hover:bg-gray-200 '><span ><FaRegUser /></span></Link>
        <Link to="" className='hover:bg-gray-200 '><FaShoppingCart /></Link>
        <Link to="/Order" className='hover:bg-gray-200 '>Order</Link>
        <Link className='hover:bg-gray-200 ' to="" onClick={() => setclkcutn(prev => !prev)}> {clkcutn ? <BsToggle2On /> : <BsToggle2Off />}</Link>
      </div>
    </div>
  )
}
export default Header