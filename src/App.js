import React, { createContext, useContext, useState } from 'react';

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

import SessionReview from './components/SessionReview/SessionReview';
import Nav from './components/Nav/Nav';
import NewSession from './components/NewSession/NewSession';
import SubmitQuestion from './components/SubmitQuestion/SubmitQuestion';
import SessionSetup from './components/SessionSetup/SessionSetup';
import QuestionList from './QuestionList/QuestionList';
import QuestionCard from './components/QuestionCard/QuestionCard';

export const SessionContext = createContext(null);
function App() {
	const [questions, setQuestions] = useState();
	const [session, setSession] = useState({
		sessionId: 0,
		sessionName: '',
		numQuestions: 0,
		sessionQuestions: [],
		sessionResponses: [],
	});

	return (
		<SessionContext.Provider
			value={{
				session,
				setSession,
				questions,
				setQuestions,
			}}>
			<>
				<div className='home'>
					<header className='home-header'>
						<div className='home-title-container'>
							<Link to='/'>
								<h1 className='home-title'>BAD INTERVIEW</h1>
							</Link>
						</div>
					</header>
					<main className='home-main'>
						<div className='home-routes-container'>
							<Routes>
								<Route path='/' element={<Nav />}>
									<Route path='/' element={<NewSession />} />
									<Route
										path='/questions/:subject'
										element={<QuestionSubject />}
									/>
								</Route>
								<Route path='/questions' element={<QuestionList />} />
								<Route path='/sessions/:id' element={<QuestionCard />} />
								<Route path='/review/session/:id' element={<SessionReview />} />
								<Route path='/questions/submit' element={<SubmitQuestion />} />
								<Route
									path='/sessions/sessionsetup'
									element={<SessionSetup />}
								/>
							</Routes>
						</div>
					</main>
					<footer className='home-footer'>
						<Link to='/'>
							<nav className='home-nav'>Links/Information</nav>
						</Link>
					</footer>
				</div>
			</>
		</SessionContext.Provider>
	);
}

export default App;
