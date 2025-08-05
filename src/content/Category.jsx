import React from 'react'
import icon1 from "../assets/img/juicicon.jpeg"
import icon2 from "../assets/img/appicon.jpeg"
import icon3 from "../assets/img/snackicon.png"
import { Link } from 'react-router-dom';

const Category = () => {

    return (
        <div className='content-center mt-[90px] p-[10px]'>

            <label className='text-[32px] mt-160 font-bold'>Category</label>

            <div className='flex justify-around font-bold text-2xl p-[40px]'>

                <Link to="/Overalljuice " >
                    <div className="cursor-pointer text-center">
                        <img src={icon1} alt="Juice icon" className='cursor-pointer w-[120px] h-[100px] hover:bg-gray-400' />
                        <h2 className='text-center'>Juice</h2>
                    </div>
                </Link>

                <Link to="/Overallfruits" >
                    <div className="cursor-pointer text-center">
                        <img src={icon2} alt="Juice icon" className='cursor-pointer w-[120px] h-[100px] hover:bg-amber-200' />
                        <h2 className='text-center'>Fruits</h2>
                    </div>
                </Link>

                <Link to="/Overallsnacks" >
                    <div className="cursor-pointer text-center">
                        <img src={icon3} alt="Juice icon" className='cursor-pointer w-[120px] h-[100px]' />
                        <h2 className='text-center'> Snacks</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Category