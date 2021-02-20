import React,{ useState } from 'react';
import { Modal } from 'react-responsive-modal';
import Img from './img'

const CSS = {
  width:"100%"
}

const ModalBox = ({File}) => {
  const [open,setOpen] = useState(false)
    return (
      <div className="mx-auto container">
        <button className="btn btn-warning" style={{backgroundColor:"#F3B63A"}} onClick={() => setOpen(true)}>View</button>
        <Modal styles={{overflowY:"unset !important"}}  open={open}  onClose={() => setOpen(false)} center>
          <div>
          {Img({File:File})}
          </div>
        </Modal>
      </div>
    )
}


export default ModalBox