import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signup } from "../api/api"
import bg1 from "../assets/img/bg1.jpeg"
import "./Signup.css"

const Signup = () => {
  const [name, setname] = useState("")
  const [mail, setmail] = useState("@gmail.com")
  const [password, setpassword] = useState("")
  const [gender, setgender] = useState("")

  console.log(name, mail, password);

  const [errorname, errorsetname] = useState(false)
  const [errormail, errorsetmail] = useState(false)
  const [errorpassword, errorsetpassword] = useState(false)

  const navigate = useNavigate();

  const checkfunc = async (e) => {

    e.preventDefault();

    if (!name) {
      errorsetname(true);
    }
    if (!mail) {
      errorsetmail(true);
    }
    if (!password) {
      errorsetpassword(true)
    }
    const data = {

      username: name,
      password: password,
      email: mail,
      gender: gender
    }
    const response = await signup(data)
    if (response?.response_code == 200) {

      alert("updated successfully");
      console.log(response, "updated successfully");

      setname("")
      setmail("")
      setpassword("")
      setgender("")

      navigate("/Login");

    }
  }
  return (
    <div className="w-full h-[550px] bg-no-repeat bg-cover bg-fixed mt-0 flex items-center">

      <div className="shadow-[0px_10px_20px] p-5 bg-white rounded-lg justify-center">

        <form onSubmit={checkfunc} className=" "
        >

          <label className="text-[30px] text-blue-600 flex justify-center font-bold gap-5">Signup</label><br />

          <label className="">Name :</label>

          <input className="border border-gray-300 rounded px-2 py-1 w-full" type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} required /><br />

          {errorname ? (<><p className="text-red-500">Name required</p></>) : (<></>)}

          <label>Mail :</label>
          <input type="Email" value={mail} className="border border-gray-300 rounded px-2 py-1 w-full" onChange={(e) => setmail(e.target.value)} required /><br />

          {errormail ? (<><p className="text-red-500">mail required</p></>) : (<></>)}

          <label>Password :</label>
          <input className="border border-gray-300 rounded px-2 py-1 w-full"
            type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} required /><br />
          {errorpassword ? (<><p className="text-red-500">password required</p></>) : (<></>)}

          <label className="">Gender :</label>
          <input type="text" value={gender} placeholder="Gender" onChange={(e) => setgender(e.target.value)} className="border border-gray-300 rounded px-2 py-1 w-full"
          /><br />

          <div className="flex gap-4 mt-5 justify-center">

            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >Submit</button>

            <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">cancel</button>
          </div>

          <p className="mt-4 text-sm sm:text-base"> Already have an account? <Link to="/Login" className="text-blue-600 font-medium hover:underline hover:text-blue-800">Login</Link></p>
        </form>
      </div>
    </div >
  )
}
export default Signup