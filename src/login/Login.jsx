import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login } from "../api/api"
import { FaEye, FaEyeSlash, FaRegUserCircle } from "react-icons/fa";
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

        <div
            style={{
                width: "100%",
                height: "550px",
                backgroundImage: `url(${bg1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                marginTop: "0px",
                display: "flex",
                alignItem: "center"
            }}>
            <div className='login' style={{}}>

                <label className='heading'>User login</label><br />
                <div className="cont">
                    <label>User name :</label><input type='email' placeholder='    Username' value={email} required
                        onChange={(e) => setemail(e.target.value)} ></input><span style={{ color: "black", padding: "5px", fontSize: "20px", marginRight: "50px" }}><FaRegUserCircle /></span><br />
                    <p className='err' style={{ color: "red", fontSize: "12px" }}>{erroremail}</p><br />
                    <label>Password :</label><input type={iconvissible ? "text" : "password"} placeholder='  password' value={password} required
                        onChange={(e) => setpassword(e.target.value)}></input>
                    <span onClick={() => vissblefunc()} style={{ fontSize: "20px", color: "blue", marginRight: "0px", marginLeft: "340px", marginTop: "50px", marginBottom: "0px" }}> {iconvissible ? <FaEye /> : <FaEyeSlash />}</span>
                    <p className='err'>{errorpassword}</p><br />
                </div>
                <button type='submit' onClick={submitfunc}>Submit</button>
                <button type='cancel'>cancel</button>
                <p style={{ marginLeft: "15%", padding: "10px", color: "white" }}>Don't have account create new account <Link to="/Signup" style={{ color: "yellow", textDecoration: "none" }}>Signup</Link></p>
            </div>
        </div >
    )
}

export default Login