import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { backwardSeason, forwardSeason } from '../redux/seasonSlice';

function SeasonButtons() {
	const dispatch = useDispatch();
	const currentYear = useSelector((state) => state.season.year);
	let currentSeason = useSelector((state) => state.season.season);

	const handleNextSeason = () => {
		dispatch(forwardSeason());
	};

	const handlePreviousSeason = () => {
		dispatch(backwardSeason());
	};

	return (
		<Grid container align='center' alignItems='center'>
			<Grid item xs={2}>
				<IconButton
					size='large'
					onClick={handlePreviousSeason}>
					<ChevronLeft
						fontSize='inherit'
						id='left-button'></ChevronLeft>
				</IconButton>
			</Grid>
			<Grid item xs={8}>
				<h1>
					{currentSeason} {currentYear}
				</h1>
			</Grid>
			<Grid item xs={2}>
				<IconButton
					size='large'
					onClick={handleNextSeason}>
					<ChevronRight
						fontSize='inherit'
						id='right-button'></ChevronRight>
				</IconButton>
			</Grid>
		</Grid>
	);
}

export default SeasonButtons;
