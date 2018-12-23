import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
//import Typed from '../components/Typed'
import Profile from "../img/Darin.jpg"
import Checkout from '../components/Checkout'
import './animated-intro.css'

export default class IndexPage extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Layout>
        <section className="hero is-medium is-dark is-bold cd-intro">
          <div className="hero-body">
            <div className="container">
              <article className="media columns">
                <figure
                  className="media-left column is-offset-one-quarter is-one-quarter animated fadeInLeftBig">
                  <p className="image is-128x128">
                    <img src={Profile} alt="Darin in tie"/>
                  </p>
                </figure>
                <div className="media-content column is-one-half">
                  <div className="cd-intro-content mask content">
                    <h1 data-content="Hi I'm Darin">
                      <span>Hi, I'm Darin</span>
                    </h1>
                    <div className="action-wrapper">
                      <p>
                        <Link to="about" className="button is-info is-large">About Me</Link>
                        <Link to="contact" className="button is-link is-large">Contact Me</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns is-mobile is-centered">
                <div className="column is-two-thirds">
                  <h1>Welcome</h1>
                  <p>
                    I've been working in high-demand aviation environments since 2004. {" "}<Link to="/about">My journey</Link>{" "}
                    started as a CH-46 Seaknight (Phrog) Crew Chief after which I transtioned to the
                    V-22 Osprey in 2006 and decided to enter government civilian service in 2014.
                  </p>
                  <p>
                    In my ten years on active duty in the Marine Corps I achieved the following:
                  </p>
                  <ul>
                    <li>Weapons and Tactics Instructor</li>
                    <li>Night Systems Instructor</li>
                    <li>Crew Resource Management Instructor</li>
                    <li>
                      Naval Air Training & Operating Procedures Standardization Instructor
                    </li>
                    <li>Collateral Duty Inspector</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container is-widescreen"></div>
        </section>
        <section className="section">
          <div className="container is-widescreen">
            <div className="columns">
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-content">
                    <p className="title">
                      "Quotes from Twitter"
                    </p>
                    <p className="subtitle">
                      Author
                    </p>
                  </div>
                  <footer className="card-footer">
                    <p className="card-footer-item">
                      <span>
                        View on
                        <a href="https://twitter.com/darinlevesque">Twitter</a>
                      </span>
                    </p>
                    <p className="card-footer-item">
                      Share
                    </p>
                  </footer>
                </div>
              </div>
              <div className="column is-one-third">Donate
                <Checkout/>
              </div>
              <div className="columnis-one-third"></div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
