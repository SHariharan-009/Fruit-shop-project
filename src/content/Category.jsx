import React, { useEffect } from 'react'
import icon1 from "../assets/img/juicicon.jpeg"
import icon2 from "../assets/img/appicon.jpeg"
import icon3 from "../assets/img/snackicon.png"
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
const Category = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            easing: "ease-in-out",
            once: true,
        })


    }, [])


    return (
        <div className='content-center mt-[90px] p-[10px]'>

            <label className='text-[16px] mt-160 font-bold md:text-[32px]'>Category</label>

            <div className=' md:flex justify-around font-bold text-[16px] p-[20px] md:text-2xl md:p-[40px] text-center ml-[20%] md:ml-0'>

                <Link to="/Overalljuice " >
                    <div data-aos="fade-right" className="cursor-pointer text-center">
                        <img src={icon1} alt="Juice icon" className='cursor-pointer w-[60px] h-[50px] md:w-[120px] md:h-[100px] hover:bg-gray-400 hover:' />
                        <h2 className='text-center'>Juice</h2>
                    </div>
                </Link>

                <Link to="/Overallfruits" >
                    <div className="cursor-pointer text-center">
                        <img src={icon2} alt="Juice icon" className='cursor-pointer w-[60px] h-[50px] md:w-[120px] md:h-[100px] hover:bg-amber-200' />
                        <h2 className='text-center'>Fruits</h2>
                    </div>
                </Link>

                <Link to="/Overallsnacks" >
                    <div data-aos="fade-left" className="cursor-pointer text-center">
                        <img src={icon3} alt="Juice icon" className='cursor-pointer w-[60px] h-[50px] md:w-[120px] md:h-[100px] mt-5 md:mt-0 flex' />
                        <h2 className='text-center'> Snacks</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Category