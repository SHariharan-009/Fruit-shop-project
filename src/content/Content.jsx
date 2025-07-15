import React, { useContext } from 'react'
import "./Content.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { json } from "../data/data"
import { myContext } from '../Context/Context'

const Content = () => {
  const { clkcutn } = useContext(myContext)

  const navigate = useNavigate()

  // const { id } = useParams

  const handleNavigate = (id) => {
    console.log(id)
    if (id === 1) { navigate(`/Juice`) }
    if (id === 2) { navigate(`/Fruits`) }
    if (id === 3) { navigate(`/Snacks`) }
  }

  return (
    <div className='container' style={{ backgroundColor: clkcutn ? "white" : "black", margin: "0px", width: "100%", height: "540px", position: "relative" }}>
      {
        json.map((data) => (

          <div key={data.id} className={data.cls}>
            <label>{data.label}</label>
            <h2>{data.header}</h2>
            <Link><img src={data.img} width="100px" alt="Fruit juice image" className='' /></Link><br />
            <button onClick={() => handleNavigate(data?.id)}>{data.buttonName}</button>
          </div>
        ))
      }
    </div>
  )
}
export default Content