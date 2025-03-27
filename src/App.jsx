import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Login from "./login";
import Signup from "./signup";
import MedicinesPage from "./MedicinesPage";
import Wellness from "./Wellness";
import MedicalDevices from "./MedicalDevices";
import PersonalCare from "./PersonalCare";
import "./common/index.css";
import Multivitamins from "./multivitamins";
import { CartProvider } from "react-use-cart";
import Cart from "./cart";
import Chat from "./chat";
import Checkout from "./checkout";

ReactDOM.createRoot(document.getElementById("root")).render(
	<CartProvider>
		<Router>
			<Routes>
				<Route path="/home" element={<Homepage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/medicines" element={<MedicinesPage />} />
				<Route path="/wellness" element={<Wellness />} />
				<Route path="/medical-devices" element={<MedicalDevices />} />
				<Route path="/personal-care" element={<PersonalCare />} />
				<Route path="/multivitamins" element={<Multivitamins />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/chat" element={<Chat />} />
			</Routes>
		</Router>
	</CartProvider>
);
