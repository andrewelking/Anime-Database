import { Card, CardContent, Grid } from '@mui/material';
import Image from 'next/image';

function AnimeCard({ images, title, studios, episodes, duration, synopsis }) {
	return (
		<Grid item container xs={4}>
			<Card
				variant='outlined'
				sx={{ height: '350px', width: '100%' }}>
				<CardContent
					sx={{
						height: '100%',
					}}>
					<Grid
						item
						container
						height='100%'
						gap={4}>
						<Grid
							item
							position='relative'
							xs={4}
							height='100%'>
							<Image
								src={images}
								alt='anime-picture'
								layout='fill'
							/>
						</Grid>
						<Grid
							item
							container
							direction='column'
							xs={7}
							gap={2}
							height='100%'>
							<Grid
								item
								xs={1}
								overflow='hidden'>
								<h3>{title}</h3>
							</Grid>
							<Grid item xs={1}>
								<p>{studios}</p>
							</Grid>
							<Grid item xs={1}>
								<p>
									{
										episodes
									}{' '}
									x{' '}
									{
										duration
									}
								</p>
							</Grid>
							<Grid
								item
								overflow='scroll'
								xs={6.5}
								sx={{
									scrollbarWidth:
										'none',
								}}>
								<p>
									{
										synopsis
									}
								</p>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default AnimeCard;
