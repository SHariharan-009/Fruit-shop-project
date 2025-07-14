import React from 'react'
import { img2, img2a } from '../data/img2'
// import { useParams } from 'react-router-dom'
import "./Fruits.css"

const Fruits = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      < div style={{ margin: "0px", boxSizing: "border-box", position: "relative", padding: "10px  " }}>
        {
          img2.map((data) => (
            <div key={data.id} className={data.cls}>
              <img src={data.img} alt="image" style={{ width: "200px", height: "150px" }} />
              <label>{data.label}</label>
              <h2>{data.header}</h2>
              {/* <Link to={`/content/${data.id}`}><img src={data.img} width="100px" alt="Fruit juice image" className='' /></Link><br /> */}
              <button style={{ backgroundColor: "white", color: "blue", borderRadius: "10px", padding: "5px" }}>{data.buttonName}</button>
              <button style={{ backgroundColor: "white", color: "blue", borderRadius: "10px", padding: "5px" }}>{data.addcart}</button>
              <input type="number" style={{ backgroundColor: "white", color: "blue", borderRadius: "5px", width: "50px", height: "40px" }}></input>  {data.kg}
            </div>
          ))
        }
      </div >
      < div style={{ margin: "0px", boxSizing: "border-box", position: "relative", padding: "10px  " }}>
        {
          img2a.map((data) => (
            <div key={data.id} className={data.cls}>
              <label>{data.label}</label>
              <h2>{data.header}</h2>
              {/* <Link to={`/content/${data.id}`}><img src={data.img} width="100px" alt="Fruit juice image" className='' /></Link><br /> */}
              <button>{data.buttonName}</button>
              <button>{data.addcart}</button>
              <input type="checkbox" />{data.kg}
            </div>
          ))
        }
      </div >
    </div >

  )
}

export default Fruits