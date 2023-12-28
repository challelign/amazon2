import CheckOut from "@/components/CheckOut";
import Header from "@/components/Header";
import Image from "next/image";
export const metadata = {
	title: "Amazon Checkout page",
	description: "Developed bya Challeign",
};
const CheckoutPage = () => {
	return (
		<div className="bg-gray-100">
			<Header />
			<main className="lg:flex max-w-screen-xl mx-auto ">
				{/* Left */}

				<CheckOut />
				{/* Right */}
			</main>
		</div>
	);
};

export default CheckoutPage;
