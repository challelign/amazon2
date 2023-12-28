"use client";

import { SessionProvider } from "next-auth/react";

const SessionProviderPage = ({ children, session }) => (
	<SessionProvider session={session}>{children}</SessionProvider>
);

export default SessionProviderPage;
