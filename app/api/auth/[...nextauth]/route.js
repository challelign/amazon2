import NextAuth from "next-auth";
import bcryptjs from "bcryptjs";

// import { connectToDB } from "../../../../utils/database";
import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
	session: {
		strategy: "jwt",
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),

		CredentialsProvider({
			name: "Credentials",
			async authorize(credentials, req) {
				await connectToDB();

				const { email, password } = credentials;

				console.log(email, password);
				const user = await User.findOne({ email });

				if (!user) {
					throw new Error("Invalid Email or Password");
				}

				const isPasswordMatched = await bcryptjs.compare(
					password,
					user.password
				);

				if (!isPasswordMatched) {
					throw new Error("Invalid Email or Password");
				}
				// Include the user ID in the session
				const sessionUser = {
					id: user._id.toString(),
					name: user.name,
					email: user.email,
					image: user.image,
					isAdmin: true,
				};
				console.log("sessionUser =>", sessionUser);

				return sessionUser;
			},
		}),
	],
	callbacks: {
		async session({ session }) {
			try {
				await connectToDB();
				const sessionUser = await User.findOne({ email: session.user.email });

				if (sessionUser) {
					session.user.id = sessionUser._id.toString();
				}
			} catch (error) {
				console.error("Error retrieving session user:", error);
				// Handle the error appropriately, such as logging or displaying an error message.
			}

			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
