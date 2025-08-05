import React, { useState } from 'react'
import { img2, img2a } from '../data/img2'
import { useContext } from 'react'
import { myContext } from '../Context/Context'

const Fruits = () => {


  const { fruitData } = useContext(myContext)

  return (
    < div className='relative p-2 flex flex-wrap justify-around gap-6'>
      {
        fruitData.map((data) => (

          <div key={data.id} className='flex flex-col items-center'>

            <img src={data.img} alt="image" className='w-[200px] h-[150px] object-cover' />

            <label className='text-[15px] font-bold drop-shadow-md mt-2'>1 KG Rs :{data.label}</label>

            <h2 className='mt-1 text-lg font-medium'> {data.header}</h2>

            <div className='mt-[10px]'>
              <span className='ml-[10px]'><button className="bg-white text-blue-500 hover:text-black rounded-2xl px-4 py-2 border border-blue-500 transition duration-200"  >{data.addcart}</button></span>
            </div>
          </div>
        ))
      }
    </div >


  )
}

export default Fruits