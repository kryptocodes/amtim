import React, { useState } from 'react';
import Loading from './Loading'
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
 
const App = ({File}) => {
  const [numPages, setNumPages] = useState(null);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const loading = () => (
    <div className="mb-5 pb-5 pl-5 pr-5">
    {Loading()}
    <p style={{"color":"black"}}><strong>Note:</strong>Initial pdf loading might be slow due to cpu limitations</p>
    </div>
  )
 
  return (
    <div className="img-fluid">
      <Document
        file={`https://cors-anywhere.herokuapp.com/${File}`}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={loading()}
        className="img-fluid"
      >
        <Page className="pdf" pageNumber={1} />
      </Document>
    </div>
  );
}






export default App