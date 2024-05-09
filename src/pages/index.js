import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby";
import Header from "../components/Header"
import Footer from "../components/Footer"
import HomeSlider from "../components/Home-slider"
import HowWeAre from "../components/Home-how-we-are"
import Hometabber from "../components/Home-tabber"
import OurWork from "../components/Our-work"
import Homelogos from "../components/Home-logos"
import HomeVedio from "../components/Home-vedio"
import HomeTestimonials from "../components/Home-testimonials"
import HomeBlogs from "../components/Home-blogs"
import FooterForm from "../components/Footer-form"
import Hometimeline from "../components/Home-timeline"
import Layout from "../components/layout";

 
const IndexPage = () => {
 
  return (
    <> 
     <Layout pageTitle="Home"></Layout>
      <Header />
      <HomeSlider />
      <HowWeAre />
      <Hometabber />  
      <OurWork />    
      <Homelogos  />
      <Hometimeline />
      <HomeVedio />
      <HomeTestimonials />
      <HomeBlogs />      
      <FooterForm />
      <Footer />
     
    </>
  );
};

export default IndexPage;

 
