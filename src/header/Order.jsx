
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";

const Order = () => {

    const [input, setinput] = useState("")

    const [kg, setkg] = useState(0)

    const [id, setid] = useState(0)

    const [data, setData] = useState([])

    const addfunc = () => {

        const data = {
            newid: id,
            name: input,
            kgs: kg
        }

        setData((prev) => [...prev, data])
        setinput("")
        setkg("")
        setid(id + 1)
    }

    const editfunc = (newid) => {
        const findData = data.find((data) => data.newid === newid)
        const editval = prompt("Edit the content", findData.name + " " + findData.kgs)
        const spitedData = editval.split(" ")
        const firstVal = spitedData[0]
        const secondVal = spitedData[1]

        if (editval !== null && editval.trim() !== "") {
            const updateData = data.map((data) => {

                return (

                    data.newid === newid ? { ...data, name: firstVal, kgs: secondVal } : data
                )
            }
            )
            setData(updateData)
        }
        else {
            setData(data)
        }
    }

    const delfunc = (newid) => {
        const deletedData = data.filter((data) => data.newid !== newid)
        setData(deletedData)
    }

    return (

        <div style={{ backgroundColor: "lightblue", display: "flex", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "580px", height: "550px", borderColor: "2px solid black", borderRadius: "10px", padding: "5px" }}>
                <label style={{ fontSize: "25px", display: "flex", justifyContent: "center", fontWeight: "20px" }}>List of items</label><br /><br />

                <span style={{ padding: "5px", fontSize: "20px" }} >Item :</span>

                <select value={input} onChange={(e) => setinput(e.target.value)} style={{ backgroundColor: "white", border: "2px solid black", width: "300px", padding: "15px", height: "50px", borderRadius: "10px", textTransform: "capitalize", marginTop: "30px" }}>
                    <option style={{ alignItems: "center", backgroundColor: "white", border: "2px solid black", width: "300px", padding: "15px", height: "50px", borderRadius: "10px", marginTop: "30px" }} >-Choose one-</option>
                    <option style={{ backgroundColor: "white", border: "2px solid black", width: "300px", padding: "15px", height: "50px", borderRadius: "10px", marginTop: "30px" }} >apple</option>
                    <option style={{ backgroundColor: "white", border: "2px solid black", width: "300px", padding: "15px", height: "50px", borderRadius: "10px", marginTop: "30px" }} >orange</option>
                    <option style={{ backgroundColor: "white", border: "2px solid black", width: "300px", padding: "15px", height: "50px", borderRadius: "10px", marginTop: "30px" }} >graps</option>
                    <option style={{ backgroundColor: "white", border: "2px solid black", width: "300px", padding: "15px", height: "50px", borderRadius: "10px", marginTop: "30px" }} >pinapple</option>
                    <option style={{ backgroundColor: "white", border: "2px solid black", width: "300px", padding: "15px", height: "50px", borderRadius: "10px", marginTop: "30px" }} >mango</option>
                </select>
                <span style={{ padding: "5px", fontSize: "20px" }} >KG :</span>

                <input type="number" value={kg} onChange={(e) => setkg(e.target.value)} style={{ backgroundColor: "white", border: "2px solid black", width: "100px", padding: "15px", height: "50px", borderRadius: "10px", marginTop: "30px" }} />

                <button onClick={() => addfunc()} style={{ color: "blue", width: "50px", padding: "5px", borderRadius: "50%", marginLeft: "5px", height: "50px" }}>add</button>

                {data?.map((data, index) => (

                    <div key={index} style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", alignItems: "center", padding: "10px" }}>
                        <p style={{ backgroundColor: "white", width: "430px", height: "50px", borderRadius: "10px", margin: "0px", padding: "10px" }} > {data.name} {data.kgs} Kg </p>

                        <button onClick={() => editfunc(data.newid)} style={{ color: "blue", width: "50px", padding: "5px", borderRadius: "50%", height: "50px", marginTop: "0px" }}><BiEditAlt /></button>

                        <button onClick={() => delfunc(data.newid)} style={{ color: "blue", width: "50px", padding: "5px", borderRadius: "50%", height: "50px", marginTop: "0px" }}><RiDeleteBinFill />
                        </button>
                    </div>
                ))}
            </div >
        </div >
    )
}
export default Order