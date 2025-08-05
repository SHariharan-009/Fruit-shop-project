import React, { useContext } from 'react'
import "./Footer.css"
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {


  return (
    <div className='mt-10 mb-2 bg-gradient-to-br from-amber-300 to-emerald-300 w-full h-[250px] flex justify-around rounded-xl'>

      <div className='p-10'>

        <h1 className='text-["32px"] font-bold p-10'>Shop name</h1>

        <div className='flex max-w-[150px] justify-around mt-10 '>
          <FaWhatsapp className='w-[30px] h-[30px] p-1 hover:bg-blue-500 rounded-full cursor-pointer transition duration-300' />
          <FaFacebook className='w-[30px] h-[30px] p-1 hover:bg-blue-500 rounded-full cursor-pointer transition duration-300' />
          <FaInstagram className='w-[30px] h-[30px] p-1 hover:bg-blue-500 rounded-full cursor-pointer transition duration-300' />
        </div>

        <label className='top-10'>All Right Reserved © Copyright 2025 | FruitShop designed by Hari.</label>
      </div>

      <div className='max-w-[250] mr-[550px] p-10 font-bold flex-col-reverse'>
        <label >Address </label>
        <p>Narimedu</p>
        <p>Kosakullam</p>

        <div className="">
          <label>Contact us </label>
        </div>
      </div>
    </div >
  )
}

export default Footer;