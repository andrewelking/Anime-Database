import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

function AnimeTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Tabs value={value} onChange={handleChange} sx={{ width: '1150px' }}>
			<Tab label='TV' />
			<Tab label='Movies' />
			<Tab label='OVA &amp; Others' />
			<Tab label='All' />
		</Tabs>
	);
}

export default AnimeTabs;
