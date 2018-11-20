import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout'
//import Typed from '../components/Typed'
import Profile from "../img/Darin.jpg"
import Checkout from '../components/Checkout'

const quote = {
  1R74LZbB7EHqfkEKzk7x7aUYxLTfDIkcIgVe2Hfp_u7E
  $.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/1R74LZbB7EHqfkEKzk7x7aUYxLTfDIkcIgVe2Hfp_u7E/od6/public/values?alt=json", function(data) {
  //first row "title" column
  console.log(data.feed.entry[0]['gsx$title']['$t']);
});
}

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="hero is-medium is-dark is-bold">
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
                  <h1 className="title">Who am I?</h1>
                  <h2 className="subtitle">{{ quote }}
                    {/*<Typed
                      strings={["Hi, my name is Darin.", "I'm a Test Resource Manager for NAVAIR"]}
                      startDelay={2500}
                      nextStringDelay={[2500, 2000]}
                      lifeLike={true}
                      cursorChar="_"
                      breakLines={false}
                    autoStart={false} />*/}
                  </h2>
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
