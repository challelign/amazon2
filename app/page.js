import Header from "../components/Header";
import Image from "next/image";
import ProductFeed from "../components/ProductFeed";
import Banner from "@/components/Banner";
export const metadata = {
	title: `Amazon Shopping |`,
	description: "Developed bya Challeign",
};
export default function Home() {
	// console.log(products);
	return (
		<div className="bg-gray-100 ">
			<Header />
			<link rel="icon" href="/favicon.ico" sizes="any" />

			<main className="max-w-screen-xl mx-auto">
				{/* Banner */}
				<Banner />

				{/* Products */}
				<ProductFeed />
			</main>
		</div>
	);
}
// export async function getServerSideProps(context) {
// 	"use server";
// 	const products = await fetch(`https://fakestoreapi.com/products`).then(
// 		(res) => res.json()
// 	);
// 	// console.log("products =>", products);
// 	return {
// 		props: {
// 			products,
// 		},
// 	};
// }
