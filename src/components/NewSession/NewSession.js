import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function NewSession() {
	const navigate = useNavigate();
	const axios = require('axios').default;
	let sessionId = 0;
	const [session, setSession] = useState({
		id: 0,
		sessionName: '',
		numQuestions: 0,
		sessionQuestions: [''],
		sessionResponses: [''],
	});

	function generateSessionID() {
		return (sessionId = Math.floor(Math.random() * 100000000 + 10000000));
	}

	function handleClick() {
		console.log(session);
		generateSessionID();
		console.log(sessionId);
		axios
			.get('https://badinterviewapi.herokuapp.com/questions', session)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					navigate(`/sessions/${sessionId}`);
				}
			});
	}

	return (
		<div>
			<div>
				<h2>Get Started:</h2>
				<p>To get started..</p>
			</div>
			<Link to={`/sessions/${sessionId}`}>
				<button onClick={handleClick}>NEW SESSION</button>
			</Link>
		</div>
	);
}
