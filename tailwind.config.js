module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Work Sans", "sans-serif"],
			titan: ["Titan One", "sans-serif"],
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
