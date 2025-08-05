import React, { useState } from 'react'
import { juice, juice1 } from '../data/juice'
// import { useContext } from 'react'
// import { myContext } from '../Context/Context'

const Overalljuice = () => {
    return (
        <div className='flex flex-wrap gap-6 bg-white p-4'>
            < div className='flex justify-around gap-30'>
                {
                    juice.map((data) => (
                        <div key={data.id} className="border rounded-xl p-4 shadow-md">
                            <img src={data.img} alt="image" className='w-[200px] h-[150px] object-cover rounded-md' />

                            <label className='block text-sm font-bold mt-2'>1 KG Rs :{data.label}</label>

                            <h2 className="text-lg font-semibold mt-1">{data.header}</h2>

                            <div className='mt-3'>

                                <span className='ml-[10px]'><button className="bg-white border border-blue-500 text-blue-500 rounded-2xl px-4 py-1 hover:bg-blue-50">{data.addcart}</button></span>
                            </div>
                        </div>
                    ))
                }
            </div >
            < div className='flex justify-around gap-30'>
                {
                    juice1.map((data) => (
                        <div key={data.id} className="border rounded-xl p-4 shadow-md">
                            <img src={data.img} alt="image" className='w-[200px] h-[150px] object-cover rounded-md' />
                            <label className='block text-sm font-bold mt-2'>1 KG Rs :{data.label}</label>
                            <h2 className="text-lg font-semibold mt-1">{data.header}</h2>
                            <div className='mt-[10px]'>
                                <button className="bg-white border border-blue-600 text-blue-600 rounded-2xl px-4 py-1 hover:bg-blue-50" >{data.addcart}</button>
                            </div>
                        </div>
                    ))
                }
            </div >
        </div >

    )
}

export default Overalljuice