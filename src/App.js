import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const baseUrl = "https://api.adviceslip.com/advice";
	const [advice, setAdvice] = useState([]);

	useEffect(() => {
		getAdvice();
	}, []);

	const getAdvice = () => {
		axios.get(baseUrl)
			.then((response) => {
				const { advice } = response.data.slip;
				setAdvice(advice);
			})
			.catch((error) => {
				console.error("Error: ", error);
			});
	};

	const reloadPage = () => {
		window.location.reload();
	};

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(advice);
	};

	return (
		<div className="app">
			{advice.length !== 0 ? (
				<div className="card">
					<button className="btn_copy" onClick={copyToClipboard} title="Copy Text">
						<svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
							/>
						</svg>
					</button>
					<h1 className="heading">{advice}</h1>
					<button className="btn_advice" onClick={getAdvice}>
						Give Me Advice!
					</button>
				</div>
			) : (
				<div className="card">
					<h1 className="heading">Something Went Wrong.</h1>
					<button className="btn_advice" onClick={reloadPage}>
						Refresh
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
