import React, { useState } from "react";
import "./common/multivitamins.css";
import Header from "./Header";
import Footer from "./Footer.jsx";
import ReactStars from "react-rating-stars-component";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Multivitamins = () => {
	const [rating, setRating] = useState(0);
	const [reviewText, setReviewText] = useState("");
	const [reviews, setReviews] = useState([]);

	const handleRating = (rate) => {
		setRating(rate);
	};

	const handleReset = () => {
		setRating(0);
		setReviewText("");
	};

	const handleReview = () => {
		if (rating > 0 && reviewText.trim() !== "") {
			setReviews([...reviews, { rating, text: reviewText }]);
			setReviewText("");
			setRating(0);
		}
	};

	return (
		<div className="container">
			<Header />
			<h1 className="multivitamins-h1">Wellness Products</h1>
			<h3 className="multivitamins-h3">Multivitamin by Revicon</h3>
			<img
				className="multivitamins-img"
				src={"./images/Multivitamins.jpeg"}
				alt="Multivitamins"
			/>

			<p className="multivitamins-p">
				Multivitamins are dietary supplements designed to provide essential
				vitamins and minerals that may be lacking in a person's daily diet.
			</p>

			<button className="add-to-cart" id="btn-multivitamins">
				Add to Cart
			</button>
			<h2 className="multivitamins-h2">User Reviews</h2>
			<hr />

			<ReactStars
				count={5}
				value={rating}
				onChange={handleRating}
				size={30}
				activeColor="gold"
				edit={true}
			/>
			<p className="multivitamins-p">
				{rating > 0 ? `You rated: ${rating} stars` : "Click to rate"}
			</p>

			<TextField
				fullWidth
				multiline
				rows={3}
				variant="outlined"
				placeholder="Write your review..."
				value={reviewText}
				onChange={(e) => setReviewText(e.target.value)}
				sx={{ mt: 2, width: "40%" }}
			/>

			<div style={{ marginTop: "10px" }}>
				<Button variant="contained" color="primary" onClick={handleReview}>
					Submit Review
				</Button>
				<Button
					variant="outlined"
					color="secondary"
					onClick={handleReset}
					style={{ marginLeft: "10px" }}
				>
					Reset
				</Button>
			</div>

			<div className="reviews-section" style={{ marginTop: "20px" }}>
				{reviews.length > 0 && (
					<>
						<h3 className="multivitamins-h3">Recent Reviews</h3>
						{reviews.map((review, index) => (
							<div
								key={index}
								style={{
									padding: "10px",
									border: "1px solid #ddd",
									borderRadius: "5px",
									marginBottom: "10px",
								}}
							>
								<ReactStars
									count={5}
									value={review.rating}
									size={24}
									activeColor="gold"
									edit={false}
								/>
								<p className="multivitamins-p">{`Rated: ${review.rating} stars`}</p>
								<p className="multivitamins-p">{review.text}</p>
							</div>
						))}
					</>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default Multivitamins;
