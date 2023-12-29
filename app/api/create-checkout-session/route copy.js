import { metadata } from "@/app/layout copy";
import { images } from "@/next.config";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
	const { items, email } = await req.json();

	const transformedItem = items.map((item) => ({
		description: item.description,
		quantity: 1,
		price_data: {
			currency: "usd",
			unit_amount: item.price * 100,
			product_data: {
				name: item.title,
				images: [item.image],
			},
		},
	}));
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			shipping_rates: ["shr_1OSJTREjfQkA06ofVTalrWvf"],
			shipping_address_collection: {
				allowed_countries: ["GB", "US", "CA", "AU", "AT", "BE", "BR", "BG"],
			},
			line_items: transformedItem,
			/* line_items: [
			{
				name: "T-shirt",
				description: "Comfortable cotton t-shirt",
				images: ["https://example.com/t-shirt.png"],
				amount: 2000,
				currency: "usd",
				price_data: {
					currency: "usd",
					unit_amount: 2000,
					product_data: {
						name: "T-shirt",
						description: "Comfortable cotton t-shirt",
						images: ["https://example.com/t-shirt.png"],
					},
				},
				quantity: 1,
			},
		], */
			mode: "payment",
			success_url: `${process.env.HOST}/success`,
			cancel_url: `${process.env.HOST}/checkout`,
			metadata: {
				email,
				images: JSON.stringify(items.map((item) => item.image)),
			},
		});
	} catch (e) {
		switch (e.type) {
			case "StripeCardError":
				console.log(`A payment error occurred: ${e.message}`);
				break;
			case "StripeInvalidRequestError":
				console.log("An invalid request occurred.");
				break;
			default:
				console.log("Another problem occurred, maybe unrelated to Stripe.");
				break;
		}
	}
	console.log("session= >>>> from backend ==>", session);
	return NextResponse.json({ id: session.id });
}
