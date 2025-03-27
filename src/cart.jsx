import { useCart } from "react-use-cart";
import React, { useState } from "react";
import "./common/cart.css";
import Header from "./Header";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
	const { items, updateItemQuantity, removeItem, emptyCart, cartTotal } =
		useCart();

	return (
		<div className="container">
			<Header></Header>
			<h1 className="cart-h1">Your Cart</h1>

			{items.length === 0 ? (
				<p className="cart-p">Your cart is empty.</p>
			) : (
				<>
					<ul>
						{items.map((item) => (
							<li key={item.id} className="cart-item">
								<img
									src={item.image}
									alt={item.name}
									className="cart-item-image"
								/>
								<div className="cart-item-details">
									<h2 className="cart-h2">{item.name}</h2>
									<p className="cart-p">Price: ${item.price}</p>
									<p className="cart-p">Quantity: {item.quantity}</p>
									<button
										id="btn-cart"
										onClick={() =>
											updateItemQuantity(item.id, item.quantity + 1)
										}
									>
										+
									</button>

									<button
										id="btn-cart"
										onClick={() =>
											updateItemQuantity(item.id, item.quantity - 1)
										}
									>
										-
									</button>
									<button id="btn-cart" onClick={() => removeItem(item.id)}>
										Remove
									</button>
									<hr></hr>
								</div>
							</li>
						))}
					</ul>
					<h2 className="cart-h2">Total: ${cartTotal}</h2>
					<button id="btn-cart" onClick={emptyCart}>
						Clear Cart
					</button>
					<Link to="/checkout">
						<button id="btn-checkout">Checkout</button>
					</Link>
				</>
			)}
			<Footer></Footer>
		</div>
	);
};

export default Cart;
