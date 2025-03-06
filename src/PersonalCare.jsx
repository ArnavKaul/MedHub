import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./common/MedicinesPage.css";
import Header from "./Header";
import Footer from "./Footer.jsx";

const personalCareProducts = [
	{
		id: 1,
		name: "Moisturizing Lotion",
		category: "Skin Care",
		price: 8,
		rating: 4.7,
		reviews: 110,
		image: "/images/Moisturizing Lotion.jpeg",
	},
	{
		id: 2,
		name: "Sunscreen SPF 50",
		category: "Skin Care",
		price: 15,
		rating: 4.8,
		reviews: 95,
		image: "/images/Sunscreen SPF 50.jpeg",
	},
	{
		id: 3,
		name: "Anti-Dandruff Shampoo",
		category: "Hair Care",
		price: 10,
		rating: 4.6,
		reviews: 85,
		image: "/images/Anti-Dandruff Shampoo.jpeg",
	},
	{
		id: 4,
		name: "Charcoal Face Wash",
		category: "Face Care",
		price: 12,
		rating: 4.7,
		reviews: 120,
		image: "/images/Charcoal Face Wash.jpeg",
	},
	{
		id: 5,
		name: "Lip Balm",
		category: "Lip Care",
		price: 5,
		rating: 4.5,
		reviews: 90,
		image: "/images/Lip Balm.jpeg",
	},
	{
		id: 6,
		name: "Hair Growth Serum",
		category: "Hair Care",
		price: 20,
		rating: 4.4,
		reviews: 70,
		image: "/images/Hair Growth Serum.jpeg",
	},
	{
		id: 7,
		name: "Hand Sanitizer",
		category: "Hand Care",
		price: 4,
		rating: 4.9,
		reviews: 150,
		image: "/images/Hand Sanitizer.jpeg",
	},
	{
		id: 8,
		name: "Body Scrub",
		category: "Body Care",
		price: 14,
		rating: 4.6,
		reviews: 100,
		image: "/images/Body Scrub.jpeg",
	},
	{
		id: 9,
		name: "Aloe Vera Gel",
		category: "Skin Care",
		price: 7,
		rating: 4.8,
		reviews: 130,
		image: "/images/Aloe Vera Gel.jpeg",
	},
	{
		id: 10,
		name: "Foot Cream",
		category: "Foot Care",
		price: 9,
		rating: 4.7,
		reviews: 80,
		image: "/images/Foot Cream.jpeg",
	},
	{
		id: 11,
		name: "Beard Oil",
		category: "Beard Care",
		price: 12,
		rating: 4.5,
		reviews: 75,
		image: "/images/Beard Oil.jpeg",
	},
	{
		id: 12,
		name: "Anti-Aging Night Cream",
		category: "Face Care",
		price: 25,
		rating: 4.9,
		reviews: 160,
		image: "/images/Anti-Aging Night Cream.jpeg",
	},
];

const categories = [
	"Skin Care",
	"Hair Care",
	"Face Care",
	"Lip Care",
	"Hand Care",
	"Body Care",
	"Foot Care",
	"Beard Care",
];

const PersonalCare = () => {
	const [showFilters, setShowFilters] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [sortBy, setSortBy] = useState("rating");

	const filteredProducts = personalCareProducts
		.filter(
			(product) =>
				selectedCategory === "" || product.category === selectedCategory
		)
		.sort((a, b) => {
			if (sortBy === "rating") return b.rating - a.rating;
			if (sortBy === "priceLowHigh") return a.price - b.price;
			if (sortBy === "priceHighLow") return b.price - a.price;
			return 0;
		});

	return (
		<div className="container">
			<Header />
			<h1 className="title">Personal Care Products</h1>

			<button
				className="filter-toggle"
				onClick={() => setShowFilters(!showFilters)}
			>
				{showFilters ? "Hide Filters" : "Show Filters"}
			</button>

			<div className="content">
				{showFilters && (
					<div className="filter-sidebar">
						<h3>Categories</h3>
						<label>
							<input
								type="radio"
								name="category"
								onChange={() => setSelectedCategory("")}
							/>{" "}
							All
						</label>
						{categories.map((category) => (
							<label key={category}>
								<input
									type="radio"
									name="category"
									onChange={() => setSelectedCategory(category)}
								/>{" "}
								{category}
							</label>
						))}

						<h3>Sort By</h3>
						<select onChange={(e) => setSortBy(e.target.value)}>
							<option value="rating">Highest Rating</option>
							<option value="priceLowHigh">Price: Low to High</option>
							<option value="priceHighLow">Price: High to Low</option>
						</select>
					</div>
				)}

				<div className="medicine-grid">
					{filteredProducts.map((product) => (
						<div key={product.id} className="medicine-card">
							<img
								src={product.image}
								alt={product.name}
								className="medicine-image"
							/>
							<h2>{product.name}</h2>
							<p>{product.category}</p>
							<p className="medicine-price">${product.price}</p>
							<p className="medicine-rating">
								⭐ {product.rating} | {product.reviews} reviews
							</p>
							<button className="add-to-cart">Add to Cart</button>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default PersonalCare;
