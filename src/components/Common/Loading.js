import React from 'react'
import ReactLoading from 'react-loading';

const CSS = {
    margin: "auto",
    marginTop: "200px",
    height: "15%",
    width: "20vh",
}

const Loading = () => {
    return (
        <div>
              <ReactLoading 
                    style={CSS}
                    type={"bubbles"} 
                    color={"black"} />
        </div>
    )
}















export default Loading