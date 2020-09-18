import React from "react"
import { Helmet } from "react-helmet"

const Tags = () => {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en"/>
          <title>AmTim</title>
          <link rel="canonical" href="https://amtim.netlify.app/" />
          <meta name="description" content="AmTim is an Simple PWA app to view Timetable"/>
          <meta name="keywords" content="amTim"/>
          <meta name="author" content="srivatsan"/>
        </Helmet>
      </div>
    )
  }


  export default Tags