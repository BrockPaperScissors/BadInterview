import axios from 'axios';
import { useEffect, useState } from 'react';
import SessionSetup from '../components/SessionSetup/SessionSetup';

export default function QuestionList() {
	const [subjectDisplay, setSubjectDisplay] = useState('');

	async function getSubject() {
		try {
			const subject = axios.get(
				`https://badinterviewapi.herokuapp.com/questions/${subjectDisplay}`
			);
		} catch (error) {}
	}

	return <h1>hi</h1>;
}
