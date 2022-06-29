import { createSlice } from '@reduxjs/toolkit';

let date = new Date();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let seasons = {
	Winter: [1, 2, 3],
	Spring: [4, 5, 6],
	Summer: [7, 8, 9],
	Fall: [10, 11, 12],
};
let currentSeason;

for (let i in seasons) {
	if (seasons[i].includes(month)) currentSeason = i;
}

export const seasonSlice = createSlice({
	name: 'season',
	initialState: {
		month: month,
		year: year,
		season: currentSeason,
		animeList: [],
	},
	reducers: {
		backwardSeason: (state) => {
			if (state.month > 3) {
				state.month -= 3;
			} else {
				state.month += 9;
				state.year -= 1;
			}
			for (let i in seasons) {
				if (seasons[i].includes(state.month))
					state.season = i;
			}
		},
		forwardSeason: (state) => {
			if (state.month < 10) {
				state.month += 3;
			} else {
				state.month -= 9;
				state.year += 1;
			}
			for (let i in seasons) {
				if (seasons[i].includes(state.month))
					state.season = i;
			}
		},
		setAnimeList: (state, action) => {
			state.animeList = action.payload;
		},
	},
});

export const { backwardSeason, forwardSeason, setAnimeList } =
	seasonSlice.actions;

export default seasonSlice.reducer;
