import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./common/MedicinesPage.css"; // Importing the external CSS file
import Header from "./Header"; // Import the Header component
import Footer from "./Footer.jsx";

const medicines = [
	{
		id: 1,
		name: "Paracetamol",
		description: "Pain reliever and fever reducer.",
	},
	{
		id: 2,
		name: "Amoxicillin",
		description: "Antibiotic for bacterial infections.",
	},
	{ id: 3, name: "Cetirizine", description: "Antihistamine for allergies." },
	{
		id: 4,
		name: "Metformin",
		description: "Used to control blood sugar levels.",
	},
	{
		id: 5,
		name: "Ibuprofen",
		description: "Anti-inflammatory and pain reliever.",
	},
	{
		id: 6,
		name: "Aspirin",
		description: "Pain reliever, reduces fever, and prevents blood clots.",
	},
	{
		id: 7,
		name: "Loratadine",
		description: "Antihistamine for allergy relief.",
	},
	{
		id: 8,
		name: "Omeprazole",
		description: "Reduces stomach acid, used for acid reflux.",
	},
	{
		id: 9,
		name: "Atorvastatin",
		description: "Lowers cholesterol and triglyceride levels.",
	},
	{
		id: 10,
		name: "Losartan",
		description: "Used to treat high blood pressure.",
	},
	{
		id: 11,
		name: "Ranitidine",
		description: "Reduces stomach acid production.",
	},
	{
		id: 12,
		name: "Levothyroxine",
		description: "Treats hypothyroidism (low thyroid hormone levels).",
	},
	{
		id: 13,
		name: "Hydrochlorothiazide",
		description: "Diuretic used to treat high blood pressure.",
	},
	{
		id: 14,
		name: "Doxycycline",
		description: "Antibiotic used for bacterial infections.",
	},
	{
		id: 15,
		name: "Prednisone",
		description: "Steroid used to reduce inflammation.",
	},
	{
		id: 16,
		name: "Salbutamol",
		description: "Relieves asthma and bronchospasm symptoms.",
	},
	{
		id: 17,
		name: "Montelukast",
		description: "Prevents asthma attacks and treats allergies.",
	},
	{
		id: 18,
		name: "Warfarin",
		description: "Blood thinner used to prevent blood clots.",
	},
	{
		id: 19,
		name: "Ciprofloxacin",
		description: "Broad-spectrum antibiotic for bacterial infections.",
	},
	{
		id: 20,
		name: "Amlodipine",
		description: "Treats high blood pressure and chest pain.",
	},
	{
		id: 21,
		name: "Metoprolol",
		description: "Beta-blocker for high blood pressure and heart issues.",
	},
	{
		id: 22,
		name: "Clopidogrel",
		description: "Prevents blood clots in heart disease patients.",
	},
	{
		id: 23,
		name: "Fluconazole",
		description: "Antifungal medication for yeast infections.",
	},
	{
		id: 24,
		name: "Azithromycin",
		description: "Antibiotic for respiratory and skin infections.",
	},
	{
		id: 25,
		name: "Duloxetine",
		description: "Used to treat depression and anxiety.",
	},
	{
		id: 26,
		name: "Sertraline",
		description: "Antidepressant used for anxiety and depression.",
	},
	{
		id: 27,
		name: "Tramadol",
		description: "Painkiller for moderate to severe pain.",
	},
	{
		id: 28,
		name: "Gabapentin",
		description: "Used for nerve pain and seizures.",
	},
	{
		id: 29,
		name: "Pregabalin",
		description: "Treats nerve pain, epilepsy, and anxiety.",
	},
	{
		id: 30,
		name: "Furosemide",
		description: "Diuretic for fluid retention and high blood pressure.",
	},
	{
		id: 31,
		name: "Methotrexate",
		description: "Used for cancer, arthritis, and autoimmune diseases.",
	},
	{
		id: 32,
		name: "Spironolactone",
		description: "Diuretic used for heart failure and acne.",
	},
	{
		id: 33,
		name: "Bisoprolol",
		description: "Beta-blocker for heart conditions and high blood pressure.",
	},
	{
		id: 34,
		name: "Risperidone",
		description: "Antipsychotic used for schizophrenia and bipolar disorder.",
	},
	{
		id: 35,
		name: "Quetiapine",
		description: "Antipsychotic used for bipolar disorder and depression.",
	},
	{
		id: 36,
		name: "Insulin",
		description: "Used to manage diabetes by controlling blood sugar levels.",
	},
	{
		id: 37,
		name: "Topiramate",
		description: "Used for epilepsy and migraine prevention.",
	},
	{
		id: 38,
		name: "Budesonide",
		description: "Steroid used for asthma and inflammatory bowel disease.",
	},
	{
		id: 39,
		name: "Esomeprazole",
		description: "Reduces stomach acid for GERD and ulcers.",
	},
	{
		id: 40,
		name: "Tamsulosin",
		description: "Used to treat enlarged prostate in men.",
	},
	{ id: 41, name: "Vardenafil", description: "Treats erectile dysfunction." },
	{
		id: 42,
		name: "Sildenafil",
		description: "Used for erectile dysfunction and pulmonary hypertension.",
	},
	{
		id: 43,
		name: "Bupropion",
		description: "Antidepressant and smoking cessation aid.",
	},
	{
		id: 44,
		name: "Venlafaxine",
		description: "Used to treat depression and anxiety disorders.",
	},
	{
		id: 45,
		name: "Trazodone",
		description: "Antidepressant also used for insomnia.",
	},
	{
		id: 46,
		name: "Mirtazapine",
		description: "Used to treat major depressive disorder.",
	},
	{
		id: 47,
		name: "Lisinopril",
		description: "ACE inhibitor used for high blood pressure.",
	},
	{
		id: 48,
		name: "Digoxin",
		description: "Used for heart failure and irregular heartbeat.",
	},
	{
		id: 49,
		name: "Levofloxacin",
		description: "Antibiotic for bacterial infections.",
	},
	{
		id: 50,
		name: "Ondansetron",
		description: "Prevents nausea and vomiting from chemotherapy.",
	},
];

const MedicinesPage = () => {
	const [searchItem, setSearchItem] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(medicines);

	// Function to handle search input
	const handleInputChange = (e) => {
		const searchTerm = e.target.value;
		setSearchItem(searchTerm);

		// Filter medicines based on search term
		const filteredItems = medicines.filter((medicine) =>
			medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setFilteredUsers(filteredItems);
	};

	return (
		<div className="container">
			{/* Pass search state & function to Header */}
			<Header searchItem={searchItem} handleInputChange={handleInputChange} />
			<h1 className="title">Medicines</h1>
			{/* Medicines Grid */}
			<div className="medicine-grid">
				{filteredUsers.length > 0 ? (
					filteredUsers.map((medicine) => (
						<div key={medicine.id} className="medicine-card">
							<h2>{medicine.name}</h2>
							<p>{medicine.description}</p>
						</div>
					))
				) : (
					<p className="no-results">No medicines found.</p>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default MedicinesPage;
