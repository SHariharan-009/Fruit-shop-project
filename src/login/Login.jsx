import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login } from "../api/api"
import { FaEye, FaEyeSlash, FaRegUserCircle, FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import bg1 from "../assets/img/bg1.jpeg"

const Login = () => {
    const [email, setemail] = useState("@gmail.com")
    const [password, setpassword] = useState("")

    const [erroremail, seterroremail] = useState("")
    const [errorpassword, seterrorpassword] = useState("")
    const navigate = useNavigate()

    const [iconvissible, seticonvissible] = useState(false)

    const submitfunc = async (e) => {
        console.log("login successfully", email, password)

        if (!email) {
            seterroremail("*** email/username required  ***");
        }
        if (!password) {
            seterrorpassword("*** password required ***");
        }

        const data = {
            email: email,
            password: password
        }

        const response = await login(data);
        if (response?.response_code == 200) { }
        console.log("updates successful", response);
        localStorage.setItem("token", response.token)
        navigate("/dashboard");
        setemail("");
        setpassword("")
    }


    const vissblefunc = () => {
        seticonvissible(prev => !prev)
    }

    return (

        <div className={`w-full h-[500px] bg-fixed bg-[url('${bg1}')] bg-fixed`}
        >
            <div className='w-[450px] bg-blue-200 rounded-2xl shadow-lg p-6 mt-10 mx-auto relative' style={{ padding: "20px" }}>

                <label className='text-3xl font-bold text-center text-blue-600 mb-6'>User login</label><br />
                <div className="cont">

                    <div className="relative">

                        <label className='block text-black font-medium mb-1' style={{ padding: "10px" }}>User name :</label>
                        <div className="flex items-center bg-amber-50 rounded-2xl px-4">

                            <input type='email' placeholder='    Username' value={email} required
                                onChange={(e) => setemail(e.target.value)} className="flex-1 py-2 bg-transparent outline-none" ></input>

                            <FaRegUserCircle className="text-gray-700 text-xl" /><br />
                        </div>

                        <p className='text-red-600 text-sm mt-1'>{erroremail}</p><br />

                    </div>

                    <div className="relative">

                        <label className='ablock text-black font-medium mb-1'>Password :</label>

                        <div className="flex items-center bg-white rounded-2xl px-4">

                            <input type={iconvissible ? "text" : "password"} placeholder='  password' value={password} required
                                onChange={(e) => setpassword(e.target.value)} className="flex-1 py-2 bg-transparent outline-none"></input>

                            <span
                                className="text-blue-700 text-xl cursor-pointer"
                                onClick={() => vissblefunc()}
                            >
                                {iconvissible ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>

                        <p className='text-red-600 text-sm mt-1'>{errorpassword}</p><br />

                    </div>

                    <div className="flex justify-center gap-6 mt-4">

                        <button type='submit' onClick={submitfunc} className='bg-blue-700 text-white px-6 py-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold transition'>Submit</button>

                        <button type='cancel' className='bg-red-500 text-white px-6 py-2 rounded-2xl hover:bg-white hover:text-black hover:font-bold transition'>cancel</button>
                    </div>

                    <p className='text-center text-sm mt-4 text-black'>Don't have account create new account

                        <Link to="/Signup" className="text-yellow-600 font-semibold hover:underline">  Signup</Link></p>

                    <div className="flex justify-center mt-4 w-full h-[50px] items-center" >
                        <FaGoogle className="text-3xl text-white bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-800 transition" />
                    </div>
                    <label >Are you a vendor? Login</label>
                    <label > Are you a City Manager? Login</label>
                </div>
            </div >
        </div >
    )
}

export default Login