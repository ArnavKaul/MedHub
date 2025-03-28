import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import "./common/checkout.css";
import Header from "./Header";
import Footer from "./Footer.jsx";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const defaultCenter = [20.5937, 78.9629]; // Default center (India)

const LocationMarker = ({ setLocation, setFormData }) => {
	useMapEvents({
		click: async (e) => {
			const { lat, lng } = e.latlng;
			setLocation([lat, lng]); // Move marker

			try {
				const response = await axios.get(
					`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
				);
				const address = response.data.display_name || "Address not found";
				setFormData((prev) => ({ ...prev, address })); // Update the address field
			} catch (error) {
				console.error("Error fetching address:", error);
			}
		},
	});

	return null;
};
const Checkout = () => {
	const { items, cartTotal, emptyCart } = useCart();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		paymentMethod: "COD",
	});
	const [errors, setErrors] = useState({});
	const [location, setLocation] = useState(defaultCenter);

	// Handle input changes
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Simple validation function
	const validateForm = () => {
		let newErrors = {};
		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (
			!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
		)
			newErrors.email = "Enter a valid email";
		if (!formData.phone.match(/^\d{10}$/))
			newErrors.phone = "Enter a valid 10-digit phone number";
		if (formData.address.length < 5)
			newErrors.address = "Address must be at least 5 characters";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			alert(
				`Order placed for ${formData.name} at ${formData.address}\nLocation: ${location[0]}, ${location[1]}`
			);
			// emptyCart();
			navigate("/payment",{ state: { totalAmount: cartTotal + 5 }});
		}
	};

	return (
		<div className="checkout-container">
			<h2 className="head">Billing & Shipping Details</h2>
			<Header />
			<h2 className="head">Billing & Shipping Details</h2>
			<div className="checkout-content">
				{/* Left: Billing & Shipping Details */}
				<div className="checkout-form">
					<form onSubmit={handleSubmit}>
						<label>Full Name:</label> <br />
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						{errors.name && <p className="error">{errors.name}</p>}
						<br />
						<label>Email:</label> <br />
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						{errors.email && <p className="error">{errors.email}</p>}
						<br />
						<label>Phone:</label> <br />
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							required
						/>
						{errors.phone && <p className="error">{errors.phone}</p>}
						<br />
						<label>Shipping Address:</label>
						<textarea
							name="address"
							value={formData.address}
							onChange={handleChange}
							required
						/>
						{errors.address && <p className="error">{errors.address}</p>}
						<label>Payment Method:</label>
						<select
							name="paymentMethod"
							value={formData.paymentMethod}
							onChange={handleChange}
						>
							<option value="COD">Cash on Delivery</option>
							<option value="Credit Card">Credit Card</option>
							<option value="UPI">UPI</option>
							<option value="Net Banking">Net Banking</option>
						</select>
					</form>
				</div>

				{/* Right: Order Summary & Map */}
				<div className="checkout-summary">
					<h2>Order Summary</h2>
					{items.length > 0 ? (
						items.map((item, index) => (
							<div className="order-item" key={index}>
								<p>
									{item.name} (x{item.quantity}) - ${item.price * item.quantity}
								</p>
							</div>
						))
					) : (
						<p>No items in cart.</p>
					)}
					<p>Subtotal: ${cartTotal}</p>
					<p>Shipping: $5</p>
					<hr />
					<h3>Total: ${cartTotal + 5}</h3>

					{/* OpenStreetMap Integration */}
					<h3>Select Your Delivery Location</h3>
					<MapContainer
						center={location}
						zoom={13}
						style={{ height: "300px", width: "100%" }}
					>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
						<Marker position={location} key={location.toString()} />
						<LocationMarker
							setLocation={setLocation}
							setFormData={setFormData}
						/>
					</MapContainer>

					{/* Place Order Button */}
					<button type="submit" onClick={handleSubmit}>
						Place Order
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Checkout;
