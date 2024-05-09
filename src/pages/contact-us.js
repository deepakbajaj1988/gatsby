import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/Header"
import Footer from "../components/Footer"  
import ContactHeadsection from "../components/Contact-sections" 


const ContactUs = () => {   
  return (  
     <>     
    <Layout pageTitle="About Me"></Layout>
    <Header/>    
    <ContactHeadsection /> 
    <Footer/>
    </> 
  )
}

 
export default ContactUs




 
