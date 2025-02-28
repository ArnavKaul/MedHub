import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./common/MedicineDetailsPage.css";

const medicines = [
	{
		id: 1,
		name: "Paracetamol",
		description: "Pain reliever and fever reducer.",
		price: "$5",
		image: "/images/medicines/paracetamol.jpg",
		usage: "Take one tablet every 6 hours as needed for pain or fever.",
		sideEffects: "Possible nausea, dizziness, or rash.",
		moreInfo:
			"Paracetamol is commonly used for mild to moderate pain relief and fever reduction. It works by inhibiting the production of prostaglandins in the brain. It is available over the counter and is considered safe when taken as directed. Avoid excessive use to prevent liver damage.",
	},
	{
		id: 2,
		name: "Amoxicillin",
		description: "Antibiotic for bacterial infections.",
		price: "$10",
		image: "/images/medicines/amoxicillin.jpg",
		usage: "Take as prescribed by a doctor, usually every 8 or 12 hours.",
		sideEffects: "May cause nausea, diarrhea, or skin rash.",
		moreInfo:
			"Amoxicillin is a commonly used antibiotic in the penicillin family. It is effective against many bacterial infections, including respiratory tract infections, ear infections, and urinary tract infections.",
	},
	{
		id: 3,
		name: "Cetirizine",
		description: "Antihistamine for allergies.",
		price: "$8",
		image: "/images/medicines/cetirizine.jpg",
		usage: "Take once daily for allergy relief.",
		sideEffects: "Drowsiness, dry mouth, or headache.",
		moreInfo:
			"Cetirizine is an antihistamine used to treat allergy symptoms such as sneezing, runny nose, and itchy eyes. It is available over the counter and is less likely to cause drowsiness than older antihistamines.",
	},
	{
		id: 4,
		name: "Metformin",
		description: "Used to control blood sugar levels.",
		price: "$12",
		image: "/images/medicines/metformin.jpg",
		usage: "Take once or twice daily with meals as prescribed.",
		sideEffects: "Nausea, diarrhea, and stomach upset.",
		moreInfo:
			"Metformin is commonly used for type 2 diabetes management. It helps control blood sugar levels by improving insulin sensitivity. It is considered a first-line treatment for diabetes.",
	},
	{
		id: 5,
		name: "Ibuprofen",
		description: "Anti-inflammatory and pain reliever.",
		price: "$7",
		image: "/images/medicines/ibuprofen.jpg",
		usage: "Take every 4-6 hours as needed for pain or inflammation.",
		sideEffects: "Stomach pain, heartburn, or nausea.",
		moreInfo:
			"Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever. It should be taken with food to minimize stomach irritation.",
	},
	{
		id: 6,
		name: "Aspirin",
		description: "Pain reliever, reduces fever, and prevents blood clots.",
		price: "$6",
		image: "/images/medicines/aspirin.jpg",
		usage: "Take once daily for heart health or as needed for pain.",
		sideEffects: "Stomach upset, bleeding risk, or nausea.",
		moreInfo:
			"Aspirin is widely used for pain relief and fever reduction. In lower doses, it is also used as a blood thinner to prevent heart attacks and strokes.",
	},
	{
		id: 7,
		name: "Loratadine",
		description: "Antihistamine for allergy relief.",
		price: "$9",
		image: "/images/medicines/loratadine.jpg",
		usage: "Take once daily for seasonal allergies.",
		sideEffects: "Dry mouth, headache, or drowsiness.",
		moreInfo:
			"Loratadine is a second-generation antihistamine that provides relief from allergic reactions such as hay fever and hives with minimal drowsiness.",
	},
	{
		id: 8,
		name: "Omeprazole",
		description: "Reduces stomach acid, used for acid reflux.",
		price: "$15",
		image: "/images/medicines/omeprazole.jpg",
		usage: "Take once daily before meals for acid reflux or ulcers.",
		sideEffects: "Headache, nausea, or diarrhea.",
		moreInfo:
			"Omeprazole is a proton pump inhibitor (PPI) that helps reduce stomach acid. It is commonly used for treating GERD, stomach ulcers, and acid reflux.",
	},
	{
		id: 9,
		name: "Atorvastatin",
		description: "Lowers cholesterol and triglyceride levels.",
		price: "$20",
		image: "/images/medicines/atorvastatin.jpg",
		usage: "Take once daily in the evening.",
		sideEffects: "Muscle pain, digestive issues, or headache.",
		moreInfo:
			"Atorvastatin is a statin used to lower bad cholesterol and triglycerides, reducing the risk of heart disease and stroke.",
	},
	{
		id: 10,
		name: "Losartan",
		description: "Used to treat high blood pressure.",
		price: "$18",
		image: "/images/medicines/losartan.jpg",
		usage: "Take once daily as prescribed.",
		sideEffects: "Dizziness, fatigue, or increased potassium levels.",
		moreInfo:
			"Losartan is an angiotensin receptor blocker (ARB) used to treat high blood pressure and protect the kidneys in diabetic patients.",
	},
];

const MedicineDetailsPage = () => {
	const { id } = useParams();
	const medicine = medicines.find((med) => med.id === parseInt(id));

	if (!medicine) {
		return <h2>Medicine not found</h2>;
	}

	return (
		<div className="medicine-details-container">
			<Header />
			<div className="medicine-details">
				<img
					src={medicine.image}
					alt={medicine.name}
					className="medicine-image"
				/>
				<h1>{medicine.name}</h1>
				<p>
					<strong>Description:</strong> {medicine.description}
				</p>
				<p>
					<strong>Price:</strong> {medicine.price}
				</p>
				<p>
					<strong>Usage:</strong> {medicine.usage}
				</p>
				<p>
					<strong>Side Effects:</strong> {medicine.sideEffects}
				</p>
				<p>
					<strong>More Information:</strong> {medicine.moreInfo}
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default MedicineDetailsPage;
