import React from "react"

const colors = {
	default: "bg-gray-100",
	gray: "bg-gray-200",
	brown: "bg-warmGray-300",
	orange: "bg-orange-200",
	yellow: "bg-yellow-200",
	green: "bg-green-200",
	blue: "bg-blue-200",
	purple: "bg-purple-200",
	pink: "bg-pink-200",
	red: "bg-red-200",
}

export const Label = ({ name, color }) => (
	<span
		key={name}
		className={`text-xs px-2 py-1 mr-2 mb-2 lg:mb-0 shadow-sm rounded-md ${colors[color]}`}
	>
		{name}
	</span>
)
