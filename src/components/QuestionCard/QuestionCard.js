import { useContext, useEffect } from 'react';
import { SessionContext } from '../../App';
export default function QuestionCard() {
	let addQuestion = [];
	let randomQuestions = [];

	const { session, questions, setSession } = useContext(SessionContext);
	// console.log(session);
	// console.log(session.sessionQuestions);
	// console.log(questions);

	useEffect(() => {
		if (questions) {
			addQuestion = [...session.sessionQuestions, ...questions];

			while (randomQuestions.length < session.numQuestions) {
				if (
					addQuestion[Math.floor(Math.random() * session.numQuestions)] !== ['']
				) {
					randomQuestions.push(
						addQuestion[Math.floor(Math.random() * session.numQuestions)]
					);
					console.log(
						addQuestion[Math.floor(Math.random() * session.numQuestions)]
					);
				}
				console.log(randomQuestions);
			}
			setSession({ ...session, sessionQuestions: randomQuestions });
		}
	}, [questions]);

	return (
		<>
			<div>
				{session &&
					session.sessionQuestions.map((question, index) => (
						<div key={question._id}>
							<h1>Question: {index + 1}</h1>
							<h2>Subject: {question.subject}</h2>
							<h3> {question.body}</h3>
						</div>
					))}
				<textarea row='3' col='25' />
			</div>
		</>
	);
}

// 	let addQuestion = [
// 		res.data[Math.floor(Math.random() * session.numQuestions)],
// 	];
