/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

// Styles
import "../fonts/fonts.css" 

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
    <div className="body">
      <a className="skip-link screen-reader-text" href="#primary">
        Skip to the content
      </a>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <main >
      <div role="main" className="main">
        {children}
        </div>
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </>
  )
}

export default Layout
