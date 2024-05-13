import * as React from "react"
import Header from "../components/Header" 
import Footer from "../components/Footer"
import Layout from "../components/layout"
import Catelliwork from "../components/catelli-work"

const OurWork = () => {   
  return (  
     <>       
   <Layout pageTitle="Catelli Work"></Layout>    
    <Header/>   
    <Catelliwork/> 
    <Footer/>
    </> 
  )
}

export default OurWork

export const Head = () => <title>Our Work</title> 
 
 





