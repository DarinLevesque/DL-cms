import React from "react";
import Layout from '../../components/Layout'
import TimeAgo from 'react-timeago'

const Experience = () => {
  return (
    <Layout>
      <section className="section columns">
        <div className="column">
          <p>Test Resource Manager for NAVAIR hired
            <TimeAgo date="Sep 30, 2015"/></p>
        </div>
      </section>
      <div className="timeline is-centered">
        <header className="timeline-header">
          <span className="tag is-medium is-primary">Present</span>
        </header>
        <div className="timeline-item is-primary">
          <div className="timeline-marker is-primary"></div>
          <div className="timeline-content">
            <p className="heading">September 2015</p>
            <p>Hired into Government service as a Test Resource Manager <TimeAgo date="Sep 30, 2015"/>.</p>
          </div>
        </div>
        <div className="timeline-item is-warning">
          <div className="timeline-marker is-warning is-image is-32x32">
            <img src="https://bulma.io/images/placeholders/32x32.png"/>
          </div>
          <div className="timeline-content">
            <p className="heading">February 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-primary">2017</span>
        </header>
        <div className="timeline-item is-danger">
          <div className="timeline-marker is-danger is-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading">January 2004</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-primary">2017</span>
        </header>
        <div className="timeline-item">
          <div className="timeline-marker is-danger is-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading">March 2006</p>
            <p>Transitioned to V-22 Osprey</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker is-danger is-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading">Iraq Deployment</p>
            <p>HMM-266 CH-46E deployment to Al Asad</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-primary">2005</span>
        </header>
        <div className="timeline-item">
          <div className="timeline-marker is-danger is-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading">January 2004</p>
            <p>Joined Marine Corps as a CH-46E Crew Chief</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-medium is-primary">2004</span>
        </header>
      </div>
    </Layout>
  );
};

export default Experience
