import * as React from "react"
import Layout from "../components/layout";
import Header from "../components/Header"
import Footer from "../components/Footer"  

const blog = () => {
  return (
    <>
    <Header/> 
    <Layout pageTitle="blog">
        Hi this is blog pages
    </Layout>
    <Footer/>
    </>
  )
} 

export default blog 
