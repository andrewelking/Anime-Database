import { Grid, Item } from '@mui/material';
import AnimeCard from './animecard';
import { useContext, useEffect, useState } from 'react';
import myContext from '../myContext';

function AnimeList() {
	const myCtx = useContext(myContext);
	const axios = require('axios').default;
	const [animeList, setAnimeList] = useState();

	useEffect(() => {
		axios.get(
			`https://api.jikan.moe/v4/seasons/${myCtx.currentYear}/Spring`
		).then(function (response) {
			let anime = response.data.data;
			setAnimeList(anime);
		});
	}, [myCtx.currentSeason, myCtx.currentYear]);

	return (
		<Grid container spacing={4}>
			{animeList?.map(
				({
					mal_id,
					images,
					title,
					studios,
					episodes,
					duration,
					synopsis,
				}) => (
					<AnimeCard
						key={mal_id}
						image={
							images.jpg
								.large_image_url
						}
						title={title}
						studios={studios[0].name}
						episodes={episodes}
						duration={duration}
						synopsis={synopsis}
					/>
				)
			)}
		</Grid>
	);
}

export default AnimeList;
