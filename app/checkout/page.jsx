import CheckOut from "@/components/CheckOut";
import Header from "@/components/Header";
import Image from "next/image";

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
