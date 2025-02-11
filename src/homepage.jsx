import React from "react";
import { ShoppingCart, UserCircle } from "lucide-react";
import "./common/App.css";


const Homepage = () => {
	return (
		<>
		<div className="container">
			<nav className="navbar">
				<img src="/logo.png" alt="MedHub Logo" className="logo" />

				<div className="search-container">
					<input
						type="text"
						placeholder="Search for medicines..."
						className="search-bar"
					/>
				</div>
				<div className="icons">
					<ShoppingCart className="icon" />
					<UserCircle className="icon" />
				</div>
			</nav>

			<div className="offers-section">
				<img
					src="/offers-banner.jpg"
					alt="Exclusive Medical Offers"
					className="offers-banner"
				/>
			</div>

			<div className="categories">
				<h2>Shop by Category</h2>
				<div className="category-grid">
					{["Medicines", "Wellness", "Medical Devices", "Personal Care"].map(
						(category, index) => (
							<div key={index} className="category-card">
								{category}
							</div>
						)
					)}
				</div>
			</div>

			<footer className="footer">
				<p>&copy; 2025 MedHub. All rights reserved.</p>
			</footer>
		</div>


</>
	);
};

export default Homepage;
