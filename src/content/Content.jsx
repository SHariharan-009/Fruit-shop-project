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
import Footer from "../footer/Footer"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import Socialmedia from './Socialmedia'


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
    <div className='font-poppins overflow-hidden'>

      <div className='relative w-full h-[450px] sm:w-screen'
      >

        <h2 className='z-100 absolute text-2xl font-bold text-center text-balance content-center text-neutral-950 animate-pulse md:text-4xl' >{imageArray[direction]?.text}</h2>

        <img src={imageArray[direction]?.img} alt={`Juice`} className='w-screen h-full object-cover rounded-xl md:w-full ' />

        <button className='z-100  text-3xl text-gray-700 hover:text-black cursor-pointer' onClick={lftclkfunc}><FaChevronCircleLeft /></button>

        <button className='z-100 ml-[1300px] right-[5px]  absolute text-3xl text-gray-700 hover:text-black cursor-pointer' onClick={rgtclkfunc}><FaChevronCircleRight /></button>

        <div >

          <div className='absolute inset-0 flex justify-around items-center px-5 mt-110 md:px-10' >
            {
              json.map((data) => (

                <div key={data.id} className={`items-center w-[100px] h-[80px] bg-gradient-to-br from-green-100 to-lime-400 bg-opacity-1 hover:bg-gray-300 p-4 rounded-xl shadow-lg transition duration-300 border md:w-[300px] md:h-[180px]`} >

                  <label className='font-bold text-[12px] text-center sm:text-3xl '>{data.label}</label>

                  <h2 className='font-medium text-[10px] text-center pt-2 md:text-[20px] md:pt-2'>{data.header}</h2>

                  <button className='items-center ml-[150px] mt-0px w-[120px] h-[50px] font-bold bg-emerald-300 hover:bg-emerald-400 rounded-2xl animate-pulse' onClick={() => handleNavigate(data?.id)}>{data.buttonName}</button>

                  {/* <img src={data.img} alt="Fruit juice image" className='w-[100px] h-[70px] opacity-[0.8]' /> */}

                </div>
              ))
            }
          </div >
        </div>
      </div>
      <Socialmedia />
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