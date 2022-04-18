import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../../App';
export default function QuestionCard() {
	let addQuestion = [];
	let randomQuestions = [];
	let responseArray = [];
	let navigate = useNavigate();

	const { session, questions, setSession } = useContext(SessionContext);

	useEffect(() => {
		if (questions) {
			addQuestion = [...session.sessionQuestions, ...questions];

			while (randomQuestions.length < session.numQuestions) {
				randomQuestions.push(
					addQuestion[Math.floor(Math.random() * session.numQuestions)]
				);
				console.log(
					addQuestion[Math.floor(Math.random() * session.numQuestions)]
				);

				console.log(randomQuestions);
			}
			setSession({ ...session, sessionQuestions: randomQuestions });
		}
		console.log(session.sessionResponses);
	}, [questions]);

	function handleSubmit(e) {
		e.preventDefault();

		console.log(session.sessionQuestions.length);
		console.log(responseArray.length);
	}
	function handleChange(e) {
		responseArray[e.target.id] = e.target.value;

		console.log(responseArray);
	}

	function handleFinish() {
		setSession({ ...session, sessionResponses: responseArray });

		setTimeout(() => {
			navigate(`/review/session/${session.sessionId}`);
		}, 2000);
	}

	return (
		<>
			<div className='question'>
				{session &&
					session.sessionQuestions.map((question, index) => (
						<div key={index} className='question-container'>
							<div className='question-card-header'>
								<h1 id='Q'>Question: {index + 1}</h1>
								<h2>Subject: {question.subject}</h2>
								<p>Interviewer: {question.body}</p>
							</div>
							<form action='' onSubmit={handleSubmit} className='question-form'>
								<div className='question-input'>
									<textarea
										row='3'
										col='25'
										placeholder='Type your answer...'
										onChange={handleChange}
										id={index}
										required
									/>
									<button type='submit'>Submit</button>
								</div>
							</form>
						</div>
					))}

				<div className='question-finish'>
					<button onClick={handleFinish}>FINISH</button>
				</div>
			</div>
		</>
	);
}
