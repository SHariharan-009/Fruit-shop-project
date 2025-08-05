import React from 'react'
import { juice } from '../data/juice'

const Juice = () => {
  console.log(juice, 'juice')

  return (

    < div className='flex flex-wrap p-2 m-0 relative box-border'>
      {
        juice.map((data) => (
          <div key={data.id} className="flex flex-col items-center p-12 ml-12">

            <img src={data.img} alt="image" className='w-[200px] h-[150px] object-cover' />

            <label className="text-[15px] font-bold drop-shadow-md mt-2">1 KG Rs :{data.label}</label>

            <h2 className="mt-1 text-lg font-semibold">{data.header}</h2>

            <div className="mt-5 ml-12">

              <span style={{ marginLeft: "10px" }}><button className="cursor-pointer bg-white text-blue-500 hover:text-black rounded-xl px-4 py-2 border border-blue-500 transition duration-200">{data.addcart}</button></span>

            </div>
          </div>
        ))
      }
    </div >
  )
}

export default Juice