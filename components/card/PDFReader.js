import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import styled from '@emotion/styled'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const App = ({File}) => {

    const [pageNumber, setPageNumber] = useState(1);

    const Loading = () => (
      <div className="">
        <p className="mb-5 pb-5 pl-5 pr-5">Loading</p>
      </div>
    )
  
  return (
    <Style>
    <div className="img-fluid overflow">
    <Document
    file={{ url: File}}
    onLoadError={console.error}
    loading={Loading()}
    className="img-fluid"

  >
    <Page pageNumber={1} />
  </Document>
    </div>
    </Style>
  );
}

const Style = styled.div`
 .overflow {
   overflow-x: hidden;
   overflow-y: hidden;
 }
`




export default App