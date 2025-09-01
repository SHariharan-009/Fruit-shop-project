import React, { useContext } from 'react'
import "./Footer.css"
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";
import Qrcode from '../content/Qrcode';

const Footer = () => {


  return (
    <div>
      <div className='mb-2 bg-gradient-to-br from-amber-300 to-emerald-300 w-full flex justify-around rounded-xl h-[180px] md:h-[280px] md:mt-0 mt-5'>

        <div className='p-0 md:p-10'>

          <h1 className='text-[20px] md:text-[32px] font-bold p-5 md:p-10'>Shop name</h1>

          <div className='flex max-w-[70px] md:max-w-[150px] justify-around mt-5 md:mt-10'>
            <FaWhatsapp className='w-[30px] h-[30px] p-1 hover:bg-blue-500 rounded-full cursor-pointer transition duration-300' />
            <FaFacebook className='w-[30px] h-[30px] p-1 hover:bg-blue-500 rounded-full cursor-pointer transition duration-300' />
            <FaInstagram className='w-[30px] h-[30px] p-1 hover:bg-blue-500 rounded-full cursor-pointer transition duration-300' />
          </div>

        </div>

        <div className='w-[120px] md:max-w-[250] mr-[0px] md:mr-[550px] p-5 md:p-10 font-bold flex-col-reverse'>
          <label >Address </label>
          <p>Narimedu</p>
          <p>Kosakullam</p>

          <div className="">
            <label>Contact us </label>
          </div>
        </div>

        <div className='mr-0 md:mr-20 mb-0 md:mb-[150px] mt-0 md:mt-10'>
          <Qrcode />
        </div>
      </div >
      <div>

        <label className='text-[8px] md:text-[16px] text-center w-full animate-pulse'>All Right Reserved © Copyright 2025 | Shri Ramajeyam palamuthir solai designed by S.Hari</label>

      </div>
    </div>
  )
}

export default Footer;