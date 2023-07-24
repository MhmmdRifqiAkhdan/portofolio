import React from "react"
import Header from "./component/Head/Header"
import Home from "./component/Hero/Home"
import Resume from "./component/Resume/Resume"
import Project from "./component/Project/Project"
import Footer from "./component/Footer"
// import Resume from "./component/Resume"

import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Resume />
      <Project /> 
      <Footer />
    </>
  )
}

export default App
