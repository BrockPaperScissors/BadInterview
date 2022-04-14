import { Link } from 'react-router-dom';
export default function Home() {
	const sessionId = '';
	return (
		<>
			<div>
				<header>
					<div>
						<Link to='/'>
							<h1>BAD INTERVIEW</h1>
						</Link>
					</div>
				</header>
				<main>
					<div>
						<nav>
							<Link to='/questions'>
								<li>All Questions</li>
							</Link>
							<Link to='/questions/bq'>
								<li>Behavioral Questions</li>
							</Link>
							<Link to='/questions/gcc'>
								<li>General Coding Concepts</li>
							</Link>
							<Link to='/questions/html'>
								<li>HTML</li>
							</Link>
							<Link to='/questions/css'>
								<li>CSS</li>
							</Link>
							<Link to='/questions/javascript'>
								<li>JavaScript</li>
							</Link>
							<Link to='/questions/python'>
								<li>Python</li>
							</Link>
							<Link to='/questions/react'>
								<li>React</li>
							</Link>
							<Link to='/questions/datastructures'>
								<li>Data Structures</li>
							</Link>
							<Link to='/questions/algorithms'>
								<li>Algorithms</li>
							</Link>
						</nav>
					</div>
					<div>
						<div>
							<h2>Get Started:</h2>
							<p>To get started..</p>
						</div>
						<Link to={`/sessions/${sessionId}`}>
							<button>NEW SESSION</button>
						</Link>
					</div>
				</main>
				<footer>
					<nav>Links/Information</nav>
				</footer>
			</div>
		</>
	);
}
