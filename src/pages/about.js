import * as React from "react"
import Header from "../components/Header" 
import Footer from "../components/Footer"
import Layout from "../components/layout"
import AboutSections from "../components/about-sections"
 
const AboutPage = () => {   
  return (  
     <>    
    <Layout pageTitle="About Kinex"></Layout>    
    <Header/>  
    <AboutSections/>
    <Footer/>
    </>
  )
}
 
export default AboutPage
 
