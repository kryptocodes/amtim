import React,{ useState }  from 'react'
import Data from '../../api/index.json'
import ModalBox from '../Common/modal'

const Card = () => {
    return (
        <React.Fragment>
        <div className="row container mx-auto mt-2 pb-5 d-flex justify-content-center">
        {Data && Data.map((dept,index) => (
        <div key={index} className="col-md-3 mt-5 mr-2 rounded">
        <div className="card">
            <span className="card-body">
            <strong>Year:<p className="lead">{dept.year}</p></strong>
            <p style={{fontFamily: "Short Stack", fontStyle: "cursive", fontSize:"5vh"}} className="text-center">{dept.class}</p>
            </span>
            <span className="card-footer d-flex justify-content-around">
                {ModalBox({File:dept.url})}
                <button className="btn btn-info"><a className="text-white" style={{textDecoration:"none"}} href={dept.url} download>Download</a></button>
            </span>
        </div>
        </div>
        ))}
        </div>
        </React.Fragment>
    )
}










export default Card