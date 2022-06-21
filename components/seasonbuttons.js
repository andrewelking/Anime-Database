import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Grid, IconButton, Stack } from '@mui/material';
import { useContext } from 'react';
import myContext from '../myContext';

function SeasonButtons() {
	const myCtx = useContext(myContext);

	const handleClick = (e) => {
		if (e.target.id == 'left-button') {
			if (myCtx.currentMonth > 3) {
				myCtx.setCurrentMonth(myCtx.currentMonth - 3);
			} else {
				myCtx.setCurrentMonth(myCtx.currentMonth + 9);
				myCtx.setCurrentYear(myCtx.currentYear - 1);
			}
		} else {
			if (myCtx.currentMonth < 10) {
				myCtx.setCurrentMonth(myCtx.currentMonth + 3);
			} else {
				myCtx.setCurrentMonth(myCtx.currentMonth - 9);
				myCtx.setCurrentYear(myCtx.currentYear + 1);
			}
		}
	};

	return (
		<Grid container align='center' alignItems='center'>
			<Grid item xs={2}>
				<IconButton size='large' onClick={handleClick}>
					<ChevronLeft
						fontSize='inherit'
						id='left-button'></ChevronLeft>
				</IconButton>
			</Grid>
			<Grid item xs={8}>
				<h1>
					{myCtx.currentSeason}{' '}
					{myCtx.currentYear}
				</h1>
			</Grid>
			<Grid item xs={2}>
				<IconButton size='large' onClick={handleClick}>
					<ChevronRight
						fontSize='inherit'
						id='right-button'></ChevronRight>
				</IconButton>
			</Grid>
		</Grid>
	);
}

export default SeasonButtons;
