import React from 'react'
import icon1 from "../assets/img/juicicon.jpeg"
import icon2 from "../assets/img/appicon.jpeg"
import icon3 from "../assets/img/snackicon.png"


const Category = () => {
    return (
        <div style={{ alignContent: "center", padding: "10px", marginTop: "70px" }}>

            <label className='text-2rem mt-160' style={{ fontSize: "2rem", fontWeight: "700" }}>Category</label>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "40px", fontWeight: "400", fontSize: "32px" }} >

                <div >
                    <img src={icon1} alt="Juice icon" className='cursor-pointer w-[120px] h-[100px] hover:bg-gray-400' />
                    <h2 className='text-center'>Juice</h2>
                </div>

                <div >
                    <img src={icon2} alt="Juice icon" className='cursor-pointer w-[120px] h-[100px] hover:bg-amber-200' />
                    <h2 className='text-center'>Fruits</h2>
                </div>

                <div>
                    <img src={icon3} alt="Juice icon" className='cursor-pointer w-[120px] h-[100px]' />
                    <h2 className='text-center'> Snacks</h2>
                </div>

            </div>
        </div>
    )
}

export default Category