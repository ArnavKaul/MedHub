import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./common/MedicinesPage.css";
import Header from "./Header";
import Footer from "./Footer.jsx";

const wellnessProducts = [
	{
		id: 1,
		name: "Multivitamins",
		description: "Daily nutritional supplements",
		price: "$15",
		image: "/images/Multivitamins.jpeg",
	},
	{
		id: 2,
		name: "Omega-3 Fish Oil",
		description: "Supports heart and brain health",
		price: "$20",
		image: "/images/Omega-3 Fish Oil.jpeg",
	},
	{
		id: 3,
		name: "Vitamin C Tablets",
		description: "Boosts immunity and skin health",
		price: "$12",
		image: "/images/Vitamin C Tablets.jpeg",
	},
	{
		id: 4,
		name: "Protein Powder",
		description: "For muscle recovery and strength",
		price: "$30",
		image: "/images/proteinpowder.jpeg",
	},
	{
		id: 5,
		name: "Probiotics",
		description: "Improves gut health and digestion",
		price: "$18",
		image: "/images/Probiotics.jpeg",
	},
	{
		id: 6,
		name: "Herbal Green Tea",
		description: "Helps in detox and weight loss",
		price: "$10",
		image: "/images/Herbal Green Tea.jpeg",
	},
	{
		id: 7,
		name: "Melatonin Tablets",
		description: "Supports better sleep cycles",
		price: "$14",
		image: "/images/Melatonin Tablets.jpeg",
	},
	{
		id: 8,
		name: "Collagen Powder",
		description: "Promotes skin elasticity and joint health",
		price: "$25",
		image: "/images/Collagen Powder.jpeg",
	},
	{
		id: 9,
		name: "Magnesium Supplements",
		description: "Reduces stress and muscle cramps",
		price: "$16",
		image: "/images/Magnesium Tablets.jpeg",
	},
	{
		id: 10,
		name: "Apple Cider Vinegar Gummies",
		description: "Supports digestion and metabolism",
		price: "$13",
		image: "/images/Apple Cider Vinegar Gummies.jpeg",
	},
	{
		id: 11,
		name: "Ashwagandha Capsules",
		description: "Helps reduce stress and anxiety",
		price: "$19",
		image: "/images/Ashwagandha Capsules.jpeg",
	},
	{
		id: 12,
		name: "Electrolyte Drinks",
		description: "Replenishes hydration and energy",
		price: "$8",
		image: "/images/Electrolyte Drinks.jpeg",
	},
];

const Wellness = () => {
	const [searchItem, setSearchItem] = useState("");
	const [filteredItems, setFilteredItems] = useState(wellnessProducts);

	const handleInputChange = (e) => {
		const searchTerm = e.target.value;
		setSearchItem(searchTerm);

		const filtered = wellnessProducts.filter((item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredItems(filtered);
	};

	return (
		<div className="container">
			<Header searchItem={searchItem} handleInputChange={handleInputChange} />
			<h1 className="title">Wellness Products</h1>
			<div className="medicine-grid">
				{filteredItems.length > 0 ? (
					filteredItems.map((item) => (
						<Link
							to={`/wellness/${item.id}`}
							key={item.id}
							className="medicine-card"
						>
							<img
								src={item.image}
								alt={item.name}
								className="medicine-image"
							/>
							<h2>{item.name}</h2>
							<p>{item.description}</p>
							<p className="medicine-price">{item.price}</p>
						</Link>
					))
				) : (
					<p className="no-results">No products found.</p>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Wellness;
