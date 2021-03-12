import React from 'react'
import Data from '../events.json'

const Events = () => {
    const Content = () => (
        <div>
        {Data.map((val,i) => 
        <div className="card p-2 mb-2" key={i}>
        <a href={`https://amrita.edu.in/${val.Link}`}><p>{val.Title}</p></a>
        </div>)}
        </div>
    )
    return (
        <div className="container">

        <Content/>
        </div>
    )
}










export default Events