import React, { useState } from 'react'
import { Enquiry } from "../api/api"
import { useNavigate } from 'react-router-dom'

const Enquery = () => {

    const [name, setname] = useState("")
    const [number, setnumber] = useState()
    const [mail, setmail] = useState("@gmail.com")
    const [message, setmessage] = useState("")

    const navigate = useNavigate()

    const sumitfunc = async (e) => {
        e.preventDefault()

        const data = ({
            Name: name,
            Phonenumber: number,
            Email: mail,
            Message: message
        })


        const result = await Enquiry(data);
        console.log("result", result)

        if (result?.response === 200) {
            setname("")
            setnumber("")
            setmail("")
            setmessage("")
            navigate("/")
            alert("User enquery details updated")
            return
        }
        else {
            return
            alert("User enquery details not updated")
        }
    }

    return (
        <div className='h-130 bg-linear-to-r from-yellow-200 to-blue-400 md:flex-row md:flex justify-center'>

            <div className='animate-pulse text-center content-center'>

                <label className='text-[1.5rem] md:text-[3.5rem] font-bold'> Get<span className='text-orange-500 '> 25% <br />Discount </span>on your <br />first purchase</label>

            </div>

            <form className='ml-[25%] content-center mt-8'>

                <label className='items-center text-[16px] md:text-[32px] font-bold'>Enquery</label><br />

                <label >Name</label><br />

                <input className='bg-white w-[200px] md:w-[500px] mt-[5px] h-[35px] md:rounded-2xl rounded' type="text" required placeholder='   Name' onChange={(e) => setname(e.target.value)} /><br />

                <label style={{ marginTop: "15px" }}>Phonenumber</label><br />
                <input type="number" required placeholder='   Pnone number' className='bg-white w-[200px] md:w-[500px] mt-[5px] h-[35px] md:rounded-2xl rounded' onChange={(e) => setnumber(e.target.value)} /><br />

                <label >Email</label><br />
                <input type="email" required placeholder='   Email address' className='bg-white w-[200px] md:w-[500px] mt-[5px] h-[35px] md:rounded-2xl rounded' onChange={(e) => setmail(e.target.value)} /><br />

                <p >Message</p><input type="text" className='bg-white w-[230px] md:w-[500px] mt-[5px] h-[60px] md:h-[110px] md:rounded-2xl rounded' placeholder='   Message' onChange={(e) => setmessage(e.target.value)} /><br />

                <button className='p-[5px] md:p-[10px] mt-[30px] md:rounded-2xl rounded cursor-pointer bg-amber-300 w-[50px] md:w-[100px] text-[10px] font-bold md:text-[16px]' onClick={sumitfunc}>Submit</button>

                <button className='p-[5px] md:p-[10px] md:rounded-2xl rounded cursor-pointer bg-amber-300 w-[50px] md:w-[100px] hover:transition-colors ml-[30px] mr-[30px] text-[10px] font-bold md:text-[16px]'>Cancel</button>

            </form>
        </div >
    )
}

export default Enquery