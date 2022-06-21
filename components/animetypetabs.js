import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

function AnimeTypeTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Tabs value={value} onChange={handleChange}>
			<Tab label='TV' />
			<Tab label='Movies' />
			<Tab label='OVA &amp; Others' />
			<Tab label='All' />
		</Tabs>
	);
}

export default AnimeTypeTabs;
