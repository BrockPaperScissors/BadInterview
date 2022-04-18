import { Link, Outlet } from 'react-router-dom';

export default function Nav() {
	return (
		<div className='nav-container'>
			<nav className='nav-nav'>
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
				<Link to='/questions/submit'>
					<button>Submit an interview question!</button>
				</Link>
			</nav>
			<Outlet />
		</div>
	);
}
