import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../../App';

export default function SessionReview() {
	const { session } = useContext(SessionContext);

	useEffect(() => {
		console.log(session.sessionId);
		console.log(session);
		console.log('post sent');

		axios
			.post('https://badinterviewapi.herokuapp.com/sessions', session)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<div className='review'>
				{session &&
					session.sessionQuestions.map((sessionQuestions, index) => (
						<div key={index}>
							<div className='review-container'>
								<h1 className='review-number'>Question: {index + 1}</h1>
								<h2 className='review-subject'>
									Subject: {sessionQuestions.subject}
								</h2>
								<h3 className='review-question'>
									Interviewer: {sessionQuestions.body}
								</h3>
								<p className='review-response'>
									Your response: {session.sessionResponses[index]}
								</p>
							</div>
						</div>
					))}
			</div>
		</>
	);
}
