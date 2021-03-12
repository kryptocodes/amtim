import React,{ useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import App from './PDFReader';

import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DownloadLink = ({File}) => {
  document.location.href = File
}


const ModalBox = ({File}) => {
  const [open,setOpen] = useState(false)
    return (
      <Style>
      <ToastContainer position="bottom-center"/>
      <div className="mx-auto container d-flex justify-content-center align-content-center">
        <button className="btn41-43 btn-42"  onClick={() => File.length === 0 ? toast.error("Select all box")  : File == "No Data" ? toast.warning("Not Available") : setOpen(true)}>View</button>
        <button className="btn41-43 btn-42" onClick={() => File.length === 0 ? toast.error("Select all box")  : File == "No Data" ? toast.warning("Not Available") :  DownloadLink({File})}>Download</button>
        <Modal styles={{overflowY:"unset !important"}}  open={open}  onClose={() => setOpen(false)} center>
          <div>
            <App File={File}/>
          </div>
        </Modal>
      </div>
      </Style>
    )
}


const Style = styled.div`
a {
  color: white;
}
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

export default ModalBox