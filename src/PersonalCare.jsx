import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./common/MedicinesPage.css";
import Header from "./Header";
import Footer from "./Footer.jsx";

const personalCare = [
	{
		id: 1,
		name: "Moisturizing Lotion",
		description: "Hydrates and nourishes skin",
		price: "$8",
		image: "/images/Moisturizing Lotion.jpeg",
	},
	{
		id: 2,
		name: "Sunscreen SPF 50",
		description: "Protects skin from UV rays",
		price: "$15",
		image: "/images/Sunscreen SPF 50.jpeg",
	},
	{
		id: 3,
		name: "Anti-Dandruff Shampoo",
		description: "Treats flaky scalp",
		price: "$10",
		image: "/images/Anti-Dandruff Shampoo.jpeg",
	},
	{
		id: 4,
		name: "Charcoal Face Wash",
		description: "Deep cleanses and removes dirt",
		price: "$12",
		image: "/images/Charcoal Face Wash.jpeg",
	},
	{
		id: 5,
		name: "Lip Balm",
		description: "Prevents dry and chapped lips",
		price: "$5",
		image: "/images/Lip Balm.jpeg",
	},
	{
		id: 6,
		name: "Hair Growth Serum",
		description: "Strengthens hair and prevents hair fall",
		price: "$20",
		image: "/images/Hair Growth Serum.jpeg",
	},
	{
		id: 7,
		name: "Hand Sanitizer",
		description: "Kills 99.9% of germs",
		price: "$4",
		image: "/images/Hand Sanitizer.jpeg",
	},
	{
		id: 8,
		name: "Body Scrub",
		description: "Exfoliates dead skin cells",
		price: "$14",
		image: "/images/Body Scrub.jpeg",
	},
	{
		id: 9,
		name: "Aloe Vera Gel",
		description: "Soothes skin irritation and burns",
		price: "$7",
		image: "/images/Aloe Vera Gel.jpeg",
	},
	{
		id: 10,
		name: "Foot Cream",
		description: "Treats cracked heels and dry feet",
		price: "$9",
		image: "/images/Foot Cream.jpeg",
	},
	{
		id: 11,
		name: "Beard Oil",
		description: "Nourishes and strengthens facial hair",
		price: "$12",
		image: "/images/Beard Oil.jpeg",
	},
	{
		id: 12,
		name: "Anti-Aging Night Cream",
		description: "Reduces wrinkles and fine lines",
		price: "$25",
		image: "/images/Anti-Aging Night Cream.jpeg",
	},
];

const PersonalCare = () => {
	const [searchItem, setSearchItem] = useState("");
	const [filteredItems, setFilteredItems] = useState(personalCare);

	const handleInputChange = (e) => {
		const searchTerm = e.target.value;
		setSearchItem(searchTerm);

		const filtered = personalCare.filter((item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredItems(filtered);
	};

	return (
		<div className="container">
			<Header searchItem={searchItem} handleInputChange={handleInputChange} />
			<h1 className="title">Personal Care Products</h1>
			<div className="medicine-grid">
				{filteredItems.length > 0 ? (
					filteredItems.map((item) => (
						<Link
							to={`/personal-care/${item.id}`}
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

export default PersonalCare;
