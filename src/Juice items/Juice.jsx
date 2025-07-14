import React from 'react'
import { json } from '../data/data'
// import "Juice.css"

const Juice = () => {
  console.log(json, 'json')

  return (
    <div>
      <div className='juicecontainer1'>
        <div className="juice1"></div>
        <div className="juice2"></div>
        <div className="juice3"></div>
      </div>
      <div className='juicecontainer2'>
        <h1>juice</h1>
        <div className="juice1"></div>
        <div className="juice2"></div>
        <div className="juice3"></div>
      </div>
    </div>
  )
}

export default Juice