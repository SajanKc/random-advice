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

	return (
		<div className="app">
			{advice.length !== 0 ? (
				<div className="card">
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
