import SeasonButtons from './seasonbuttons';
import AnimeTabs from './animetabs';
import SortSelection from './sortselection';
import { Box, Stack } from '@mui/material';

function Navigation() {
	return (
		<>
			<Stack direction='row' mt='20px'>
				<SeasonButtons />
				<AnimeTabs />
				<SortSelection />
			</Stack>
		</>
	);
}

export default Navigation;
