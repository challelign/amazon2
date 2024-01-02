"use client";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { selectItems, selectTotal } from "@/slices/basketSlice";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckOutProduct from "./CheckOutProduct";
import { formatCurrency } from "@/utils/formatCurrency";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";

// const stripePromise = loadStripe(process.env.stripe_public_key);
const stripePromise = loadStripe(process.env.NEXT_STRIPE_PUBLIC_KEY);

const CheckOut = () => {
	const { data: session, status } = useSession();
	const items = useSelector(selectItems);
	const total = useSelector(selectTotal);
	// console.log("items from Checkout =>", items);

	// const hasItem = true;
	const createCheckoutSession = async () => {
		// console.log("NEXT_STRIPE_PUBLIC_KEY", process.env.NEXT_STRIPE_PUBLIC_KEY);
		const stripe = await stripePromise;
		// call the backend to create checkout session..
		try {
			const checkoutSession = await fetch("/api/create-checkout-session", {
				method: "POST",
				body: JSON.stringify({ items, email: session.user.email }),
				headers: {
					"content-type": "application/json",
				},
			});
			const data = await checkoutSession.json();
			if (checkoutSession.ok) {
				// console.log(data);
				stripe?.redirectToCheckout({ sessionId: data.id });
				// Cookies.remove("BasketCart");
			} else {
				throw new Error("Failed to create Stripe Payment");
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			{/* Left */}
			<div className="flex-grow m-5 shadow-sm">
				<Image
					src="/image/banner-shopping.jpg"
					objectFit="contain"
					width={1020}
					height={250}
					alt="image bg amazon"
				/>
				<div className="flex flex-col p-5 scale-y-10 bg-white">
					<h1 className="text-3xl border-b pb-4">
						{items.length === 0
							? "Your Amazon Basket is empty"
							: ` Your Shopping Basket # ${items.length}  `}
					</h1>
					{/* {hasItem && <>helo</>} */}
					{items &&
						items.map((item, i) => (
							<CheckOutProduct
								key={i}
								id={item.id}
								title={item.title}
								price={item.price}
								description={item.description}
								category={item.category}
								image={item.image}
								rating={item.rating}
							/>
						))}
				</div>
			</div>
			{/* Right */}

			<div className="flex flex-col bg-white p-10 shadow-md">
				{items.length > 0 && (
					<>
						<h2 className="whitespace-nowrap">
							Subtotal ({items.length} items):{" "}
							<span className="font-bold ">{formatCurrency(total)}</span>
						</h2>
						<button
							role="link"
							onClick={createCheckoutSession}
							className={`button mt-2 ${
								!session &&
								"from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed"
							}`}
						>
							{!session ? "Sign in to checkout" : "Proceed to checkout "}
						</button>
					</>
				)}
			</div>
		</>
	);
};

export default CheckOut;
