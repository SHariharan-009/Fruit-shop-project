import React, { useContext, useState, useEffect } from 'react'
// import "./Content.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { json } from "../data/data"
import { myContext } from '../Context/Context'
import banner from "../assets/img/banner.jpeg"
import banner2 from "../assets/img/banner2.jpeg"
import banner3 from "../assets/img/banner3.jpeg"
import Category from './Category'
import Arrived from './Arrived '
import Trending from './Trending '
import Bestsell from './Bestsell'
import Enquery from './Enquery'
import Rating from './Rating'
import Footer from '../footer/Footer'
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";


const Content = () => {
  const { clkcutn } = useContext(myContext)

  const navigate = useNavigate()

  const handleNavigate = (id) => {
    console.log(id)
    if (id === 1) { navigate(`/Juice`) }
    if (id === 2) { navigate(`/Fruits`) }
    if (id === 3) { navigate(`/Snacks`) }
  }

  const imageArray = [
    {
      id: 1,
      img: banner,
      text: "These include boosting immunity, aiding digestion, improving skin health, detoxifying the body, and promoting heart health"
    },
    {
      id: 2,
      img: banner2,
      text: "Fruits offer numerous health benefits due to their rich content of vitamins, minerals, antioxidants, and fiber"
    },
    {
      id: 3,
      img: banner3,
      text: "Protein snacks offer several benefits, including helping with weight management, muscle growth and repair, and providing sustained energy"
    }
  ]


  const [direction, setdirection] = useState(0)


  const rgtclkfunc = () => {
    setdirection((pre) => pre == imageArray.length - 1 ? 0 : pre + 1)
  }
  const lftclkfunc = () => {
    setdirection((pre) => pre == 0 ? imageArray.length - 1 : pre - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setdirection((prevIndex) =>
        prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 3000ms = 3 seconds
  }, [imageArray.length]);


  return (
    <div >

      <div className=' font-poppins '
        style={{
          display: "flex", width: "100%", height: "460px", overflow: "hidden", opacity: "0.8", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", padding: "10px"
        }}
      >
        <button className=' cursor-pointer' onClick={lftclkfunc}><FaChevronCircleLeft /></button>

        <div style={{ width: "100%", height: "510px", backgroundColor: "transparent" }}>

          <h2 className='font-popins absolute text-4xl font-bold text-center text-balance text-neutral-950 text-shadow-zinc-100 animate-pulse' style={{ padding: "10px" }}>{imageArray[direction]?.text} </h2>

          <img src={imageArray[direction]?.img} alt={`Juice}`} className='w-screen shadow-gray-950 opacity-[]' />

        </div>

        <button className=' cursor-pointer' onClick={rgtclkfunc}><FaChevronCircleRight /></button>

        <div className='absolute top-[380px] left-16'>

          <div className=' flex justify-around gap-6 w-full pointer-cursor m-10 h-[180px] animate-bounce' >
            {

              json.map((data) => (

                <div key={data.id} className=" font-poppins w-96 rounded-xl bg-amber-50 opacity-[0.8] hover:bg-gray-400" >

                  <label style={{ marginLeft: "30%", padding: "5px" }} className='font-bold text-3xl'>{data.label}</label>

                  <h2 className='font-medium text-2xl text-center'>{data.header}</h2>

                  <img src={data.img} width="100px" alt="Fruit juice image" className=' mb-0 w-[120px] h-[120px]' />

                  <button className='text-center font-bold cursor-pointer mt-[150px] animate-pulse hover:bg-emerald-300 rounded-2xl' style={{ padding: "10px", marginLeft: "50%", }} onClick={() => handleNavigate(data?.id)}>{data.buttonName}</button>

                </div>
              ))
            }
          </div >
        </div>
      </div>
      <Category />
      <Arrived />
      <Trending />
      <Bestsell />
      <Enquery />
      <Rating />
      <Footer />
    </div >
  )
}
export default Content