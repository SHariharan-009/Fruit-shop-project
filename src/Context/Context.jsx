import React, { createContext, useState } from 'react'
import app from "../assets/img/app.png"
import org from "../assets/img/org.png"
import grp from "../assets/img/grap.png"
import pin from "../assets/img/pin.png"

export const myContext = createContext();

const MyContextProvider = ({ children }) => {

    // const [footvalue, setfootvalue] = useState("")

    const [kgvalue, setkgvalue] = useState("")

    const [items, setitems] = useState([])

    // const [clkcutn, setclkcutn] = useState(true)

    const [fruitData, setFruitData] = useState([

        {
            id: 1,
            img: app,
            label: "300",
            header: "Apple",
            buttonName: "Buy now",
            addcart: "Add to card",
            kg: kgvalue,
            cls: "cd2img1"
        },
        {
            id: 2,
            img: org,
            label: "200",
            header: "Orange",
            buttonName: "Buy now",
            addcart: "Add to card",
            kg: kgvalue,
            cls: "cd2img2"
        },
        {
            id: 3,
            img: grp,
            label: "250",
            header: "Graps",
            buttonName: "Buy now",
            addcart: "Add to card",
            kg: "",
            cls: "cd2img3"
        },
        {
            id: 4,
            img: pin,
            label: "150",
            header: "pineapple",
            buttonName: "Buy now",
            addcart: "Add to card",
            kg: "",
            cls: "cd2img4"
        }
    ])
    const data = {
        name: "hari",
        age: "27"
    }
    // console.log(data)
    return (
        <myContext.Provider value={{ kgvalue, setkgvalue, data, fruitData, setFruitData, setitems, items }} >
            {children}
        </myContext.Provider  >
    )
}

export default MyContextProvider