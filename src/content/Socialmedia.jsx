import React from 'react'
import whatsapp from "../assets/img/Whtapp.jpeg"
import fb from "../assets/img/fb.png"
import insta from "../assets/img/insta.jpeg"


const Socialmedia = () => {
    return (
        <div className='mt-[500px] flex-col justify-between absolute z-100 bg-black rounded-4xl inline-block' style={{ padding: "10px", marginLeft: "1270px" }}>
            <img className='w-[60px] h-[60px] ml-5 mr-0 bg-transparent rounded-4xl cursor-pointer p-10' src={whatsapp} alt="Whatapp img" />
            <img className='w-[60px] h-[60px] ml-5 mr-0 bg-white rounded-4xl cursor-pointer' src={fb} alt="Fb img" />
            <img className='w-[60px] h-[60px] ml-5 mr-0 bg-transparent rounded-4xl cursor-pointer' src={insta} alt="Instagram img" />
        </div>
    )
}

export default Socialmedia