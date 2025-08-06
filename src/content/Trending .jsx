import React, { use, useState } from 'react'
import { trend } from '../data/trend'
import { useContext } from 'react'
import { myContext } from '../Context/Context'


const Trending = () => {
    //heat icon
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

    //add cart 

    const { items, setitems } = useContext(myContext)

    const addcartfunc = (id) => {

        const cartval = trend?.find((data) =>
            data.id === id
        )
        // setitems((prev) => [...prev, cartval])

        if (!cartval) {

            alert("Product not available in stock")
        }

        const cartvalue = items?.some((item) => item.id === id)  //some array type

        if (cartvalue) {

            alert("Same product already added in cart")
        }
        else {
            setitems((prev) => [...prev, cartval]);

            alert("product add to cart")
        }

    }

    return (
        <div>
            < div className='bg-transparent'>
                <label className='text-[16px] md:text-[32px] font-bold p-[10px]'>Trending products</label>

                <div className='grid grid-cols-2 justify-around md:flex'>
                    {
                        trend.map((data) => (
                            <div key={data.id} className='content-center p-[20px] md:p-[40px]'
                            >
                                <img onClick={() => clickfunc(data.id)}  //heart icon
                                    src={heart === false ? data.img1 : data.img2}
                                    alt="heart" className='ml-[155px] w-[10px] h-[10px] md:w-[20px] md:h-[20px] '
                                />
                                <img src={data.img} alt="image" className='ml-[25px] content-around w-[60px] h-[50px] md:w-[120px] md:h-[100px]' />

                                <label className='ml-[50px] mt-[10px] text-[8px] md:text-[16px]'>1 KG Rs :{data.label}</label>

                                <h2 className='ml-[50px] mt-[5px] md:mt-[10px] text-[12px] md:text-[16px] font-bold content-center'>{data.header}</h2>

                                {/* <input type="text" onChange={(e) => { setaddkg(e.target.value) }} /> }  */}

                                <button className=' bg-blue-600 text-white font-semibold px-6 py-3 text-[8px] md:text-[16px] rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:shadow-xl active:scale-95 ml-[50px] mt-[10px] md:mt-[20px] cursor-pointer' onClick={() => addcartfunc(data.id)} style={{ padding: "5px" }}>{data.addcart}</button>

                            </div>

                        ))
                    }
                </div >
            </div>
        </div >
    )
}

export default Trending 