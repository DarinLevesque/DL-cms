import React from 'react'
import Layout from '../components/Layout'
import 404 from '../img/404.png'

const NotFoundPage = () => (
  <Layout>
    <div className="columns">
      <div className="column">
        <img src={404} />
      </div>
      <div className="column">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
