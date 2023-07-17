const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

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
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
				port: "",
				pathname: "/photos/**",
			},
		],
		unoptimized: true,
	},
};

module.exports = withVanillaExtract(nextConfig);
