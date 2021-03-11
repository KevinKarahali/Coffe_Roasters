/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

//import Header from "./header"

const Layout = ({ children }) => {
  //const data = useStaticQuery(graphql`
  //query SiteTitleQuery {
  //site {
  //siteMetadata {
  //title
  //}
  //}
  //}
  //`)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div>
        <main>{children}</main>
        <footer className="footer ">
          <div className="footer_info contenedor">
            <p className="no-margin  footer_p">
              Siguenos en nuestro
              <a
                className="footer_link"
                href="https://www.instagram.com/lacafeteriacoffeeroasters/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Instagram
              </a>
            </p>
            <span className="no-margin  span_footer">&copy; Coanca 2021</span>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
