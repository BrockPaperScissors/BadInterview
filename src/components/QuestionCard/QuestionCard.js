import QuestionForm from '../QuestionForm/QuestionForm';

export default function QuestionCard() {
	return (
		<div>
			<div>
				<h2>Question #:</h2>
			</div>
			<div>
				<QuestionForm />
			</div>
			<div>
				<h2>TIMER:</h2>
			</div>
		</div>
	);
}
