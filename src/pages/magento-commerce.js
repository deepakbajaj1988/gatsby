import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MagentoSections from "../components/magento-section"
  

const MagentoCommerce = () => {
  return (   
    <>       
    <Layout pageTitle="Our Work"></Layout>    
    <Header/>  
    <MagentoSections/> 
    <Footer/>
    </> 
 

  ) 
}  

export const Head = () => <title>Magento Commerce</title> 
export default MagentoCommerce