import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./common/MedicinesPage.css";
import Header from "./Header";
import Footer from "./Footer.jsx";

const wellnessProducts = [
	{
		id: 1,
		name: "Multivitamins",
		category: "Supplements",
		price: 15,
		rating: 4.9,
		reviews: 200,
		image: "/images/Multivitamins.jpeg",
	},
	{
		id: 2,
		name: "Omega-3 Fish Oil",
		category: "Heart Health",
		price: 20,
		rating: 4.8,
		reviews: 180,
		image: "/images/Omega-3 Fish Oil.jpeg",
	},
	{
		id: 3,
		name: "Vitamin C Tablets",
		category: "Immunity Boosters",
		price: 12,
		rating: 4.7,
		reviews: 150,
		image: "/images/Vitamin C Tablets.jpeg",
	},
	{
		id: 4,
		name: "Protein Powder",
		category: "Fitness",
		price: 30,
		rating: 4.6,
		reviews: 250,
		image: "/images/proteinpowder.jpeg",
	},
	{
		id: 5,
		name: "Probiotics",
		category: "Digestive Health",
		price: 18,
		rating: 4.8,
		reviews: 220,
		image: "/images/Probiotics.jpeg",
	},
	{
		id: 6,
		name: "Herbal Green Tea",
		category: "Weight Management",
		price: 10,
		rating: 4.5,
		reviews: 190,
		image: "/images/Herbal Green Tea.jpeg",
	},
	{
		id: 7,
		name: "Melatonin Tablets",
		category: "Sleep Aid",
		price: 14,
		rating: 4.7,
		reviews: 130,
		image: "/images/Melatonin Tablets.jpeg",
	},
	{
		id: 8,
		name: "Collagen Powder",
		category: "Skin Health",
		price: 25,
		rating: 4.9,
		reviews: 300,
		image: "/images/Collagen Powder.jpeg",
	},
	{
		id: 9,
		name: "Mg Supplements",
		category: "Stress Relief",
		price: 16,
		rating: 4.6,
		reviews: 140,
		image: "/images/Magnesium Tablets.jpeg",
	},
	{
		id: 10,
		name: "ACV Gummies",
		category: "Weight Management",
		price: 13,
		rating: 4.7,
		reviews: 110,
		image: "/images/Apple Cider Vinegar Gummies.jpeg",
	},
	{
		id: 11,
		name: "ASG Capsules",
		category: "Stress Relief",
		price: 19,
		rating: 4.8,
		reviews: 160,
		image: "/images/Ashwagandha Capsules.jpeg",
	},
	{
		id: 12,
		name: "Electrolyte Drinks",
		category: "Fitness",
		price: 8,
		rating: 4.5,
		reviews: 100,
		image: "/images/Electrolyte Drinks.jpeg",
	},
];

const categories = [
	"All",
	"Supplements",
	"Heart Health",
	"Immunity Boosters",
	"Fitness",
	"Digestive Health",
	"Weight Management",
	"Sleep Aid",
	"Skin Health",
	"Stress Relief",
];

const Wellness = () => {
	const [showFilters, setShowFilters] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortBy, setSortBy] = useState("Highest Rating");

	const filteredItems = wellnessProducts
		.filter(
			(product) =>
				selectedCategory === "All" || product.category === selectedCategory
		)
		.sort((a, b) => {
			if (sortBy === "Highest Rating") return b.rating - a.rating;
			if (sortBy === "Lowest Price") return a.price - b.price;
			if (sortBy === "Highest Price") return b.price - a.price;
			return 0;
		});

	return (
		<div className="container">
			<Header />
			<h1 className="title">Wellness Products</h1>

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
						{categories.map((category) => (
							<label key={category}>
								<input
									type="radio"
									name="category"
									checked={selectedCategory === category}
									onChange={() => setSelectedCategory(category)}
								/>
								{category}
							</label>
						))}
						<h3>Sort By</h3>
						<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
							<option>Highest Rating</option>
							<option>Lowest Price</option>
							<option>Highest Price</option>
						</select>
					</div>
				)}

				<div className="medicine-grid">
					{filteredItems.map((product) => (
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

export default Wellness;
