import React from "react";
import Layout from '../../components/Layout'
import TimeAgo from 'react-timeago'
import './react-vertical-timeline-component-style.module.css'

// images
import EGA from '../../img/EGA32x32.png'
import NAVAIR from '../../img/NAVAIR32x32.png'
import CH53K from '../../img/53K32x32.png'

const Experience = () => {
  return (
    <Layout>
      <section className="section columns">
        <div className="column">
          <p>Test Resource Manager for NAVAIR hired{" "}
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
            <p>Hired into Government service as a Test Resource Manager
              <TimeAgo date="Sep 30, 2015"/>.</p>
          </div>
        </div>
        <div className="timeline-item is-warning">
          <div className="timeline-marker is-warning is-image is-32x32">
            <img src={EGA}/>
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
          <div className="timeline-marker is-image is-32x32">
            <img src={EGA}/>
          </div>
          <div className="timeline-content">
            <p className="heading">January 2004</p>
            <p>imeline coTntent - Can include any HTML element</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-primary">2008</span>
        </header>
        <div className="timeline-item">
          <div className="timeline-marker is-image is-32x32">
            <img src={EGA}/>
          </div>
          <div className="timeline-content">
            <p className="heading">March 2007</p>
            <p>Transitioned to MV-22 Osprey's & stood up VMM-266</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker is-image is-32x32">
            <img src={EGA}/>
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
          <div className="timeline-marker is-image is-32x32">
            <img src={EGA}/>
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
      <section ClassName="cd-timeline js-cd-timeline">
        <div ClassName="cd-timeline__container">
          <div ClassName="cd-timeline__block js-cd-block">
            <div ClassName="cd-timeline__img cd-timeline__img--picture js-cd-img">
              <img src={EGA} alt="Picture"/>
            </div>
            <div ClassName="cd-timeline__content js-cd-content">
              <h2>Title of section 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad
                debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
              <a href="#0" ClassName="cd-timeline__read-more">Read more</a>
              <span ClassName="cd-timeline__date">Jan 14</span>
            </div>
          </div>
          <div ClassName="cd-timeline__block js-cd-block">
            <div ClassName="cd-timeline__img cd-timeline__img--picture js-cd-img">
              <img src={EGA} alt="Picture"/>
            </div>
            <div ClassName="cd-timeline__content js-cd-content">
              <h2>Title of section 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad
                debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
              <a href="#0" ClassName="cd-timeline__read-more">Read more</a>
              <span ClassName="cd-timeline__date">Jan 14</span>
            </div>
          </div>
          <div className="cd-timeline__block js-cd-block"></div>
          <div className="cd-timeline__img cd-timeline__img--picture js-cd-img">
            <img src={EGA} alt="Picture"/>
          </div>
          <div className="cd-timeline__content js-cd-content">
            <h2>Title of section 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
              dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad
              debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
            <a href="#0" className="cd-timeline__read-more">Read more</a>
            <span className="cd-timeline__date">Jan 14</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience