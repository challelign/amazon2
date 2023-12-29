/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["fakestoreapi.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.imgur.com",
				hostname: "fakestoreapi.com",
			},
		],
	},
	env: {
		stripe_public_key: process.env.NEXT_STRIPE_PUBLIC_KEY,
		stripe_secret_key: process.env.STRIPE_SECRET_KEY,

		NEXT_STRIPE_PUBLIC_KEY:
			"pk_test_51OSHDXEjfQkA06of3hHjFagoVeQLec6Sddg4Se5tvJBSRD4ycXqb6FeUUFoa1nPFymhyV0giX0C4DQyxlqVlKx3a00fGt29UQX",
		STRIPE_SECRET_KEY:
			"sk_test_51OSHDXEjfQkA06ofKExmGcTkpWayCreuE8l3ERMqLCdBqEubskYtMzuVDlKncDKTwdcDjqDp2EjgKgkZgLYwnQ1K00AER3mIGm",
	},
};

module.exports = nextConfig;
