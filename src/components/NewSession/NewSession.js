import { Link } from 'react-router-dom';

export default function NewSession() {
	return (
		<div className='newsession'>
			<div className='container'>
				<h2 className='get-started'>Get Started:</h2>
				<p>To get started..</p>
			</div>
			<Link to={`/sessions/sessionsetup`}>
				<button>NEW SESSION</button>
			</Link>
		</div>
	);
}
