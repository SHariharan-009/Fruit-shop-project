import React, { useState } from 'react'
import { img2, img2a } from '../data/img2'
// import { useParams } from 'react-router-dom'
import "./Fruits.css"
import { useContext } from 'react'
import { myContext } from '../Context/Context'

const Fruits = () => {


  const { setkgvalue, fruitData, setFruitData } = useContext(myContext)
  console.log("newData", fruitData)
  const handleFruitKgChange = (e, id) => {
    const { value } = e.target
    setkgvalue(value)
    const newData = fruitData.map((data) => data.id === id ? data.kg = value : "")
    setFruitData((prev) => [...prev, newData])
    console.log("newData", fruitData)
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      < div style={{ margin: "0px", boxSizing: "border-box", position: "relative", padding: "10px  " }}>
        {
          fruitData.map((data) => (
            <div key={data.id} className={data.cls}>
              <img src={data.img} alt="image" style={{ width: "200px", height: "150px" }} />
              <label style={{ textShadow: "0px 5px 10px", fontSize: "15px", fontWeight: "20px" }} >1 KG Rs :{data.label}</label>
              <h2>{data.header}</h2>
              <div style={{ marginTop: "10px" }}><span style={{ marginLeft: "10px" }}><button className="butn" style={{ backgroundColor: "white", color: "blue", borderRadius: "10px", padding: "5px" }}>{data.buttonName}</button></span>
                <span style={{ marginLeft: "10px" }}><button className="butn" style={{ backgroundColor: "white", color: "blue", borderRadius: "10px", padding: "5px" }}>{data.addcart}</button></span>
                {/* <input
                    type="number"
                    value={data.kg}
                    style={{ backgroundColor: "white", color: "blue", borderRadius: "5px", width: "50px", height: "40px", padding: "10px" }}
                    onChange={(e) => handleFruitKgChange(e, data.id)}
                  /> */}
                {/* {data.kg}  */}
              </div>
            </div>
          ))
        }
      </div >
      < div style={{ margin: "0px", boxSizing: "border-box", position: "relative", padding: "10px  " }}>
        {
          img2a.map((data) => (
            <div key={data.id} className={data.cls}>
              <img src={data.img} alt="image" style={{ width: "200px", height: "150px" }} />
              <label style={{ textShadow: "0px 5px 10px", fontSize: "15px", fontWeight: "20px" }} >1 KG Rs :{data.label}</label>
              <h2>{data.header}</h2>
              <div style={{ marginTop: "10px" }}><span style={{ marginLeft: "10px" }}><button className="butn" style={{ backgroundColor: "white", color: "blue", borderRadius: "10px", padding: "5px" }}>{data.buttonName}</button></span>
                <span style={{ marginLeft: "10px" }}><button className="butn" style={{ backgroundColor: "white", color: "blue", borderRadius: "10px", padding: "5px" }}>{data.addcart}</button></span>
              </div>
            </div>
          ))
        }
      </div >
    </div >

  )
}

export default Fruits