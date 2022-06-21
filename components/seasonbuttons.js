import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, IconButton, Stack } from '@mui/material';

function SeasonButtons() {
	return (
		<Box
			sx={{
				width: '300px',
			}}>
			<Stack direction='row' alignItems='center' spacing={3}>
				<IconButton size='large'>
					<ChevronLeft fontSize='inherit'></ChevronLeft>
				</IconButton>
				<h1>Fall 2021</h1>
				<IconButton size='large'>
					<ChevronRight fontSize='inherit'></ChevronRight>
				</IconButton>
			</Stack>
		</Box>
	);
}

export default SeasonButtons;
