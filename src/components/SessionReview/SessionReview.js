import axios from 'axios';
import { useContext, useEffect } from 'react';
import { SessionContext } from '../../App';

export default function SessionReview() {
	const url = 'url';
	const { session } = useContext(SessionContext);
	useEffect(() => {
		console.log(session.sessionId);
		console.log(session);
		console.log('post sent');
		// axios
		// 	.post('https://badinterviewapi.herokuapp.com/sessions', session)
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	}, [session]);
	return (
		<>
			<div>
				{session &&
					session.sessionQuestions.map((sessionQuestions, index) => (
						<div key={index}>
							<div>
								<h1>Question: {index + 1}</h1>
								<h2>Subject: {sessionQuestions.subject}</h2>
								<p>Response: {session.sessionResponses[index]}</p>
							</div>
						</div>
					))}
			</div>
		</>
	);
}
