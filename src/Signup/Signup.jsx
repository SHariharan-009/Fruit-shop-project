import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signup } from "../api/api"
import "./Signup.css"

const Signup = () => {
  const [name, setname] = useState("")
  const [mail, setmail] = useState("@gmail.com")
  const [password, setpassword] = useState("")
  const [gender, setgender] = useState("")

  console.log(name, mail, password, gender);

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
      full_name: name,
      password: password,
      email: mail,
      gender: gender
    }
    const response = await signup(data)
    if (response?.status == 200) {
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
    <div className='container' style={{ boxShadow: "0px 10px 20px" }}>
      <form onSubmit={checkfunc} >
        <label style={{ fontSize: "30px", color: "blue", alignItems: "center" }}>Signup</label><br />
        <label>Name :</label><input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} required /><br />
        {errorname ? (<><p style={{ color: "red" }}>Name required</p></>) : (<></>)}
        <label>mail :</label><input type="Email" value={mail} onChange={(e) => setmail(e.target.value)} required /><br />
        {errormail ? (<><p style={{ color: "red" }}>mail required</p></>) : (<></>)}
        <label>Password :</label><input type="text" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} required /><br />
        {errorpassword ? (<><p style={{ color: "red" }}>password required</p></>) : (<></>)}
        <label>Gender :</label><input type="text" value={gender} placeholder="Gender" onChange={(e) => setgender(e.target.value)} /><br />
        <button>Submit</button>  <button>cancel</button>
        <p> Already have an account? <Link to="/Login" style={{ textDecoration: "none" }}>Login</Link></p>
      </form>
    </div>
  )
}
export default Signup