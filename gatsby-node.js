const path = require("path")
const slugify = require("slugify")

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = slugify((node.frontmatter && node.frontmatter.title) || "test").toLowerCase()

		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve("src/templates/template.js")

	const result = await graphql(`
		{
			postsRemark: allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___publish_date___start] }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	if (result.errors) {
		reporter.panicOnBuild("Error while running GraphQL query.")
		return
	}

	const posts = result.data.postsRemark.edges

	posts.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: blogPostTemplate,
			context: {
				slug: node.fields.slug,
			},
		})
	})
}
