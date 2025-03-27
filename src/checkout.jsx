import React, { useState, useEffect } from "react";
import "./common/checkout.css";
import Header from "./Header";
import Footer from "./Footer.jsx";

const Checkout = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		paymentMethod: "COD",
	});

	// Fetch cart details from local storage or state
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
		setCartItems(storedCart);
	}, []);

	// Calculate total
	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Order placed for ${formData.name} at ${formData.address}`);
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
						<br />

						<label>Email: </label>
						<br />
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<br />
						<label>Phone: </label>
						<br />
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							required
						/>
						<br />
						<label>Shipping Address: </label>
						<textarea
							name="address"
							value={formData.address}
							onChange={handleChange}
							required
						/>
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

				{/* Right: Order Summary & Place Order */}
				<div className="checkout-summary">
					<h2>Order Summary</h2>
					{cartItems.length > 0 ? (
						cartItems.map((item, index) => (
							<div className="order-item" key={index}>
								<p>
									{item.name} (x{item.quantity}) - ${item.price * item.quantity}
								</p>
							</div>
						))
					) : (
						<p>No items in cart.</p>
					)}
					<p>Subtotal: ${calculateTotal()}</p>
					<p>Shipping: $5</p>
					<hr />
					<h3>Total: ${calculateTotal() + 5}</h3>
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
