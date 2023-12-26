/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["fakestoreapi.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.imgur.com",
			},
		],
	},
};

module.exports = nextConfig;
