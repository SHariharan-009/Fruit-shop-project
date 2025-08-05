import React from 'react'
import whatsapp from "../assets/img/Whtapp.jpeg"
import fb from "../assets/img/fb.png"
import insta from "../assets/img/insta.jpeg"


const Socialmedia = () => {
    return (
        <div className='fixed top-[300px] right-2 z-[100] flex flex-col items-center bg-black rounded-[20px] gap-2 p-2 animate-slide-in shadow-xl animate-pulse'>

            <img className='w-[50px] h-[50px] rounded-full cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300' src={whatsapp} alt="WhatsApp" />

            <img className='ww-[50px] h-[50px] rounded-full cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300' src={fb} alt="Facebook" />

            <img className='w-[50px] h-[50px] rounded-full cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300' src={insta} alt="Instagram" />

        </div>
    )
}

export default Socialmedia