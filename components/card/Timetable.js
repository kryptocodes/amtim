import React,{ useState } from 'react'
import Select from 'react-select'
import Data from '../data.json'

import styled from '@emotion/styled'
import ModalBox from './PDFview'
const Timetable = () => {
    const [selected,setSelected] = useState({})
    const [Semester,setSemester] = useState({})
    const [Sec,setSec] = useState({})

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
  value:8,label:8
},{
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
                : (Semester == 8 || Semester == 6) ? Data.filter(item => item.dept === selected && item.sem == Semester)  : Data.filter(item => item.dept === selected && item.sem == Semester && item.sec === Sec) ;
const Value = Filter.map((val) => val.uri)

    return (
      <Style>
        <div className="mx-auto container p-5">
        <div>
        <h5>Select Dept</h5>
        <Select
        id="dept"
        value={selected.value}
        isSearchable={false}
        onChange={v => setSelected(v.value)}  
        styles={selectStyles}
        options={options} 
       />
       </div>
       <div>
       <h5>Select Semester</h5>
       <Select 
        id="sem"
        value={Semester.value}
        isSearchable={false}
        styles={selectStyles}
        onChange={v => setSemester(v.value)}  
        options={sem} 
       />
       </div>
       {(selected === "CSE" && (Semester != 8 && Semester!= 6 ) ) ?
       <div>
       <h5>Select Section</h5>
       <Select 
       id="sec"
       value={Sec.value}
       isSearchable={false}
       styles={selectStyles}
       onChange={v => setSec(v.value)}  
       options={sec} 
      /></div> : false }
        
        </div>
        <div>
        <ModalBox File={Value}/>
        </div>
        </Style>
    )
}


const Style = styled.div`
h5 {
  padding-top:2rem;
  text-align: center;
}
`







export default Timetable