import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
	Routes,
	Route,
	Link,
	useNavigate,
	Navigate,
	Redirect,
} from 'react-router-dom';

import QuestionSubject from './components/QuestionSubject/QuestionSubject';
import Session from './components/Session/Session';
import SessionReview from './components/SessionReview/SessionReview';
import Nav from './components/Nav/Nav';
import NewSession from './components/NewSession/NewSession';
import SessionList from './containers/SessionList';

function App() {
	let sessionId = '';
	return (
		<>
			{/* <SessionList /> */}
			<header>
				<div>
					<Link to='/'>
						<h1>BAD INTERVIEW</h1>
					</Link>
				</div>
			</header>
			<div>
				<Routes>
					<Route path='/' element={<Nav />}>
						<Route path='/' element={<NewSession />} />
						<Route path='/questions/:subject' element={<QuestionSubject />} />
					</Route>
					<Route path='/sessions/:id' element={<Session />} />
					<Route path='/review/session/:id' element={<SessionReview />} />
				</Routes>
			</div>
			<footer>
				<nav>Links/Information</nav>
			</footer>
		</>
	);
}

export default App;
