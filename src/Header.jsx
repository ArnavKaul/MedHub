import React from "react";
import { ShoppingCart, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "./common/App.css"; // Ensure CSS is properly linked

const Header = ({ searchItem, handleInputChange }) => {
	return (
		<nav className="navbar">
			<Link to="/home">
				<img src="/logo.png" alt="MedHub Logo" className="logo" />
			</Link>

			{/* Search Bar */}
			<div className="search-container">
				<input
					type="text"
					value={searchItem}
					onChange={handleInputChange}
					placeholder="Search for medicines..."
					className="search-bar"
				/>
			</div>

			{/* Icons for Cart and User */}
			<div className="icons">
				<ShoppingCart className="icon" />

				<UserCircle className="icon" />
			</div>
		</nav>
	);
};

export default Header;
