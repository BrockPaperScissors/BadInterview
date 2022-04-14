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
import Home from './components/Home/Home';
import QuestionSubject from './components/QuestionSubject/QuestionSubject';
import Session from './components/Session/Session';
import SessionReview from './components/SessionReview/SessionReview';

function App() {
	return (
		<div>
			<Home />
			<Routes>
				{/* <Route path='/' element={<Home />} /> */}
				<Route path='/questions/:id' element={<QuestionSubject />} />
				<Route path='/sessions/:id' element={<Session />} />
				<Route path='/review/session/:id' element={<SessionReview />} />
			</Routes>
		</div>
	);
}

export default App;
