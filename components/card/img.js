import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

 
const Img = ({File}) => {
  const [numPages, setNumPages] = useState(null);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const loading = () => (
    <div className="mb-5 pb-5 pl-5 pr-5">
    <p style={{"color":"black"}}><strong>Note:</strong>Initial pdf loading might be slow due to cpu limitations</p>
    </div>
  )
 
  return (
    <div className="img-fluid">
      {console.log(File)}
      <Document
        file={File}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={loading()}
        className="img-fluid"
      >
        <Page className="pdf" pageNumber={1} />
      </Document>
    </div>
  );
}






export default Img