import "./globals.css";

import Provider from "../components/Provider";

export const metadata = {
	title: "Amazon ",
	description: "Developed bya Challeign",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Provider>
				<body>{children}</body>
			</Provider>
		</html>
	);
}
