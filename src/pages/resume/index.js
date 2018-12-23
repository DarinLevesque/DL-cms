import React from "react";
import Layout from '../../components/Layout'
import Education from '../../img/bookshelf.png'
import Experience from '../../img/experience.jpg'

export default class ResumePage extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Layout>
        <div className="container">
          <section className="section columns">
            <div className="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={Experience} alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <i className="fas fa-3x fa-wrench"/>
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Experience</p>
                      <p class="subtitle is-6">Photo by Byron Sterk on Unsplash</p>
                    </div>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                    mauris.
                    <a>@bulmaio</a>.
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br/>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={Education} alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <i className="fas fa-3x fa-user-graduate"/>
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Education</p>
                      <p class="subtitle is-6">Photo by Clem Onojeghuo on Unsplash</p>
                    </div>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                    mauris.
                    <a>@bulmaio</a>.
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br/>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <i className="fas fa-3x fa-table-tennis"/>
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Skills</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                    mauris.
                    <a>@bulmaio</a>.
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br/>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
