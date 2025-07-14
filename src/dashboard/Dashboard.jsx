import React, { useEffect, useState } from 'react'
import { getvalue } from "../api/api"

const Dashboard = () => {
  const [data, setData] = useState()

  const runfunc = async () => {
    try {
      const reply = await getvalue()
      console.log("Reply", reply)
      setData(reply.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    runfunc()
  }, [])


  console.log("data", data)
  return (
    <div>
      <h2>{data?.full_name}</h2>
      <h2>{data?.email}</h2>
      <h2>{data?.gender}</h2>
    </div>
  )
}

export default Dashboard