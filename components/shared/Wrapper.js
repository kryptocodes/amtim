import React from 'react'
import NavBar from './navBar'


const Wrapper = ({children}) => {
    return (
            <div>
            <NavBar/>
            <div>
                {children}
            </div>
            </div>
    )
}












export default Wrapper