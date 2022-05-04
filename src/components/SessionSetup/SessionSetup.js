import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SessionContext } from "../../App.js";

export default function SessionSetup() {
	let [startNum, setStartNum] = useState();
	const { session, setSession, questions, setQuestions } =
		useContext(SessionContext);
	const navigate = useNavigate();
	const [errorState, setErrorState] = useState(false);

	function generateSessionID() {
		let newId = Math.floor(Math.random() * 100000000 + 10000000);
		setSession({
			...session,
			sessionId: newId,
		});

		return session;
	}

	function handleChange(e) {
		setSession({ ...session, [e.target.id]: e.target.value });
	}

	useEffect(() => {
		if (session.sessionId > 0) {
			axios
				.get("https://badinterviewapi.herokuapp.com/questions")
				.then((res) => {
					setQuestions(res.data);
				})
				.then(() => {
					navigate(`/sessions/${session.sessionId}`);
				})
				.catch((error) => {
					console.log(error);
					setErrorState(true);
				});
		}
	}, [session.sessionId]);

	function handleSubmit(e) {
		e.preventDefault();
		generateSessionID();
	}
	return (
		<div className="session-review">
			{errorState && <div>ISSUE WITH NETWORK REQUEST, TRY LATER</div>}
			<form
				action=""
				onSubmit={handleSubmit}
				className="session-review-container"
			>
				<div>
					<label htmlFor="numQuestions">Select an amount of questions:</label>
					<input
						onChange={handleChange}
						list="amountValue"
						value={startNum}
						id="numQuestions"
						placeholder="Select number of questions"
						required
					/>
					<datalist id="amountValue">
						<option value="1"></option>
						<option value="2"></option>
						<option value="3"></option>
						<option value="4"></option>
						<option value="5"></option>
						<option value="6"></option>
						<option value="7"></option>
						<option value="8"></option>
						<option value="9"></option>
						<option value="10"></option>
					</datalist>
				</div>
				<div>
					<label htmlFor="sessionName">Name your session:</label>
					<input
						type="text"
						id="sessionName"
						onChange={handleChange}
						value={session.sessionName}
						placeholder="session name..."
						required
					/>
				</div>

				<button type="submit" className="session-setup-button">
					Start Session
				</button>
			</form>
		</div>
	);
}
