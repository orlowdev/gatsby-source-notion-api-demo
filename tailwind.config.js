const colors = require("tailwindcss/colors")

module.exports = {
	purge: ["./src/**/*.js"],
	theme: {
		extend: {
			colors: {
				black: colors.black,
				white: colors.white,
				rose: colors.rose,
				pink: colors.pink,
				fuchsia: colors.fuchsia,
				purple: colors.purple,
				violet: colors.violet,
				indigo: colors.indigo,
				blue: colors.blue,
				lightBlue: colors.lightBlue,
				cyan: colors.cyan,
				teal: colors.teal,
				emerald: colors.emerald,
				green: colors.green,
				lime: colors.lime,
				yellow: colors.yellow,
				amber: colors.amber,
				orange: colors.orange,
				red: colors.red,
				warmGray: colors.warmGray,
				gray: colors.gray,
			},
		},
	},
	variants: {
		extend: {
			textOpacity: ["dark"],
			backgroundColor: ["active"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
