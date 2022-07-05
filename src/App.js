import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const baseUrl = "https://api.adviceslip.com/advice";
	const [advice, setAdvice] = useState([]);

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

	useEffect(() => {
		getAdvice();
	}, []);

	return (
		<div className="app">
			<div className="card">
				<h1 className="heading">{advice}</h1>
				<button className="btn_advice" onClick={getAdvice}>
					Give Me Advice!
				</button>
			</div>
		</div>
	);
}

export default App;
