import "./globals.css";

export const metadata = {
	title: "Amazon ",
	description: "Developed bya Challeign",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
