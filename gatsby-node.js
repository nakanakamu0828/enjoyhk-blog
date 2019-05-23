/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // Netlifyの_redirectsファイルを生成
  createRedirect({
    fromPath: 'https://enjoyhk-blog.netlify.com/*',
    toPath: 'https://enjoyhk.nakamu.life/:splat',
    isPermanent: true,
    force: true
  })
  

  // ブログの一覧・記事ページを作成
  const blogPosts = path.resolve(`./src/templates/blog-posts.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const categoryBlogPosts = path.resolve(`./src/templates/category.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                category
              }
            }
          }
        },
        allCategoriesJson {
          edges{
            node{
              name,
              slug        
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges
    const categories = result.data.allCategoriesJson.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      // 記事ページ
      createPage({
        path: `post${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // 一覧ページ
    const postsPerPage = 20

    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/posts` : `/posts/${i + 1}`,
        component: blogPosts,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // カテゴリページ
    categories.forEach((category, index) => {
      const categoryPosts = posts.filter(p => p.node.frontmatter.category === category.node.name)
      if (categoryPosts.length > 0) {
        const numPages = Math.ceil(categoryPosts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/category/${category.node.slug}/posts` : `/category/${category.node.slug}/posts/${i + 1}`,
            component: categoryBlogPosts,
            context: {
              category: category.node.name,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })
      }
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
