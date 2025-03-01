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
		price: "$10",
		image: "/images/Digital Thermometer.jpeg",
	},
	{
		id: 2,
		name: "Blood Pressure Monitor",
		description: "Tracks blood pressure at home",
		price: "$40",
		image: "/images/Blood Pressure Monitor.jpeg",
	},
	{
		id: 3,
		name: "Pulse Oximeter",
		description: "Measures oxygen levels in blood",
		price: "$25",
		image: "/images/Pulse Oximeter.jpeg",
	},
	{
		id: 4,
		name: "Glucometer",
		description: "Monitors blood sugar levels",
		price: "$35",
		image: "/images/Glucometer.jpeg",
	},
	{
		id: 5,
		name: "Nebulizer",
		description: "Helps with respiratory treatments",
		price: "$50",
		image: "/images/Nebulizer.jpeg",
	},
	{
		id: 6,
		name: "Infrared Thermometer",
		description: "Contactless temperature reading",
		price: "$28",
		image: "/images/Infrared Thermometer.jpeg",
	},
	{
		id: 7,
		name: "ECG Machine",
		description: "Records heart activity",
		price: "$120",
		image: "/images/ECG Machine.jpeg",
	},
	{
		id: 8,
		name: "Hearing Aid",
		description: "Enhances sound for the hearing-impaired",
		price: "$150",
		image: "/images/Hearing Aid.jpeg",
	},
	{
		id: 9,
		name: "Fingertip Pulse Monitor",
		description: "Compact oxygen and pulse rate tracker",
		price: "$30",
		image: "/images/Fingertip Pulse Monitor.jpeg",
	},
	{
		id: 10,
		name: "Weighing Scale",
		description: "Tracks body weight",
		price: "$20",
		image: "/images/Weighing Scale.jpeg",
	},
	{
		id: 11,
		name: "Electric Heating Pad",
		description: "Provides pain relief",
		price: "$22",
		image: "/images/Electric Heating Pad.jpeg",
	},
	{
		id: 12,
		name: "TENS Machine",
		description: "Helps with muscle stimulation and pain relief",
		price: "$75",
		image: "/images/TENS Machine.jpeg",
	},
];

const MedicalDevices = () => {
	const [searchItem, setSearchItem] = useState("");
	const [filteredItems, setFilteredItems] = useState(medicalDevices);

	const handleInputChange = (e) => {
		const searchTerm = e.target.value;
		setSearchItem(searchTerm);

		const filtered = medicalDevices.filter((item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredItems(filtered);
	};

	return (
		<div className="container">
			<Header searchItem={searchItem} handleInputChange={handleInputChange} />
			<h1 className="title">Medical Devices</h1>
			<div className="medicine-grid">
				{filteredItems.length > 0 ? (
					filteredItems.map((item) => (
						<Link
							to={`/medical-devices/${item.id}`}
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

export default MedicalDevices;
