"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductFeed = () => {
	const [posts, setPosts] = useState([]);
	const copiedPosts = [...posts];

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
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
			{/* <h1>Products Here ..</h1> */}

			{posts
				?.slice(0, 4)
				.map(({ id, title, price, description, category, image }) => (
					<Product
						id={id}
						title={title}
						price={price}
						description={description}
						category={category}
						image={image}
					/>
				))}

			<img
				className="md:col-span-full"
				src="/image/amazonbg1.jpg"
				loading="lazy"
				height={100}
			/>
			<div className="md:col-span-2 ">
				{posts
					?.slice(4, 5)
					.map(({ id, title, price, description, category, image }) => (
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

			{posts
				?.slice(5, copiedPosts.length)
				.map(({ id, title, price, description, category, image }) => (
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
