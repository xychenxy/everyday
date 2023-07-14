/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["ui"],
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: [{ loader: "@svgr/webpack", options: { icon: true } }],
		});
		return config;
	},
};

module.exports = nextConfig;
