import React from 'react'

const Enquery = () => {
    return (
        <div className='h-130 bg-linear-to-r from-yellow-200 to-blue-400 ' style={{ display: "flex", justifyContent: "center" }}>
            <div className='animate-pulse text-center content-center'>

                <label className='text-[3.5rem] font-bold'> Get<span className='text-orange-500 '> 25% <br />Discount </span>on your <br />first purchase</label>

            </div>
            <form style={{ marginLeft: "25%", padding: "px", alignContent: "center" }} >
                <label style={{ alignItems: "center", fontSize: "32px", fontWeight: "700" }}>Enquery</label><br />
                <label style={{ paddingTop: "5px" }}>Name</label><br />
                <input className='bg-white' type="text" required placeholder='   Name' style={{ marginTop: "5px", backgroundColor: "white", width: "500px", height: "35px", borderRadius: "10px" }} /><br />
                <label style={{ marginTop: "15px" }}>Pnone number</label><br />
                <input className='bg-white' type="number" required placeholder='   Pnone number' style={{ backgroundColor: "white", width: "500px", height: "35px", borderRadius: "10px", marginTop: "5px" }} /><br />
                <label >Email</label><br />
                <input type="email" required placeholder='   Email address' className='bg-white' style={{ backgroundColor: "white", width: "500px", height: "35px", borderRadius: "10px", marginTop: "5px" }} /><br />
                <p >Your Message</p><input type="text" className='bg-white' placeholder='   Message' style={{ backgroundColor: "white", width: "500px", height: "110px", borderRadius: "10px", marginTop: "5px" }} /><br />
                <button style={{ marginTop: "30px", padding: "10px", borderRadius: "10px", cursor: "pointer", backgroundColor: "yellow", width: "100px" }}>Submit</button>
                <button style={{ marginLeft: "30px", marginTop: "30px", padding: "10px", borderRadius: "10px", cursor: "pointer", backgroundColor: "yellow", width: "100px" }}>Cancel</button>
            </form>
        </div >
    )
}

export default Enquery