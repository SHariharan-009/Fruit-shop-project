import React, { useState } from 'react'
import { snack, snack1 } from '../data/snack'
import { useContext } from 'react'
import { myContext } from '../Context/Context'

const Overallsnacks = () => {
    const { items, setitems } = useContext(myContext)


    const olsnackfunc = (header) => {

        const frt = snack.find((data) => (data.header === header
        ))

        if (!frt) {

            alert("Stock not available")
            return;
        }

        const cartfrt = items.some((item) => (item.header === header))

        if (cartfrt) {

            alert("Selected item already add to cart")
            return;
        }
        else {
            setitems((prev) => [...prev, frt])

            alert("Selected item add to cart")
            return;
        }
    }

    const olsnackfunc1 = (header) => {

        const frt = snack1.find((data) => (data.header === header
        ))

        if (!frt) {

            alert("Stock not available")
            return;
        }

        const cartfrt = items.some((item) => (item.header === header))

        if (cartfrt) {

            alert("Selected item already add to cart")
            return;
        }
        else {
            setitems((prev) => [...prev, frt])

            alert("Selected item add to cart")
            return;
        }
    }

    return (
        <div className='flex flex-wrap gap-6 bg-white p-4'>
            < div className='flex justify-around gap-30'>
                {
                    snack.map((data) => (

                        <div key={data.id} className="border rounded-xl p-4 shadow-md">

                            <img src={data.img} alt="image" className='w-[200px] h-[150px] object-cover rounded-md' />

                            <label className='block text-sm font-bold mt-2'>1 KG Rs :{data.label}</label>

                            <h2 className="text-lg font-semibold mt-1">{data.header}</h2>

                            <div className='mt-3'>

                                <span className='ml-[10px]'><button onClick={() => olsnackfunc(data.header)} className="bg-white border-2 border-blue-500 text-blue-700 rounded-2xl px-4 py-1 hover:bg-blue-400 cursor-pointer hover:text-black">{data.addcart} </button></span>
                            </div>
                        </div>
                    ))
                }
            </div >
            < div className='flex justify-around gap-30'>
                {
                    snack1.map((data) => (
                        <div key={data.id} className="border rounded-xl p-4 shadow-md">
                            <img src={data.img} alt="image" className='w-[200px] h-[150px] object-cover rounded-md' />
                            <label className='block text-sm font-bold mt-2'>1 KG Rs :{data.label}</label>
                            <h2 className="text-lg font-semibold mt-1">{data.header}</h2>
                            <div className='mt-[10px]'>
                                <button className="bg-white border-2 border-blue-600 text-blue-600 rounded-2xl px-4 py-1 hover:bg-blue-400 cursor-pointer  hover:text-black" onClick={() => olsnackfunc1(data.header)}>{data.addcart}</button>
                            </div>
                        </div>
                    ))
                }
            </div >
        </div >

    )
}

export default Overallsnacks