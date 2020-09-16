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
        <Page scale={1.0}  pageNumber={1} />
      </Document>
    </div>
  );
}






export default App