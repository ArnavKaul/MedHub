import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./common/MedicinesPage.css";
import Header from "./Header";
import Footer from "./Footer.jsx";

const medicalDevices = [
	{
		id: 1,
		name: "Digital Thermometer",
		description: "For measuring body temperature",
		price: 10,
		rating: 4.5,
		reviews: 120,
		category: "Temperature Measurement",
		image: "/images/Digital Thermometer.jpeg",
	},
	{
		id: 2,
		name: "Blood Pressure Monitor",
		description: "Tracks blood pressure at home",
		price: 40,
		rating: 4.8,
		reviews: 98,
		category: "Cardiovascular",
		image: "/images/Blood Pressure Monitor.jpeg",
	},
	{
		id: 3,
		name: "Pulse Oximeter",
		description: "Measures oxygen levels in blood",
		price: 25,
		rating: 4.6,
		reviews: 80,
		category: "Respiratory",
		image: "/images/Pulse Oximeter.jpeg",
	},
	{
		id: 4,
		name: "Glucometer",
		description: "Monitors blood sugar levels",
		price: 35,
		rating: 4.7,
		reviews: 110,
		category: "Diabetes Care",
		image: "/images/Glucometer.jpeg",
	},
	{
		id: 5,
		name: "Nebulizer",
		description: "Helps with respiratory treatments",
		price: 50,
		rating: 4.3,
		reviews: 60,
		category: "Respiratory",
		image: "/images/Nebulizer.jpeg",
	},
	{
		id: 6,
		name: "Infrared Thermometer",
		description: "Contactless temperature reading",
		price: 28,
		rating: 4.4,
		reviews: 75,
		category: "Temperature Measurement",
		image: "/images/Infrared Thermometer.jpeg",
	},
	{
		id: 7,
		name: "ECG Machine",
		description: "Records heart activity",
		price: 120,
		rating: 4.9,
		reviews: 150,
		category: "Cardiovascular",
		image: "/images/ECG Machine.jpeg",
	},
	{
		id: 8,
		name: "Hearing Aid",
		description: "Enhances sound for the hearing-impaired",
		price: 150,
		rating: 4.2,
		reviews: 45,
		category: "Hearing Assistance",
		image: "/images/Hearing Aid.jpeg",
	},
	{
		id: 9,
		name: "Fingertip Pulse Monitor",
		description: "Compact oxygen and pulse rate tracker",
		price: 30,
		rating: 4.6,
		reviews: 80,
		category: "Respiratory",
		image: "/images/Fingertip Pulse Monitor.jpeg",
	},
	{
		id: 10,
		name: "Weighing Scale",
		description: "Tracks body weight",
		price: 20,
		rating: 4.1,
		reviews: 55,
		category: "General Health",
		image: "/images/Weighing Scale.jpeg",
	},
	{
		id: 11,
		name: "Electric Heating Pad",
		description: "Provides pain relief",
		price: 22,
		rating: 4.3,
		reviews: 65,
		category: "Pain Relief",
		image: "/images/Electric Heating Pad.jpeg",
	},
	{
		id: 12,
		name: "TENS Machine",
		description: "Helps with muscle stimulation and pain relief",
		price: 75,
		rating: 4.8,
		reviews: 130,
		category: "Pain Relief",
		image: "/images/TENS Machine.jpeg",
	},
];

const categories = [
	"All",
	"Temperature Measurement",
	"Cardiovascular",
	"Respiratory",
	"Diabetes Care",
	"Hearing Assistance",
	"General Health",
	"Pain Relief",
];

const MedicalDevices = () => {
	const [searchItem, setSearchItem] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortOption, setSortOption] = useState("rating");
	const [showFilters, setShowFilters] = useState(false);

	const filteredDevices = medicalDevices
		.filter(
			(device) =>
				(selectedCategory === "All" || device.category === selectedCategory) &&
				device.name.toLowerCase().includes(searchItem.toLowerCase())
		)
		.sort((a, b) => {
			if (sortOption === "rating") return b.rating - a.rating;
			if (sortOption === "priceLowHigh") return a.price - b.price;
			if (sortOption === "priceHighLow") return b.price - a.price;
			return 0;
		});

	return (
		<div className="container">
			<Header />
			<h1 className="title">Medical Devices</h1>

			{/* Filter Toggle Button */}
			<button
				className="filter-toggle"
				onClick={() => setShowFilters(!showFilters)}
			>
				{showFilters ? "Hide Filters" : "Show Filters"}
			</button>

			<div className="content">
				{/* Filter Sidebar */}
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
						<select
							value={sortOption}
							onChange={(e) => setSortOption(e.target.value)}
						>
							<option value="rating">Highest Rating</option>
							<option value="priceLowHigh">Price: Low to High</option>
							<option value="priceHighLow">Price: High to Low</option>
						</select>
					</div>
				)}

				{/* Device Grid */}
				<div className="medicine-grid">
					{filteredDevices.map((device) => (
						<div key={device.id} className="medicine-card">
							<img
								src={device.image}
								alt={device.name}
								className="medicine-image"
							/>
							<h2>{device.name}</h2>
							<p>{device.category}</p>
							<p className="medicine-price">${device.price}</p>
							<p className="medicine-rating">
								⭐ {device.rating} | {device.reviews} reviews
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

export default MedicalDevices;
