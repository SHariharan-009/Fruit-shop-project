import React from 'react'
import arrimg1 from "../assets/img/arr.jpeg"
import arrimg2 from "../assets/img/arr2.jpeg"
import arrimg3 from "../assets/img/arr3.jpeg"


const Arrived = () => {
    return (
        <div>
            <div>
                <label className='font-bold text-[16px] md:text-[32px] p-[10px]'>Newly Arrived items</label>
            </div>

            <div className='md:flex grid grid-cols-2 justify-around mt-[20px] cursor-pointer p-[0px] md:p-[40px] text-center'  >

                <div className='w-[140px] h-[100px] md:w-[280px] md:h-[200px]' >
                    <img className='w-[60px] h-[50px] md:w-[120px] md:h-[100px] animate-pulse' style={{ marginLeft: "35%" }} src={arrimg1} alt="New arrived 1st img" />

                    <div className='hover:bg-gray-300 text-center'>

                        <label className='text-[16px] md:text-xl'>Dragon fruit</label><br />
                        <ol>
                            <li className="text-[10px] md:text-base">Helps Boost Immunity</li>
                            <li className="text-[10px] md:text-base ">Good for Heart Health</li>
                        </ol>
                    </div>
                </div>

                <div className='w-[280px] h-[200px]'>

                    <img className='w-[60px] h-[50px] md:w-[120px] md:h-[100px] animate-pulseease-in-out ml-[32%]' src={arrimg2} alt="New arrived 2nd img" />
                    <div className='hover:bg-gray-300 text-center'>

                        <label className="text-[16px] md:text-xl">Ice cream</label><br />

                        <ol style={{ listStyleType: "none" }}>
                            <li className="text-[10px] md:text-base ">calcium-rich food</li>
                            <li className="text-[10px] md:text-base">boosts your metabolism</li>
                        </ol>
                    </div>
                </div>

                <div className="w-[280px] h-[200px] ">
                    <img className='-[60px] h-[50px] md:w-[120px] md:h-[100px] animate-pulse ease-in-out ml-[30%]' src={arrimg3} alt="New arrived 3rd img" />
                    <div className='hover:bg-gray-300 text-center'>

                        <label className="text-[16px] md:text-xl">Dry fruits</label><br />
                        <ol style={{ listStyleType: "none" }} >
                            <li className="text-[10px] md:text-base">bone strength</li>
                            <li className="text-[10px] md:text-base">improved digestion</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Arrived 