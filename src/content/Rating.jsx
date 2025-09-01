import React, { useState } from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import { rating } from '../api/api';


const Rating = () => {

    const [add, setadd] = useState("")
    const [star, setstar] = useState(0)
    const [data, setdata] = useState([])

    const clikfunc = async () => {
        if (add == "" && add.trim() == "") {
            alert("Please enter feedback")
        }
        const data =
        {
            name: "",
            cont: add,
            rate: star
        }
        const rate = await rating(data)
        if (rate?.response === 200) {
            setdata((prev) => [...prev, data])
            setadd("")
            setstar(0)
            alert("Feedback updated")
        }
    }
    console.log("data", data)
    return (
        <div className=''>

            <div >
                <label className='text-[16px] md:text-[32px] font-bold items-center p-[10px]' >Review</label>
                <br />

                <input value={add} onChange={(e) => setadd(e.target.value)} style={{ padding: "5px" }} className='w-[300px] h-[30px] rounded-2xl bg-blue-200' type="text" placeholder='Add feedback' required />

                <div style={{ padding: "10px" }} className='flex'>
                    <h2 value={star} onClick={() => setstar(1)} className='cursor-pointer font-bold text-[25px] hover:text-red-500'> <FaRegStar /></h2>

                    <h2 value={star} onClick={() => setstar(2)} className='cursor-pointer font-bold text-[25px] hover:text-red-500'><FaRegStar /></h2>

                    <h2 value={star} onClick={() => setstar(3)} className='cursor-pointer font-bold text-[25px] hover:text-red-500'> <FaRegStar /></h2>

                    <h2 value={star} onClick={() => setstar(4)} className='cursor-pointer font-bold text-[25px] hover:text-red-500'><FaRegStar /></h2>

                    <h2 value={star} onClick={() => setstar(5)} className='cursor-pointer font-bold text-[25px] hover:text-red-500'><FaRegStar /></h2>

                    <h2>  {data.rate == 1 ? 1 : 0}/5 Ratings</h2>

                </div>

                <button className='bg-yellow-600 text-white font-semibold px-3 text-center py-2 md:px-6 md:py-3rounded md:rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-700 hover:shadow-xl active:scale-95' onClick={clikfunc} > Add</button> <br />
            </div>

            {data?.map((value) => {
                return (
                    <div className='flex'>

                        <p style={{ fontWeight: "400", fontSize: "20px" }}>{value.cont}</p><br />

                        {
                            Array.from({ length: value.rate }).map(() => (
                                <FaStar />
                            ))
                        }

                        {/* <p className='text-[15px]'> {value.rate == 1 ? <FaRegStar /> : <FaStar />}</p>
                        <p className='text-[15px]'> {value.rate == 2 ? <FaRegStar /> : <FaStar />}</p>
                        <p className='text-[15px]'> {value.rate == 3 ? <FaRegStar /> : <FaStar />}</p>
                        <p className='text-[15px]'> {value.rate == 4 ? <FaRegStar /> : <FaStar />}</p>
                        <p className='text-[15px]'> {value.rate == 5 ? <FaRegStar /> : <FaStar />}</p> */}

                    </div>
                )

            })}

        </div>

    )
}

export default Rating