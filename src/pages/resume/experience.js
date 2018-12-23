import React from "react";
import Layout from '../../components/Layout'
import TimeAgo from 'react-timeago'
import './react-vertical-timeline-component-style.module.css'

// images
import EGA from '../../img/EGA32x32.png'
import NAVAIR from '../../img/NAVAIR32x32.png'
import CH53K from '../../img/53K32x32.png'

function VerticalTimeline( element ) {
  this.element = element;
  this.blocks = this.element.getElementsByClassName("js-cd-block");
  this.images = this.element.getElementsByClassName("js-cd-img");
  this.contents = this.element.getElementsByClassName("js-cd-content");
  this.offset = 0.8;
  this.hideBlocks();
};

VerticalTimeline.prototype.hideBlocks = function() {
  //hide timeline blocks which are outside the viewport
  if ( !"classList" in document.documentElement ) {
    return;
  }
  var self = this;
  for( var i = 0; i < this.blocks.length; i++) {
    (function(i){
      if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
        self.images[i].classList.add("cd-is-hidden"); 
        self.contents[i].classList.add("cd-is-hidden"); 
      }
    })(i);
  }
};

VerticalTimeline.prototype.showBlocks = function() {
  if ( ! "classList" in document.documentElement ) {
    return;
  }
  var self = this;
  for( var i = 0; i < this.blocks.length; i++) {
    (function(i){
      if( self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
        // add bounce-in animation
        self.images[i].classList.add("cd-timeline__img--bounce-in");
        self.contents[i].classList.add("cd-timeline__content--bounce-in");
        self.images[i].classList.remove("cd-is-hidden");
        self.contents[i].classList.remove("cd-is-hidden");
      }
    })(i);
  }
};

var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
  verticalTimelinesArray = [],
  scrolling = false;
if( verticalTimelines.length > 0 ) {
  for( var i = 0; i < verticalTimelines.length; i++) {
    (function(i){
      verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
    })(i);
  }

  //show timeline blocks on scrolling
  window.addEventListener("scroll", function(event) {
    if( !scrolling ) {
      scrolling = true;
      (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
    }
  });
}

function checkTimelineScroll() {
  verticalTimelinesArray.forEach(function(timeline){
    timeline.showBlocks();
  });
  scrolling = false;
};

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