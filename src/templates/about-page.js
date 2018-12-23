import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import Helmet from 'react-helmet'

export const AboutPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="section">
      <Helmet>
        <script
          type="text/javascript"
          src="/node_modules/bulma-extensions/bulma-carousel/dist/bulma-carousel.min.js"/>
      </Helmet>
      <div className="container">
        <div className="columns is-mobile">
          <div className="column">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <PageContent className="content" content={content}/>
          </div>
          <div className="column is-one-third">
            <div className='carousel carousel-animated carousel-animate-slide'>
              <div className='carousel-container'>
                <div className='carousel-item has-background is-active'>
                  <img
                    className="is-background"
                    src="https://wikiki.github.io/images/merry-christmas.jpg"
                    alt=""
                    width="640"
                    height="310"/>
                  <div className="title">Merry Christmas</div>
                </div>
                <div className='carousel-item has-background'>
                  <img
                    className="is-background"
                    src="https://wikiki.github.io/images/singer.jpg"
                    alt=""
                    width="640"
                    height="310"/>
                  <div className="title">Original Gift: Offer a song with
                    <a href="https://lasongbox.com" target="_blank" rel="noopener noreferrer">La Song Box</a>
                  </div>
                </div>
                <div className='carousel-item has-background'>
                  <img
                    className="is-background"
                    src="https://wikiki.github.io/images/sushi.jpg"
                    alt=""
                    width="640"
                    height="310"/>
                  <div className="title">Sushi time</div>
                </div>
                <div className='carousel-item has-background'>
                  <img
                    className="is-background"
                    src="https://wikiki.github.io/images/life.jpg"
                    alt=""
                    width="640"
                    height="310"/>
                  <div className="title">Life</div>
                </div>
              </div>
              <div className="carousel-navigation is-overlay">
                <div className="carousel-nav-left">
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
                <div className="carousel-nav-right">
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}/>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const aboutPageQuery = graphql `
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
