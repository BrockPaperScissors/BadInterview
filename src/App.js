import React, { useState } from 'react';

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
import SubmitQuestion from './components/SubmitQuestion/SubmitQuestion';
// import SessionList from './containers/SessionList';
// import SessionDetail from './containers/SessionDetails';

function App() {
	let sessionId = '';
	return (
		<>
			{/* <SessionList />
			<hr />
			<SessionDetail /> */}
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
					<Route path='/questions/submit' element={<SubmitQuestion />} />
				</Routes>
			</div>
			<footer>
				<nav>Links/Information</nav>
			</footer>
		</>
	);
}

export default App;
