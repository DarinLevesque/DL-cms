import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'

export const AboutPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-mobile">
          <div className="column">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <PageContent className="content" content={content}/>
          </div>
          <div className="column is-one-third">
            <figure className="image is-square">
              <img src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
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
