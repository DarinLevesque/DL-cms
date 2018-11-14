import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import TimeAgo from 'react-timeago'
import Layout from '../components/Layout'

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
          <section className="section">
            <div className="container">
              <div className="content">
                <h1 className="has-text-weight-bold is-size-2">Latest Articles</h1>
              </div>
              {posts
                .map(({ node: post }) => (
                  <div
                    className="content"
                    style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                    key={post.id}
                  >
                    <span class="subtitle is-5 is-pulled-right">
                      <TimeAgo date={post.frontmatter.date} />
                    </span>
                    <h4 class="title is-4">
                      <Link className="has-text-primary" to={post.fields.slug}>
                         {post.frontmatter.title}
                      </Link>
                    </h3>
                    <h6 class="subtitle is-6">
                      {post.frontmatter.date}
                    </h5>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small is-pulled-right" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                ))}
            </div>
          </section>
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
