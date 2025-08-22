import React, { useContext, useState } from 'react'
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { myContext } from '../Context/Context'
import { FaShoppingCart } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const Header = () => {

  const { clkcutn, setclkcutn } = useContext(myContext)

  const [clkbut, setclkbut] = useState(false)

  const clkfunc = () => {
    setclkbut(!clkbut)

  }
  const navigate = useNavigate();

  const handleChange = (navigatevalue) => {

    if (navigatevalue) {

      navigate(navigatevalue);

    }
  }

  const { items } = useContext(myContext)

  return (
    <div className=''>

      <div className='fiwed w-full h-[50px] flex items-center justify-around px-5 bg-white shadow-md  text-black font-bold' >

        < Link to="" className='hover:bg-gray-200 p-2 rounded-md active:rotate-90' onClick={clkfunc}><FiAlignJustify className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /> </Link>

        <label className=' text-[10px] md:text-[20px] font-bold text-neutral-800 tracking-wide'>Shop name</label>

        <div className=" flex justify-around items-center gap-5 ">

          <Link to="/" className=' text-[10px] md:text-[20px] h-[30px] rounded-2xl  hover:underline active:translate-x-3'> Home </Link>

          <select className='h-[15px] md:h-[30px] rounded-2xl text-[7px] md:text-[16px] border-2'
            onChange={(e) => handleChange(e.target.value)} required>

            <option value="/">- All categories -</option>
            <option value="/Overallfruits">Fruits</option>
            <option value="/Overalljuice">Juices</option>
            <option value="/Overallsnacks">Snacks</option>

          </select>

          <div className="relative w-full max-w-[200px]">

            <input type="text" className=' h-[15px] md:h-[30px]  w-full rounded-2xl text-[7px] md:text-[16px] border-2 pl-3 pr-8 sm:p-[5px] md:p-[10px]' placeholder='  Search' required />

            <FaSearch className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-3 h-3 md:w-4 md:h-4' />

          </div>
          <div className='relative '>

            <Link to="/Cartdetails"><FaShoppingCart className='w-3 h-3 md:w-6 md:h-6 text-black hover:text-green-600 hover:scale-125' /></Link>

            <span className='bg-red-500 w-5 h-5 rounded-full text-white text-[10px] flex items-center justify-center absolute -top-2 -right-2'>{items.length}</span>

          </div>
        </div>

      </div>
      {
        clkbut && (

          <div className='flex flex-col p-4 gap-4 bg-white text-black 
  w-full sm:w-[250px] h-screen sm:h-[500px] 
  absolute left-0 z-[100] border  
  shadow-lg'>

            <Link to="/Login" className='flex items-center gap-2 hover:bg-gray-200 p-2 rounded'><FaRegUser />User</Link>

            <Link to="/Order" className='hover:bg-gray-200 p-2 rounded flex items-center gap-2'><CgFileDocument />Order</Link>

            <Link to="/Order" className='hover:bg-gray-200 p-2 rounded flex items-center gap-2'><FaHeart />Favourit</Link>


            <Link className='flex items-center gap-2 hover:bg-gray-200 p-2 rounded ' to="" onClick={() => setclkcutn(prev => !prev)}> {clkcutn ? <BsToggle2On /> : <BsToggle2Off />} Dark mode</Link>
          </div>

        )
      }
    </div>
  )
}
export default Header