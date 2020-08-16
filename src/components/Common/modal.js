import React,{ useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import App from './img';

const CSS = {
  overflowY:"auto"
}

const ModalBox = ({File}) => {
  const [open,setOpen] = useState(false)
    return (
      <div className="mx-auto container">
        <button className="btn btn-warning" onClick={() => setOpen(true)}>View</button>
        <Modal styles={{overflowY:"unset !important"}}  open={open}  onClose={() => setOpen(false)} center>
          <h2></h2>
          <div>
          {App({File:File})}
          </div>
        </Modal>
      </div>
    )
}


export default ModalBox