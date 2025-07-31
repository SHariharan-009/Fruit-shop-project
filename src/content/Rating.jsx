import React, { useState } from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";


const Rating = () => {

    const [add, setadd] = useState("")
    const [star, setstar] = useState(0)
    const [data, setdata] = useState([])

    const clikfunc = () => {
        if (add == "" && add.trim() == "") {
            alert("Please enter feedback")
        }

        setstar(star)

        const data = [
            {
                name: "",
                cont: setdata(add),
                rate: setdata(star)
            }
        ]
        console.log("data", data)
        setdata((prev) => [...prev, data])
        setadd("")
        setstar(0)
        alert("Feedback updated")

    }

    return (
        <div className=''>

            <div style={{ marginLeft: "" }}>
                <label style={{ fontSize: "32px", marginTop: "20px", fontWeight: "700", padding: "10px", alignItems: "center" }}>Review</label>
                <br />

                <input value={add} onChange={(e) => setadd(e.target.value)} style={{ width: "300px", height: "30px", borderRadius: "10px", padding: "5px", backgroundColor: "lightblue" }} type="text" placeholder='Add feedback' required />

                <div style={{ display: "flex", padding: "10px" }}>
                    <h2 value={star} onChange={() => setstar(1)} style={{ cursor: "pointer", fontWeight: "400px", fontSize: "25px" }}> <FaRegStar /></h2>

                    <h2 value={star} onChange={() => setstar(2)} style={{ cursor: "pointer", fontWeight: "400px", fontSize: "25px" }}><FaRegStar /></h2>

                    <h2 value={star} onChange={() => setstar(3)} style={{ cursor: "pointer", fontWeight: "400px", fontSize: "25px" }}> <FaRegStar /></h2>

                    <h2 value={star} onChange={() => setstar(4)} style={{ cursor: "pointer", fontWeight: "400px", fontSize: "25px" }}><FaRegStar /></h2>

                    <h2 value={star} onChange={() => setstar(5)} style={{ cursor: "pointer", fontWeight: "400px", fontSize: "25px" }}><FaRegStar /></h2>

                    <h2>  {data.rate == 1 ? 1 : 0}/5 ratings</h2>

                </div>

                <button onClick={clikfunc} style={{ marginLeft: "10px", backgroundColor: "yellow", width: "50px", borderRadius: "10px", fontSize: "20px" }}> Add</button>   <br />
            </div>


            {data?.map((value) => {

                <div style={{ display: "flex" }}>

                    <p style={{ fontWeight: "400", fontSize: "20px" }}>{value.cont}</p><br />

                    <p style={{ fontWeight: "", fontSize: "15px" }}> {value.rate == 1 ? <FaRegStar /> : <FaStar />}</p>
                    <p style={{ fontWeight: "", fontSize: "15px" }}> {value.rate == 2 ? <FaRegStar /> : <FaStar />}</p>
                    <p style={{ fontWeight: "", fontSize: "15px" }}> {value.rate == 3 ? <FaRegStar /> : <FaStar />}</p>
                    <p style={{ fontWeight: "", fontSize: "15px" }}> {value.rate == 4 ? <FaRegStar /> : <FaStar />}</p>
                    <p style={{ fontWeight: "", fontSize: "15px" }}> {value.rate == 5 ? <FaRegStar /> : <FaStar />}</p>

                </div>
            })}

        </div>

    )
}

export default Rating