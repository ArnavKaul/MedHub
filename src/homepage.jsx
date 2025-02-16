import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header"; // Import the Header component
import Footer from "./Footer.jsx";
import "./common/App.css";

const Homepage = () => {
	return (
		<>
			<div className="container">
				<Header /> {/* Using the Header component */}
				{/* <div className="offers-section">
				<img
					src="/offers-banner.jpg"
					alt="Exclusive Medical Offers"
					className="offers-banner"
				/> */}
				{/* </div> */}
				<div className="categories">
					<h2>Shop by Category</h2>
					<div className="category-grid">
						{[
							{ name: "Medicines", link: "/medicines" },
							{ name: "Wellness", link: "/wellness" },
							{ name: "Medical Devices", link: "/medical-devices" },
							{ name: "Personal Care", link: "/personal-care" },
						].map((category, index) => (
							<Link to={category.link} key={index} className="category-card">
								{category.name}
							</Link>
						))}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Homepage;
