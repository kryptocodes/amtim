import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const App = ({File}) => {

    
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  return (
    <div className="img-fluid">
    <Document
    file={{ url: File}}
    className="img-fluid"

  >
    <Page pageNumber={1} />
  </Document>
    </div>
  );
}






export default App