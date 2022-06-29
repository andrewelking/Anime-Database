import SeasonButtons from './seasonbuttons';
import AnimeTypeTabs from './animetypetabs';
import SortSelection from './sortselection';
import { Grid } from '@mui/material';

function Filter() {
	return (
		<>
			<Grid
				container
				alignItems='center'
				columns={14}
				mt='20px'>
				<Grid item xs={3}>
					<SeasonButtons />
				</Grid>
				<Grid item xs={8}>
					<AnimeTypeTabs />
				</Grid>
				<Grid item xs={3}>
					<SortSelection />
				</Grid>
			</Grid>
		</>
	);
}

export default Filter;
