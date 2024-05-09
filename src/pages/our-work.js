import * as React from "react"
import Header from "../components/Header" 
import Footer from "../components/Footer"
import Layout from "../components/layout"
import WorksSections from "../components/work-sections"

 

 
const OurWork = () => {   
  return (  
     <>       
   <Layout pageTitle="Our Work"></Layout>    
    <Header/>  
    <WorksSections/>
    <Footer/>
    </> 
  )
}

export default OurWork

export const Head = () => <title>Our Work</title> 
 
 





