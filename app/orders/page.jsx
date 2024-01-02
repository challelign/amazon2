"use client";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Header from "@/components/Header";
import Image from "next/image";
import { useSession } from "next-auth/react";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Orders = () => {
	const { data: session, status } = useSession();
	const router = useRouter();
	return (
		<div>
			<Header />
			<main className="max-w-screen-lg mx-auto p-10">
				<h1 className="text-3xl border-b mb-2 pb-1 bg-yellow-400">
					Your orders
				</h1>
			</main>
		</div>
	);
};

export default Orders;
