import React,{ useState, useEffect }  from 'react'
import ModalBox from '../Common/modal'
import firebase from '../../api/config'
import Loading from '../Common/Loading'
import Filtered from './filtered'
import disclaimer from '../Common/disclaimer'

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

    const DeptSelector = () => (
        <div className="d-flex justify-content-center mt-2">
        <select className="form-control-l" id="select">
                <option value="value">value</option>
                <option value="hello">hello</option>
                <option value="hello">hello</option>
                <option value="hello">hello</option>
            </select>
        </div>
    )

    return (
        <React.Fragment>
        {loading ? Loading()  :
        <React.Fragment>
        {filter ? Filtered() : 
        <div className="row container mx-auto mt-2 d-flex justify-content-center">
        {Data && Data.map((dept,key) => (
        <div className="col-md-3 mt-5 mr-2 rounded">
        <div key={key} className="card">
            <span className="card-body">
            <div>
            <strong className="float-left">Year<p className="lead text-center">{dept.year}</p></strong>
            <strong className="float-right">Sem<p className="lead text-center">{dept.sem}</p></strong>
            </div>
            <p className="text-center Class"> {dept.class}</p>
            </span>
            <span className="card-footer d-flex justify-content-around">
                <ModalBox File={dept.url} />
                <button className="btn btn-info"><a className="text-white" style={{textDecoration:"none"}} href={dept.url} download>Download</a></button>
            </span>
        </div>
        </div>
        ))}
        {disclaimer()}
        </div>}
        </React.Fragment>}
      
        </React.Fragment>
    )
}










export default Card