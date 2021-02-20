import React,{ useState } from 'react'
import Select from 'react-select'
import Data from '../data.json'

import styled from '@emotion/styled'
import ModalBox from './modal'
const Timetable = () => {
    const [selected,setSelected] = useState({})
    const [Semester,setSemester] = useState({})
    const [Sec,setSec] = useState({})
    const [data, setData] = useState({})


const options = [{
  value:"CSE",label:"CSE"
},
{
value:"ME",label:"ME"
},
{
value:"CE",label:"CE"
},{
  value:"ECE",label:"ECE"
},
{
value:"EEE",label:"EEE"
}]

const sem = [{
  value:6,label:6
},
{
value:4,label:4
},
{
value:1,label:1
}]

const sec = [{
  value:"A",label:"A"
},
{
value:"B",label:"B"
}]
const selectStyles = { menu: styles => ({ ...styles, zIndex: 999 }) };

const Filter = selected !== "CSE" ?  Data.filter(item => item.dept === selected && item.sem == Semester)
                : Data.filter(item => item.dept === selected && item.sem == Semester && item.sec === Sec) ;
const Value = Filter.map((val) => val.uri)

console.log(Filter)
    return (
      <Style>
        <div>
        <Select 
        id="dept"
        value={selected.value}
        isSearchable={false}
        onChange={v => setSelected(v.value)}  
        styles={selectStyles}
        options={options} 
       />
       <Select 
        id="sem"
        value={Semester.value}
        isSearchable={false}
        styles={selectStyles}
        onChange={v => setSemester(v.value)}  
        options={sem} 
       />
       {selected === "CSE" ? 
       <Select 
       id="sec"
       value={Sec.value}
       isSearchable={false}
       styles={selectStyles}
       onChange={v => setSec(v.value)}  
       options={sec} 
      />: false }
        
        </div>
        <div>
          <a className="btn41-43 btn-42" href={Value}>View</a>
          <a className="btn41-43 btn-42" href={Value}>Download</a>
        </div>
        <ModalBox File="../../S6_CSE.pdf"/>
        </Style>
    )
}


const Style = styled.div`
.btn41-43 {
  padding: 10px 25px;
  font-weight: 500;
  background: black;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.btn-42 {
  border: 2px solid rgb(255, 255, 255);
  z-index: 1;
  color: white;
}

.btn-42:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: rgb(255, 255, 255);
  transition: all 0.3s ease;
}

.btn-42:hover {
  color: rgb(0, 0, 0);
}

.btn-42:hover:after {
  top: 0;
  height: 100%;
}

.btn-42:active {
  top: 2px;
}
`







export default Timetable