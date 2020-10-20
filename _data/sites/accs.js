module.exports = {
	name: "ACCS", // optional, falls back to object key
	description: "ACCS",
	options: {
		frequency: 60 * 1, // 1 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.cacc.edu",
        	"https://www.accs.edu",
		"https://www.bscc.edu"
	]
};
