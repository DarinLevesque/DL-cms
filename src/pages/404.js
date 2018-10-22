import React from 'react'
import Layout from '../components/Layout'
import FourOFour from "../img/Darin.jpg"

const NotFoundPage = () => (
  <Layout>
    <div className="columns">
      <div className="column">
        <img src={FourOFour} alt="404 error image" />
      </div>
      <div className="column">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
