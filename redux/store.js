import { configureStore } from '@reduxjs/toolkit';
import seasonSlice from './seasonSlice';

const store = configureStore({
	reducer: {
		season: seasonSlice,
	},
});

export default store;
