import React from 'react'
import Header from './head'
import NavBar from './navBar'


const Wrapper = ({children}) => {
    return (
            <div>
            <Header/>
            <NavBar/>
            <div>
                {children}
            </div>
            </div>
    )
}












export default Wrapper