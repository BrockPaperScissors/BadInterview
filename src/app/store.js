import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import SessionBP from '../reducers/reducerSession';

export const store = configureStore({
	reducer: {
		// counter: counterReducer,
		session: SessionBP,
	},
});
