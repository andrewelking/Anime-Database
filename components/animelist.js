import { Card, CardContent, Grid, Item } from '@mui/material';
import AnimeCard from './animecard';
import { useContext, useEffect, useState } from 'react';
import myContext from '../myContext';
let studioList;

function AnimeList() {
	const myCtx = useContext(myContext);
	const axios = require('axios').default;
	const [animeList, setAnimeList] = useState();

	useEffect(() => {
		axios.get(
			`https://api.jikan.moe/v4/seasons/${myCtx.currentYear}/${myCtx.currentSeason}`
		).then(function (response) {
			let anime = response.data.data;
			setAnimeList(anime);
		});
	}, [myCtx.currentSeason, myCtx.currentYear]);

	return (
		<Grid container spacing={4} mt='20px'>
			{animeList?.map(
				({
					mal_id,
					images,
					title,
					studios,
					episodes,
					duration,
					synopsis,
				}) => {
					return (
						<AnimeCard
							key={mal_id}
							images={
								images.jpg
									.large_image_url
							}
							title={title}
							studios={
								(studioList =
									studios
										.map(
											({
												name,
											}) =>
												name
										)
										.join(
											' & '
										))
							}
							episodes={episodes}
							duration={duration}
							synopsis={synopsis}
						/>
					);
				}
			)}
		</Grid>
	);
}

export default AnimeList;
