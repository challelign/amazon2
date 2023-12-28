import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { addToBasket } from "@/slices/basketSlice";
import { formatCurrency } from "@/utils/formatCurrency";
const MIN_RATTING = 1;
const MAX_RATTING = 5;
const Product = ({ id, title, price, description, category, image }) => {
	const [rating, setRatting] = useState(
		Math.floor(Math.random() * (MAX_RATTING + 1)) + MIN_RATTING
	);
	const [hasPrime] = useState(Math.random() < 0.5);
	//
	const dispatch = useDispatch();
	const addItemToBasket = () => {
		const product = {
			id,
			title,
			price,
			description,
			category,
			image,
			rating,
		};
		// sending the product as action to the REDUX store .. the basket slice
		dispatch(addToBasket(product));
		// console.log(product);
	};

	return (
		<div className="relative flex flex-col m-5 bg-white z-30 p-10">
			<p className="absolute top-2 right-2 text-xs italic text-gray-400">
				{category}
			</p>
			<img
				loading="lazy"
				src={image}
				height={200}
				width={200}
				objectFit="contain"
				alt={title}
			/>

			<h4>{title}</h4>
			<div className="flex">
				{Array(rating)
					.fill()
					.map((_, i) => (
						<StarIcon key={i} className="h-5 text-yellow-500" />
					))}
			</div>
			<p className="text-xs mt-2 my-2 line-clamp-2">{description}</p>
			<div className="mb-5">
				{/* <Currency quantity={price} currency="ETB" /> */}
				{formatCurrency(price)}
			</div>
			{hasPrime && (
				<div className="  flex items-center space-x-2 -mt-5">
					<img className="w-12" src="image/OIP.jpg" alt="has prime" />
					<p className="text-xs text-gray-500">FREE Next-day Delivery</p>
				</div>
			)}
			<button className="mt-auto button" onClick={addItemToBasket}>
				Add to Basket
			</button>
		</div>
	);
};

export default Product;
