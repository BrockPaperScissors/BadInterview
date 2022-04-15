import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubmitQuestion() {
	const navigate = useNavigate();
	const axios = require('axios').default;
	const [question, setQuestion] = useState({
		subject: '',
		body: '',
	});

	function handleChange(e) {
		setQuestion({ ...question, [e.target.id]: e.target.value.toLowerCase() });
	}
	function handleSubmit(e) {
		e.preventDefault();
		console.log('submitted', question);
		axios
			.post('https://badinterviewapi.herokuapp.com/questions', question)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					setQuestion({
						subject: '',
						body: '',
					});
					navigate('/');
				} else {
					alert(
						'Ooops, something went wrong with your submission! Please double check both fields and try again!'
					);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}
	return (
		<div>
			<form action='' onSubmit={handleSubmit}>
				<div>
					<div>
						<label htmlFor='subject'>Subject:</label>
					</div>
					<div>
						<input
							onChange={handleChange}
							list='subjects'
							value={question.subject}
							id='subject'
							placeholder='Please choose one'
							required
						/>
						<datalist id='subjects'>
							<option value='Behavioral'></option>
							<option value='General Coding'></option>
							<option value='HTML'></option>
							<option value='CSS'></option>
							<option value='JavaScript'></option>
							<option value='Python'></option>
							<option value='React'></option>
							<option value='Data Structures'></option>
							<option value='Algorithms'></option>
						</datalist>
					</div>
				</div>
				<div>
					<div>
						<label htmlFor='body'>Add Question:</label>
					</div>
					<div>
						<input
							onChange={handleChange}
							type='text'
							id='body'
							placeholder='Insert your question..'
							value={question.body}
						/>
					</div>
				</div>
				<div>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	);
}
