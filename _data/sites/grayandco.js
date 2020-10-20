module.exports = {
	name: "Gray & Co.", // optional, falls back to object key
	description: "Gray & Co.",
	options: {
		frequency: 60 * 1, // 1 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://wearegray.co",
    		"https://laurenagray.com",
		"https://tylergray.dev"
	]
};
