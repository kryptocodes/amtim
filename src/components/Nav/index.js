import React from 'react'
import DarkToggle from './dark'

export default function index() {
    return (
        <div  className="navbar bg-dark">
            <p style={{fontFamily: "Rock Salt", fontStyle: "cursive", fontSize:"20px"}} className="ml-4 mt-2 text-white">Time Table</p>
            <div className="mr-4">{DarkToggle()}</div>
         </div>
    )
}
