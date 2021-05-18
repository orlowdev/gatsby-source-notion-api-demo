import { graphql } from "gatsby"
import * as React from "react"
import { Layout } from "../layout"

// markup
const IndexPage = ({ data }) => {
	const pages = data.allMarkdownRemark.edges

	return (
		<Layout>
			<section className="pt-28 pb-20 px-5 text-center bg-violet-500">
				<h1 className="text-5xl lg:text-7xl leading-loose font-black">
					<a href="https://gatsbyjs.com">
						<span className="bg-violet-400 px-4 py-2 rounded-md shadow-md">Gatsby</span>
					</a>{" "}
					+{" "}
					<a href="https://notion.so">
						<span className="bg-gray-400 px-4 py-2 rounded-md shadow-md">Notion</span>
					</a>{" "}
					={" "}
					<a href="https://www.npmjs.com/package/gatsby-source-notion-api">
						<span className="bg-rose-400 px-4 py-2 rounded-md shadow-md" role="img" aria-label="heart">
							♥️
						</span>
					</a>
				</h1>
				<p className="text-4xl mt-14">↓</p>
			</section>

			<div className="prose prose-purple px-5 self-center">
				<p>
					This is a demo website that uses Notion.so as a backend for Gatsby. This is possible using{" "}
					<a href="https://www.npmjs.com/package/gatsby-source-notion-api">gatsby-source-notion-api</a>{" "}
					plugin that works with official public Notion API.
				</p>

				<p>
					Check out the{" "}
					<a href="https://github.com/orlowdev/gatsby-source-notion-api">README on GitHub</a> for the
					latest information on how to use the package.
				</p>

				<p>
					The styling of this demo site is done with <a href="https://tailwindcss.com">TailwindCSS</a>{" "}
					with <strong>0</strong> lines of CSS code written.
				</p>

				<p>
					Thanks to simple and convenient API provided by MarkdownRemark and MDX, you can query Notion
					pages with <code>mardownRemark</code> or <code>mdx</code> if you use them. For your
					convenience, all Notion page properties are put into <strong>frontmatter</strong>.
				</p>

				<h2 className="text-2lg">Here is the list of pages coming from Notion:</h2>

				<nav>
					<ol>
						{pages.map(({ node }) => (
							<li key={node.fields.slug}>
								<a href={node.fields.slug}>{node.frontmatter.title}</a>
							</li>
						))}
					</ol>
				</nav>

				<h2 className="text-2lg">Caveats</h2>

				<p>
					Currently Notion API returns many blocks with a type of <code>unsupported</code>. They will
					hopefully become available later on. For now, <code>gatsby-source-notion-api</code> marks
					places for these blocks with an HTML comment. All attachment blocks are not supported.
					Unfortunately, it also includes images.
				</p>

				<h2 className="text-2lg">Additional Resources</h2>

				<nav>
					<ol>
						<li>
							<a href="https://notion.so">Notion</a>
						</li>
						<li>
							<a href="https://gatsbyjs.com">Gatsby</a>
						</li>
						<li>
							<a href="https://www.notion.so/orlowdev/0549d94d05524848934d748d1d0a039d?v=e78d3774bdac4aa38b11f9386d16701d">
								Notion database this website takes data from
							</a>
						</li>
						<li>
							<a href="https://github.com/orlowdev/gatsby-source-notion-api-demo">
								Source code of this website
							</a>
						</li>

						<li>
							<a href="https://www.npmjs.com/package/gatsby-source-notion-api">
								<code>gatsby-source-notion-api</code> on NPM
							</a>
						</li>
						<li>
							<a href="https://www.github.com/orlowdev/gatsby-source-notion-api">
								<code>gatsby-source-notion-api</code> on GitHub
							</a>
						</li>
						<li>
							<a href="https://www.gatsbyjs.com/plugins/gatsby-source-notionso/?=gatsby-source-notion">
								<code>gatsby-source-notion-api</code> on GatsbyJS.com
							</a>
						</li>
						<li>
							<a href="https://developers.notion.com/reference/intro">Notion API reference</a>
						</li>
					</ol>
				</nav>
			</div>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query IndexPage {
		allMarkdownRemark(
			filter: { frontmatter: { publish_date: { start: { lte: "2021-05-22" } } } }
			sort: { fields: frontmatter___publish_date___start, order: DESC }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						publish_date {
							start
						}
						status {
							name
							color
						}
						tags {
							name
							color
						}
					}
				}
			}
		}
	}
`
