import React, { use, useState } from 'react'
import { trend } from '../data/trend'

const Trending = () => {
    const [heart, setheart] = useState(false)

    // const [data, setData] = useState(false)

    const clickfunc = (id) => {
        console.log("id", id)
        // setheart(false)
        const ret = trend.map((data) => {
            // return data.id === id ? { ...data, heart: true } : { ...data, heart: false }
            return data.id === id ? false : true
        })
        setheart(ret)
        setheart(prev => !prev)
    }

    return (
        <div>
            < div className='bg-transparent'>
                <label style={{ padding: "10px" }} className='text-[32px] font-bold'>Trending products</label>

                <div className='flex justify-around '>
                    {
                        trend.map((data) => (
                            <div key={data.id} style={{ padding: "45px" }} className='content-center'
                            >
                                <img onClick={() => clickfunc(data.id)}
                                    src={heart === false ? data.img1 : data.img2}
                                    alt="heart" className='ml-[155px] w-[20px] h-[20px]'
                                />
                                <img src={data.img} alt="image" className='ml-[25px] content-around w-[120px] h-[100px]' />

                                <label className='ml-[50px] mt-[10px] text-[16px]'>1 KG Rs :{data.label}</label>

                                <h2 className='ml-[50px] mt-[10px] font-bold'>{data.header}</h2>

                                <button className=' mt-[10px] cursor-pointer text-blue-800 ml-[50px]' style={{ padding: "5px" }}>{data.addcart}</button>

                            </div>
                        ))
                    }
                </div >
            </div>
        </div >
    )
}

export default Trending 