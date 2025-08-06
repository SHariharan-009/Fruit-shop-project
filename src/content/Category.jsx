import React from 'react'
import icon1 from "../assets/img/juicicon.jpeg"
import icon2 from "../assets/img/appicon.jpeg"
import icon3 from "../assets/img/snackicon.png"
import { Link } from 'react-router-dom';

const Category = () => {

    return (
        <div className='content-center mt-[90px] p-[10px]'>

            <label className='text-[16px] mt-160 font-bold md:text-[32px]'>Category</label>

            <div className=' grid grid-cols-2 md:flex justify-around font-bold text-[16px] p-[20px] md:text-2xl md:p-[40px]'>

                <Link to="/Overalljuice " >
                    <div className="cursor-pointer text-center">
                        <img src={icon1} alt="Juice icon" className='cursor-pointer w-[60px] h-[50px] md:w-[120px] md:h-[100px] hover:bg-gray-400' />
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
                    <div className="cursor-pointer text-center">
                        <img src={icon3} alt="Juice icon" className='cursor-pointer w-[60px] h-[50px] md:w-[120px] md:h-[100px]' />
                        <h2 className='text-center'> Snacks</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Category