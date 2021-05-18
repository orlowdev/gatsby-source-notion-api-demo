import { Link } from "gatsby"
import React from "react"

export const Layout = ({ children }) => (
	<>
		<nav className="flex py-2 lg:py-5 lg:px-3 fixed">
			<ol>
				<li className="m-5">
					<Link to="/">
						<span
							className="px-3 py-3.5 bg-violet-300 rounded-full shadow-lg"
							role="img"
							aria-label="home"
						>
							🏠
						</span>
					</Link>
				</li>
			</ol>
		</nav>

		<main className="space-y-5 mb-12 flex flex-col space-y-12 bg-gray-50">{children}</main>

		<footer className="flex flex-col align-middle text-center justify-center p-12 bg-violet-200 text-xs text-gray-700 space-y-5">
			<p>
				You can reach me out here for questions, feedback, or just a talk (<strong>@orlowdev</strong>{" "}
				pretty much everywhere):
			</p>
			<div className="flex space-x-3 self-center underline">
				<a href="https://twitter.com/orlowdev">Twitter</a>
				<a href="https://instagram.com/orlowdev">Instagram</a>
				<a href="https://github.com/orlowdev">GitHub</a>
				<a href="https://orlow.dev">Blog</a>
			</div>
			<p>
				<a href="https://orlow.dev">&copy; Sergei Orlov 2021</a>
			</p>
		</footer>
	</>
)
