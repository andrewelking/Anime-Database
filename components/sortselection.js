import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

function SortSelection() {
	const [sort, setSort] = useState('title (ascending)');

	const handleChange = (event) => {
		setSort(event.target.value);
	};

	return (
		<FormControl sx={{ width: '400px' }}>
			<InputLabel id='demo-simple-select-label'>Sort by</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={sort}
				label='sortby'
				onChange={handleChange}>
				<MenuItem value={'title (ascending)'}>Title (ascending)</MenuItem>
				<MenuItem value={'title (descending)'}>Title (descending)</MenuItem>
				<MenuItem value={'score (ascending)'}>Score (ascending)</MenuItem>
				<MenuItem value={'score (ascending)'}>Score (descending)</MenuItem>
			</Select>
		</FormControl>
	);
}

export default SortSelection;
