import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import "./common/cart.css";
import "./common/receipt.css";
import Header from "./Header";
import Footer from "./Footer.jsx";
import { useNavigate } from "react-router-dom";

const Receipt = () => {
	const navigate = useNavigate();
	const { items, cartTotal } = useCart();
	useEffect(() => {
		const timer = setTimeout(() => {
			navigate("/home");
		}, 5000);

		return () => clearTimeout(timer); // Clean up the timer on component unmount
	}, [navigate]);

	return (
		<div className="container">
			<Header />
			<h1 className="receipt-h1">Receipt</h1>

			{items.length === 0 ? (
				<p className="receipt-p">0</p>
			) : (
				<div>
					<ul>
						{items.map((item) => (
							<li key={item.id} className="receipt-item">
								<div className="receipt-item-details">
									<h2 className="receipt-h2">{item.name}</h2>
									<p className="receipt-p">Price: ${item.price}</p>
									<p className="receipt-p">Quantity: {item.quantity}</p>
									<p className="receipt-p">
										Subtotal: ${item.price * item.quantity}
									</p>
									<hr />
								</div>
							</li>
						))}
					</ul>
					<h2 className="receipt-total">Total: ${cartTotal}</h2>

					<h2 className="receipt-total">THANK YOU FOR YOUR PAYMENT :)</h2>
				</div>
			)}

			<Footer />
		</div>
	);
};

export default Receipt;
