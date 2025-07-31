import React from 'react'
import arrimg1 from "../assets/img/arr.jpeg"
import arrimg2 from "../assets/img/arr2.jpeg"
import arrimg3 from "../assets/img/arr3.jpeg"


const Arrived = () => {
    return (
        <div>
            <div>
                <label style={{ fontSize: "2rem", fontWeight: "700", padding: "10px" }}>Newly Arrived items</label>
            </div>
            <div className='flex justify-between mt-[20px] cursor-pointer animate-pulse' style={{ padding: "40px" }} >

                <div className='w-[280px] h-[200px] ' >
                    <img className='w-[120px] h-[100px]' style={{ marginLeft: "35%" }} src={arrimg1} alt="New arrived 1st img" />
                    <div className='hover:bg-gray-300 text-center'>

                        <label className=''>Dragon fruit</label><br />
                        <ol>
                            <li className="text-base ">Helps Boost Immunity</li>
                            <li className="text-base ">Good for Heart Health</li>
                        </ol>
                    </div>
                </div>

                <div className='w-[280px] h-[200px] '>

                    <img className='w-[120px] h-[100px] ' style={{ marginLeft: "32%" }} src={arrimg2} alt="New arrived 2nd img" />
                    <div className='hover:bg-gray-300 text-center'>
                        <label className="text-xl">Ice cream</label><br />
                        <ol style={{ listStyleType: "none" }}>
                            <li className="text-base ">calcium-rich food</li>
                            <li className="text-base ">boosts your metabolism</li>
                        </ol>
                    </div>
                </div>

                <div className="w-[280px] h-[200px] ">
                    <img className='w-[120px] h-[100px] ' style={{ marginLeft: "30%" }} src={arrimg3} alt="New arrived 3rd img" />
                    <div className='hover:bg-gray-300 text-center'>

                        <label className="text-xl">Dry fruits</label><br />
                        <ol style={{ listStyleType: "none" }} >
                            <li className="text-base ">bone strength</li>
                            <li className="text-base ">improved digestion</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Arrived 