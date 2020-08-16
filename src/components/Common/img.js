import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
 
const App = ({File}) => {
  const [numPages, setNumPages] = useState(null);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const Loading = () => (
    <div className="mt-5">
      <p className="lead">Loading</p>
    </div>
  )
 
  return (
    <div className="img-fluid">
      <Document
        file={`https://cors-anywhere.herokuapp.com/${File}`}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={Loading()}
        className="img-fluid"
      >
        <Page scale={1.0}  pageNumber={1} />
      </Document>
    </div>
  );
}






export default App