import { Link } from 'react-router-dom';
export default function NewSession() {
	let sessionId = '';
	return (
		<div>
			<div>
				<h2>Get Started:</h2>
				<p>To get started..</p>
			</div>
			<Link to={`/sessions/${sessionId}`}>
				<button>NEW SESSION</button>
			</Link>
		</div>
	);
}
