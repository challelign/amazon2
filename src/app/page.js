import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";
import Image from "next/image";

export default function Home({ products }) {
	// console.log(products);
	return (
		<div className="bg-gray-100 ">
			<Header />
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
