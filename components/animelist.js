import { Grid } from '@mui/material';
import AnimeCard from './animecard';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AnimeList({ myData }) {
	let studioList;
	const year = useSelector((state) => state.season.year);
	const season = useSelector((state) => state.season.season);
	const [animeList, setAnimeList] = useState(myData);
	const [page, setPage] = useState(2);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			let response = await axios.get(
				`https://api.jikan.moe/v4/seasons/${year}/${season}`
			);
			let data = await response.data;
			let list = data.data;
			setAnimeList(list);
			setPage(1);
			setHasMore(true);
		};
		fetchData();
	}, [year, season]);

	const fetchMoreData = async () => {
		let response = await axios.get(
			`https://api.jikan.moe/v4/seasons/${year}/${season}?page=${page}`
		);
		let data = await response.data;
		let totalPage = data.pagination.last_visible_page;
		let list = data.data;

		if (page < totalPage) {
			setPage(page + 1);
		} else {
			setHasMore(false);
		}
		setAnimeList([...animeList, ...list]);
	};

	return (
		<InfiniteScroll
			dataLength={animeList.length}
			next={fetchMoreData}
			hasMore={hasMore}>
			<Grid container spacing={4} mt='20px'>
				{animeList.map((anime, index) => {
					return (
						<AnimeCard
							key={index}
							images={
								anime.images.jpg
									.large_image_url
							}
							title={anime.title}
							studios={
								(studioList =
									anime.studios
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
							episodes={
								anime.episodes
							}
							duration={
								anime.duration
							}
							synopsis={
								anime.synopsis
							}
						/>
					);
				})}
			</Grid>
		</InfiniteScroll>
	);
}

export default AnimeList;
