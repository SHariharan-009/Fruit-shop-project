import React from 'react'
import { snack } from "../data/snack"
const Snacks = () => {
  return (
    <div>
      < div style={{ margin: "0px", display: "flex", boxSizing: "border-box", position: "relative", padding: "10px  " }}>
        {
          snack.map((data) => (
            <div key={data.id} className={data.cls} style={{ padding: "50px", marginLeft: "50px", alignitem: "center" }}>
              <img src={data.img} alt="image" style={{ width: "200px", height: "150px" }} />
              <label style={{ textShadow: "0px 5px 10px", fontSize: "15px", fontWeight: "20px" }} >1 KG Rs :{data.label}</label>
              <h2>{data.header}</h2>
              <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                <span style={{ marginLeft: "10px" }}><button className="butn" style={{ cursor: "pointer", backgroundColor: "white", color: "blue", borderRadius: "10px", padding: "5px" }}>{data.buttonName}</button></span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Snacks