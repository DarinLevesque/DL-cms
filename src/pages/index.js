import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout'
//import Typed from '../components/Typed'
import Profile from "../img/Darin.jpg"
import Checkout from '../components/Checkout'

const styles = {
    cd - headline.rotate - 1. cd - words - wrapper {
    display: inline - block;
    perspective: 300 px;
  }.cd - headline.rotate - 1 b {
    opacity: 0;
    transform - origin: 50 % 100 %;
    transform: rotateX(180 deg);
    display: inline - block;
    position: absolute;
    left: 0;
    top: 0;
  }

  cd - headline.rotate - 1 b.is - visible {
    position: relative;
    opacity: 1;
    transform: rotateX(0 deg);
    animation: cd - rotate - 1 - in 1.2 s;
  }.cd - headline.rotate - 1 b.is - hidden {
    transform: rotateX(180 deg);
    animation: cd - rotate - 1 - out 1.2 s;
  }
  @keyframes cd - rotate - 1 - in {
    0 % {
      transform: rotateX(180 deg);
      opacity: 0;
    }
    35 % {
      transform: rotateX(120 deg);
      opacity: 0;
    }
    65 % {
      opacity: 0;
    }
    100 % {
      transform: rotateX(360 deg);
      opacity: 1;
    }
  }

  @keyframes cd - rotate - 1 - out {
    0 % {
      transform: rotateX(0 deg);
      opacity: 1;
    }
    35 % {
      transform: rotateX(-40 deg);
      opacity: 1;
    }
    65 % {
      opacity: 0;
    }
    100 % {
      transform: rotateX(180 deg);
      opacity: 0;
    }
  }
}

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout styles={styles}>
        <section class="cd-intro">
          <h1 class="cd-headline rotate-1">
            <span>My favourite food is</span>
            <span class="cd-words-wrapper">
              <b class="is-visible">pizza</b>
              <b>sushi</b>
              <b>steak</b>
            </span>
          </h1>
        </section>
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
                  <h2 className="subtitle">
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
