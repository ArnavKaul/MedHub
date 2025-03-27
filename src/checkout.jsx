import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import "./common/checkout.css";
import Header from "./Header";
import Footer from "./Footer.jsx";

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

	// Handle input changes
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Simple validation function
	const validateForm = () => {
		let newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (
			!formData.email.trim() ||
			!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
		) {
			newErrors.email = "Enter a valid email address";
		}

		if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
			newErrors.phone = "Enter a valid 10-digit phone number";
		}

		if (!formData.address.trim() || formData.address.length < 5) {
			newErrors.address = "Address must be at least 5 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			alert(`Order placed for ${formData.name} at ${formData.address}`);
			emptyCart();
			navigate("/home");
		}
	};

	return (
		<div className="checkout-container">
			<Header />

			<div className="checkout-content">
				{/* Left: Billing & Shipping Details */}
				<div className="checkout-form">
					<h2>Billing & Shipping Details</h2>
					<form onSubmit={handleSubmit}>
						<label>Full Name:</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						{errors.name && <p className="error">{errors.name}</p>}
						<br />

						<label>Email: </label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						{errors.email && <p className="error">{errors.email}</p>}
						<br />

						<label>Phone: </label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							required
						/>
						{errors.phone && <p className="error">{errors.phone}</p>}
						<br />

						<label>Shipping Address: </label>
						<textarea
							name="address"
							value={formData.address}
							onChange={handleChange}
							required
						/>
						{errors.address && <p className="error">{errors.address}</p>}
						<br />

						<label>Payment Method</label>
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

				{/* Right: Order Summary */}
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
					<button type="submit" onClick={handleSubmit}>
						Place Order
					</button>
				</div>
			</div>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Checkout;
