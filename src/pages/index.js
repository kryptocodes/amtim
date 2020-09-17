import React from "react"
import Tags from "../components/Common/tags"
import Nav from "../components/Nav"
import Card from "../components/Card"
import Footer from "../components/footer"
import "../styles/bootstrap.min.css"
import "../styles/fonts.css"
import "../styles/global.scss"

const Home = () => {
  return (
    <React.Fragment>
    {Tags()}
    {Nav()}
    {Card()}
    {Footer()}
  </React.Fragment>
  )
}











export default Home