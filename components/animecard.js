import { Card, CardContent, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

function AnimeCard({ image, title, studio, episodes, duration, synopsis }) {
	return (
		<Grid
			item
			xs={4}
			sx={{
				height: '350px',
			}}>
			<Card>
				<CardContent>
					<Grid container item spacing={2}>
						<Grid item xs={4}>
							<Image
								src={image}
								alt='anime-picture'
								width='188px'
								height='188px'
							/>
						</Grid>
						<Grid item xs={8}>
							<Box
								sx={{
									overflow: 'hidden',
								}}>
								<h3>{title}</h3>
							</Box>
							<p>{studio}</p>
							<p>
								{episodes} x{' '}
								{duration}
							</p>
							<Box
								sx={{
									height: '200px',
									overflow: 'scroll',
								}}>
								<p>
									{
										synopsis
									}
								</p>
							</Box>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default AnimeCard;
