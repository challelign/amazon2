import { metadata } from "@/app/layout copy";
import { images } from "@/next.config";
import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
	const { items, email } = await req.json();

	/* return NextResponse.json({
		message: "connection is active",
		success: true,
		items,
	}); */

	const line_items = items?.map((item) => {
		return {
			price_data: {
				currency: "usd",
				product_data: {
					name: item.title,
					images: [item.image],
					description: item.description,
					metadata: {
						itemId: item.id,
					},
				},
				unit_amount: item.price * 100,
			},
			tax_rates: ["txr_1OSZUfEjfQkA06oflrJfw4Jp"],
			quantity: 1,
		};
	});

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		success_url: `${process.env.HOST}/success`,
		cancel_url: `${process.env.HOST}/checkout`,
		customer_email: email,
		mode: "payment",
		metadata: {
			email,
			images: JSON.stringify(items.map((item) => item.image)),
		},
		shipping_options: [
			{
				shipping_rate: "shr_1OSJTREjfQkA06ofVTalrWvf",
			},
		],

		line_items,
	});
	console.log("session= >>>> from backend ==>", session.id);

	// return new Response(JSON.stringify(session.id), { status: 201 });
	// res.status(200).json({ id: session.id });

	return NextResponse.json({
		id: session.id,
	});
}
