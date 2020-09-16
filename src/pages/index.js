import React from "react"
import Tags from "../components/Common/tags"
import Nav from "../components/Nav"
import Card from "../components/Card"
import Footer from "../components/footer"
import "../styles/bootstrap.min.css"
import "../styles/fonts.css"
import "../styles/global.css"





const Home = () => {
  return (
    <React.Fragment>
    {Tags()}
    
    <div className={"bg-dark"}>
    {Nav()}
    {Card()}
    </div>
    {Footer()}
  </React.Fragment>
  )
}











export default Home