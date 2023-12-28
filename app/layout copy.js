// "use client";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import StoreProvider from "@/components/StoreProvider";
import SessionProviderPage from "@/components/SessionProviderPage";
export const metadata = {
	title: "Amazon ",
	description: "Developed bya Challeign",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<SessionProviderPage>
				<StoreProvider>
					<Toaster position="top-center" />
					<body>{children}</body>
				</StoreProvider>
			</SessionProviderPage>
		</html>
	);
}
