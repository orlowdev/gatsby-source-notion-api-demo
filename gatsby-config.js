const { NOTION_TOKEN, NOTION_DATABASE } = process.env

module.exports = {
	siteMetadata: {
		title: "gatsby-test-notion-api",
	},
	plugins: [
		{
			resolve: require.resolve("../gatsby-source-notion-api"),
			options: {
				token: NOTION_TOKEN,
				databaseId: NOTION_DATABASE,
			},
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-katex`,
						options: {
							strict: false,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
}
