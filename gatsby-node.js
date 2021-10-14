const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/template.js");

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___publish_date___start] }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
