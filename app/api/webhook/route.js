// import { buffer } from "micro";
// import getRawBody from "raw-body";

// import * as admin from "firebase-admin";
// import Stripe from "stripe";

// const serviceAccount = require("../../../permissions.json");

// const app = !admin.apps.length
// 	? admin.initializeApp({
// 			credential: admin.credential.cert(serviceAccount),
// 	  })
// 	: admin.app();

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

// const fulfillOrder = async (session) => {
// 	console.log("fulfilling the order", session);
// 	try {
// 		await app
// 			.firestore()
// 			.collection("users")
// 			.doc(session.metadata.email)
// 			.collection("orders")
// 			.doc(session.id)
// 			.set({
// 				amount: session.amount_total / 100,
// 				amount_shipping: session.total_details.amount_shipping / 100,
// 				images: JSON.stringify(session.metadata.images),
// 				timestamp: admin.firestore.FieldValue.serverTimestamp(),
// 			});
// 		console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
// 		return true;
// 	} catch (error) {
// 		console.log(`Error: ${error.message}`);
// 		throw error;
// 	}
// };
/* // 
4242 4242 4242 4242
 02 / 55

123 

*/

/* 
export const POST = async (req, res) => {
	// console.log(req);
	if (req.method === "POST") {
		try {
			const payload = await req.text();

			const sig = req.headers["stripe-signature"];

			let event;

			console.log("stripe-signature ====>", sig);

			console.log(" =====> stripe-signature ====>", sig);
			try {
				event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
				console.log("event log file  event====>", event);
			} catch (error) {
				console.log("ERROR =>", error.message);

				return new Response(`SUCCESS: Webhook error: ${error.message}`, {
					status: 200,
				});
			}

			if (event.type === "checkout.session.completed") {
				const session = event.data.object;

				try {
					await fulfillOrder(session);
					console.log(`SUCCESS: Order ${session.id} has been added to the DB`);

					return new Response(
						`SUCCESS: Order ${session.id} has been added to the DB`,
						{
							status: 200,
						}
					);
				} catch (err) {
					console.log(`Webhook Error: ${err.message}`);

					return new Response(`Webhook Error: ${err.message}`, {
						status: 500,
					});
				}
			} else {
				return new Response(`Invalid event type`, { status: 407 });
			}
		} catch (error) {
			console.log(`Error: ${error.message}`);

			return new Response(`Error: ${error.message}`, { status: 500 });
		}
	}
};

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
};
 */
