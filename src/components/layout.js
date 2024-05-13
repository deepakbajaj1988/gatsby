import * as React from "react"; 
import { Link, useStaticQuery, graphql } from "gatsby"; 

const Layout = ({ pageTitle, children }) => {  
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata { 
        title
      }
    }
  }
`)

  return (
    <div>     
      <main>
        <title>{pageTitle} | {data.site.siteMetadata.title} </title>       
        {children}
      </main> 
    </div>
  )
}

export default Layout