"use client";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/slices/basketSlice";
import { formatCurrency } from "@/utils/formatCurrency";

const CheckOutProduct = ({
	id,
	title,
	price,
	description,
	category,
	image,
	rating,
}) => {
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
		// push item to redux
		dispatch(addToBasket(product));
	};
	const removeItemFromBasket = () => {
		dispatch(removeFromBasket({ id }));
	};

	return (
		<div className="grid grid-cols-5">
			<img
				className="py-3"
				src={image}
				height={200}
				width={200}
				objectFit="contain"
				alt="image"
			/>
			<div className="col-span-3 mx-5">
				<p>{title}</p>
				<div className="flex">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<StarIcon key={i} className="h-5 text-yellow-500" />
						))}
				</div>
				<p className="text-xs my-2 line-clamp-3">{description}</p>
				{/* <Currency quantity={price} currency="ETB" /> */}
				{formatCurrency(price)}
			</div>
			{/* Right add and remove button */}
			<div className="flex flex-col space-y-2 my-auto justify-self-end">
				<button className="button mt-auto" onClick={addItemToBasket}>
					Add to Basket
				</button>
				<button className="button mt-auto" onClick={removeItemFromBasket}>
					Remove from Basket
				</button>
			</div>
		</div>
	);
};

export default CheckOutProduct;
