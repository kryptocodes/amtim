import React,{ useState, useEffect }  from 'react'
import ModalBox from '../Common/modal'
import firebase from '../../api/config'
import Loading from '../Common/Loading'
import Filtered from './filtered'

const Card = () => {
    const [Data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [filter,setFilter] = useState(false)

    useEffect(() => {
        const tim = firebase.database().ref("tim")
        tim.on('value',(snapshot) => {
            setData(snapshot.val())
            setLoading(false)
        })
    },[])

    const Filters = () => (
        <div className="d-flex justify-content-center mt-2">
            <button onClick={() => setFilter(false)} type="button" className="btn btn-outline-primary mr-2">All</button>
            <button onClick={() => setFilter(true)} type="button" className="btn btn-outline-secondary">=</button>
        </div>
    )

    return (
        <React.Fragment>
        {loading ? Loading()  :
        <React.Fragment>
        
        {filter ? Filtered() : 
        <div className="row container mx-auto mt-2 pb-5 d-flex justify-content-center">
        {Data && Data.map((dept) => (
        <div className="col-md-3 mt-5 mr-2 rounded">
        <div className="card">
            <span className="card-body">
            <strong>Year:<p className="lead">{dept.year}</p></strong>
            <p style={{fontFamily: "Short Stack", fontStyle: "cursive", fontSize:"25px"}} className="text-center">{dept.class}</p>
            </span>
            <span className="card-footer d-flex justify-content-around">
                <ModalBox File={dept.url} />
                <button className="btn btn-info"><a className="text-white" style={{textDecoration:"none"}} href={dept.url} download>Download</a></button>
            </span>
        </div>
        </div>
        ))}
        </div>}
        </React.Fragment>}
        </React.Fragment>
    )
}










export default Card