"use client";
import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
const Header = () => {
	const { data: session, status } = useSession();

	return (
		<header>
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				<div className="mt-2 px-2 flex  items-center sm:flex-grow-0  ">
					<Image
						src="/amazon_logo.png"
						width={150}
						height={40}
						objectFit="contain"
						className="cursor-pointer text-white"
					/>
				</div>
				{/* Search */}
				<div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-500 ">
					<p>All</p>
					<input
						className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
						type="text"
					/>
					<SearchIcon className="h-12 p-4" />
				</div>

				{/* Right */}
				<div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
					<div
						className="link"
						onClick={() => {
							signIn("google");
						}}
					>
						<p>Hello ,Challelign</p>
						<p className="font-extrabold md:text-sm">Account & Lists</p>
					</div>
					<div className="link">
						<p>Returns</p>
						<p className="font-extrabold md:text-sm">& Orders</p>
					</div>
					<div className="link relative flex items-center">
						<span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
							4
						</span>
						<ShoppingCartIcon className="h-10 " />
						<p className="hidden md:inline font-extrabold md:text-sm mt-2">
							Basket
						</p>
					</div>
				</div>
			</div>
			{/* Bottom nav */}
			<div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
				<p className="headerHover flex items-center">
					<MenuIcon className="h-6 mr-1" />
					All Gift
				</p>
				<p className=" headerHover ">Today's Deals</p>
				<p className=" headerHover ">Registry</p>
				<p className=" headerHover ">Customer Service</p>
				<p className=" headerHover ">Cards </p>
				<p className=" headerHover ">Sell</p>
				<p className=" headerHover  hidden lg:inline-flex">Electronics</p>
				<p className=" headerHover  hidden lg:inline-flex">
					DealsOutletDigital
				</p>
				<p className=" headerHover  hidden lg:inline-flex">DealsAmazon</p>
				<p className=" headerHover  hidden lg:inline-flex">Warehouse</p>
				<p className="  headerHover hidden lg:inline-flex">Renewed</p>
			</div>
		</header>
	);
};

export default Header;
