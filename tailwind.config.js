/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#355e1b",
				"main-dark": "#56694b",
				"main-bg": "#a1ab8e",
				"txt-black": "#181c1bb6",
				"light-bg": "#ecebe3",
				orange: "#f08d54",
				"orange-main": "#f08d54",
				"orange-light": "#edbd50",
				"header-bg": "#ffffffd5",
			},
		},
	},
	plugins: [],
});
