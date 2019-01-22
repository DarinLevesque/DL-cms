import React from 'react'
import Layout from '../components/Layout'
import "./404.css"

const NotFoundPage = () => (
  <Layout>
    <div className="columns">
      <div className="column">
        <div class="error">404</div>
        <br /><br />
        <span class="info">File not found</span>
      </div>
      <div className="column">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
