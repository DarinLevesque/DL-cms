import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer';
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>Digital Resume for Darin Levesque</title>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.5.0/js/all.js"
        integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://unpkg.com/bulmaswatch/lux/bulmaswatch.min.css" />
    </Helmet>
  
    <div id="outer-container">
      <Navbar />
      <main className="site" id="page-wrap">
        <div className="site-content">
          <Header />
          <div>{children}</div>
        </div>
        <Footer />
      </main>
    </div>
  </div>
)

export default TemplateWrapper
