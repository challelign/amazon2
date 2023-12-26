"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductFeed = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPost = async () => {
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();
			setPosts(data);
		};
		// console.log("posts ===>", posts);
		fetchPost();
	}, []);
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{/* <h1>Products Here ..</h1> */}
			{posts?.map(({ id, title, price, description, category, image }) => (
				<Product
					id={id}
					title={title}
					price={price}
					description={description}
					category={category}
					image={image}
				/>
			))}
		</div>
	);
};

export default ProductFeed;
