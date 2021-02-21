import React,{ useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import App from './PDFReader';

const CSS = {
  width:"100%"
}

const ModalBox = ({File}) => {
  const [open,setOpen] = useState(false)
    return (
      <div className="mx-auto container">
        <button className="btn41-43 btn-42" onClick={() => setOpen(true)}>View</button>
        <Modal styles={{overflowY:"unset !important"}}  open={open}  onClose={() => setOpen(false)} center>
          <div>
            <App File={File}/>
          </div>
        </Modal>
      </div>
    )
}


export default ModalBox