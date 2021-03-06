import React from "react";
import Layout from '../../components/Layout'

const Education = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">Hello World</p>
                <p className="subtitle">What is up?</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">Foo</p>
                <p className="subtitle">Bar</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">Third column</p>
                <p className="subtitle">With some content</p>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                    eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam
                    finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child box">
                    <p className="title">Vertical tiles</p>
                    <p className="subtitle">Top box</p>
                    <progress className="progress is-primary" value="15" max="100">15%</progress>
                    <progress className="progress is-link" value="30" max="100">30%</progress>
                    <progress className="progress is-info" value="45" max="100">45%</progress>
                    <progress className="progress is-success" value="60" max="100">60%</progress>
                    <progress className="progress is-warning" value="75" max="100">75%</progress>
                    <progress className="progress is-danger" value="90" max="100">90%</progress>
                  </article>
                  <article className="tile is-child box">
                    <p className="title">Vertical tiles</p>
                    <p className="subtitle">Bottom box</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">Middle box</p>
                    <p className="subtitle">With an image</p>
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/640x480.png"/>
                    </figure>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Wide column</p>
                  <p className="subtitle">Aligned with the right column</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                      eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam
                      finibus odio quis feugiat facilisis.</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <div className="content">
                  <p className="title">Tall column</p>
                  <p className="subtitle">With even more content</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
                      erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                      consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                      eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                    <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a
                      sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor
                      lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi,
                      fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus
                      dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                    <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae
                      congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque
                      sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                      lacus, quis faucibus libero. Quisque non semper leo.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">Side column</p>
                <p className="subtitle">With some content</p>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                    eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam
                    finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent is-8">
              <article className="tile is-child box">
                <p className="title">Main column</p>
                <p className="subtitle">With some content</p>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
                    eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam
                    finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education
