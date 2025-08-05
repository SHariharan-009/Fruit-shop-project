import React from 'react'

const Enquery = () => {
    return (
        <div className='h-130 bg-linear-to-r from-yellow-200 to-blue-400 ' style={{ display: "flex", justifyContent: "center" }}>
            <div className='animate-pulse text-center content-center'>

                <label className='text-[3.5rem] font-bold'> Get<span className='text-orange-500 '> 25% <br />Discount </span>on your <br />first purchase</label>

            </div>
            <form className='ml-[25%] content-center' >
                <label className='items-center text-[32px] font-bold'>Enquery</label><br />

                <label style={{ paddingTop: "5px" }}>Name</label><br />

                <input className='bg-white w-[500px] mt-[5px] h-[35px] rounded-2xl' type="text" required placeholder='   Name' /><br />

                <label style={{ marginTop: "15px" }}>Pnone number</label><br />
                <input type="number" required placeholder='   Pnone number' className='bg-white w-[500px] mt-[5px] h-[35px] rounded-2xl' /><br />

                <label >Email</label><br />
                <input type="email" required placeholder='   Email address' className='bg-white w-[500px] mt-[5px] h-[35px] rounded-2xl' /><br />

                <p >Your Message</p><input type="text" className='bg-white w-[500px] mt-[5px] h-[110px] rounded-2xl' placeholder='   Message' /><br />

                <button style={{ padding: "10px" }} className='mt-[30px] rounded-2xl cursor-pointer bg-amber-300 w-[100px]'>Submit</button>

                <button style={{ padding: "10px", marginLeft: "30px", marginRight: "30px" }} className='rounded-2xl cursor-pointer bg-amber-300 w-[100px] hover:transition-colors'>Cancel</button>
            </form>
        </div >
    )
}

export default Enquery