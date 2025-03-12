import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./common/MedicinesPage.css";
import Header from "./Header";
import Footer from "./Footer.jsx";
import { CartProvider, useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const medicines = [
	{
		id: 1,
		name: "Paracetamol",
		description: "Pain reliever.",
		price: 5,
		rating: 4.5,
		reviews: 120,
		category: "Pain Relief",
		image: "/images/Paracetamol.jpeg",
	},
	{
		id: 2,
		name: "Amoxicillin",
		description: "Antibiotic for infections.",
		price: 10,
		rating: 4.8,
		reviews: 98,
		category: "Antibiotics",
		image: "/images/Amoxicillin.jpeg",
	},
	{
		id: 3,
		name: "Cetirizine",
		description: "For allergies.",
		price: 8,
		rating: 4.2,
		reviews: 75,
		category: "Allergy",
		image: "/images/Cetirizine.jpeg",
	},
	{
		id: 4,
		name: "Metformin",
		description: "For diabetes.",
		price: 12,
		rating: 4.6,
		reviews: 112,
		category: "Diabetes",
		image: "/images/Metformin.jpeg",
	},
	{
		id: 5,
		name: "Ibuprofen",
		description: "Anti-inflammatory.",
		price: 7,
		rating: 4.4,
		reviews: 88,
		category: "Pain Relief",
		image: "/images/Ibuprofen.jpeg",
	},
	{
		id: 6,
		name: "Aspirin",
		description: "Pain reliever & blood thinner.",
		price: 6,
		rating: 4.3,
		reviews: 95,
		category: "Pain Relief",
		image: "/images/Aspirin.jpeg",
	},
	{
		id: 7,
		name: "Loratadine",
		description: "Allergy relief.",
		price: 9,
		rating: 4.2,
		reviews: 60,
		category: "Allergy",
		image: "/images/Loratadine.jpeg",
	},
	{
		id: 8,
		name: "Omeprazole",
		description: "Reduces stomach acid.",
		price: 11,
		rating: 4.7,
		reviews: 130,
		category: "Digestive Health",
		image: "/images/Omeprazole.jpeg",
	},
	{
		id: 9,
		name: "Atorvastatin",
		description: "Lowers cholesterol.",
		price: 14,
		rating: 4.6,
		reviews: 80,
		category: "Heart Health",
		image: "/images/Atorvastatin.jpeg",
	},
	{
		id: 10,
		name: "Losartan",
		description: "Blood pressure control.",
		price: 13,
		rating: 4.8,
		reviews: 150,
		category: "Heart Health",
		image: "/images/Losartan.jpeg",
	},
	{
		id: 11,
		name: "Ranitidine",
		description: "Reduces stomach acid.",
		price: 10,
		rating: 4.3,
		reviews: 70,
		category: "Digestive Health",
		image: "/images/Ranitidine.jpeg",
	},
	{
		id: 12,
		name: "Levothyroxine",
		description: "For hypothyroidism.",
		price: 15,
		rating: 4.9,
		reviews: 200,
		category: "Hormone Therapy",
		image: "/images/Levothyroxine.jpeg",
	},
];

const categories = [
	"Pain Relief",
	"Antibiotics",
	"Allergy",
	"Diabetes",
	"Digestive Health",
	"Heart Health",
	"Hormone Therapy",
];

const MedicinesPage = () => {
	const [showFilters, setShowFilters] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [sortBy, setSortBy] = useState("rating");

    const { addItem, items, updateItemQuantity, removeItem, cartTotal } = useCart();
    const navigate=useNavigate()
  // Add item to cart
//   const addToCart = (medicine) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === medicine.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...medicine, quantity: 1 }];
//       }
//     });
//   };

//   // Increase quantity
//   const increaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
//     );
//   };

//   // Decrease quantity (remove if 0)
//   const decreaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0) // Remove item if quantity reaches 0
//     );
//   };

//   // Remove item from cart
//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   // Calculate total price
//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);



	const filteredMedicines = medicines
		.filter(
			(medicine) =>
				selectedCategory === "" || medicine.category === selectedCategory
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
			<h1 className="title">Medicines</h1>

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
						<label>
							<input
								type="radio"
								name="category"
								onChange={() => setSelectedCategory("Pain Relief")}
							/>{" "}
							Pain Relief
						</label>
						<label>
							<input
								type="radio"
								name="category"
								onChange={() => setSelectedCategory("Antibiotics")}
							/>{" "}
							Antibiotics
						</label>
						<label>
							<input
								type="radio"
								name="category"
								onChange={() => setSelectedCategory("Allergy")}
							/>{" "}
							Allergy
						</label>
						<label>
							<input
								type="radio"
								name="category"
								onChange={() => setSelectedCategory("Diabetes")}
							/>{" "}
							Diabetes
						</label>
						<label>
							<input
								type="radio"
								name="category"
								onChange={() => setSelectedCategory("Digestive Health")}
							/>{" "}
							Digestive Health
						</label>
						<label>
							<input
								type="radio"
								name="category"
								onChange={() => setSelectedCategory("Heart Health")}
							/>{" "}
							Heart Health
						</label>
						<label>
							<input
								type="radio"
								name="category"
								onChange={() => setSelectedCategory("Hormone Therapy")}
							/>{" "}
							Hormone Therapy
						</label>
						<h3>Sort By</h3>
						<select onChange={(e) => setSortBy(e.target.value)}>
							<option value="rating">Highest Rating</option>
							<option value="priceLowHigh">Price: Low to High</option>
							<option value="priceHighLow">Price: High to Low</option>
						</select>
					</div>
				)}

				<div className="medicine-grid">
					{filteredMedicines.map((medicine) => (
						<div key={medicine.id} className="medicine-card">
							<img
								src={medicine.image}
								alt={medicine.name}
								className="medicine-image"
							/>
							<h2>{medicine.name}</h2>
							<p>{medicine.category}</p>
							<p className="medicine-price">${medicine.price}</p>
							<p className="medicine-rating">
								⭐ {medicine.rating} | {medicine.reviews} reviews
							</p>
							<button 
  className="add-to-cart"  
  onClick={() => {
    addItem(medicine);  
    navigate("/cart");   
  }}>Add to Cart</button>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default MedicinesPage;
