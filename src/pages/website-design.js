import * as React from "react"
import Header from "../components/Header" 
import Footer from "../components/Footer"
import Layout from "../components/layout"
import WebdesignSections from "../components/website-design"


 const WebsiteDesign = () => {   
  return (  
     <>      
    <Layout pageTitle="Website Design"></Layout>     
    <Header/>  
    <WebdesignSections />       
    <Footer/>
    </> 
  )
}

 
 
export default WebsiteDesign
 
