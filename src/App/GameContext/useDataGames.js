import { API_RAWG } from './apiConfig';

const fetchGames = async () => {

	const date = new Date();
	const year = date.getFullYear();
	const currentMonth = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const currentDate = `${year}-${currentMonth}-${day}`;
	
	const monthByUpcoming = String(date.getMonth() + 6).padStart(2, '0');
	const dateByUpcoming = `${year}-${monthByUpcoming}-${day}`;
	const monthByPopular = String(date.getMonth() - 4).padStart(2, '0');
	const dateByPopular = `${year}-${monthByPopular}-${day}`;
	try {
		const upcomingGamesResponse = await API_RAWG.get('games', {
			params: {
				ordering: 'relesead',
				dates: `${currentDate},${dateByUpcoming}`,
			}
		});
		const rankingGamesResponse  = await API_RAWG.get('games', {
			params: {
				ordering: '-ranting_top'
			}
		});
		const popularGamesResponse   = await API_RAWG.get('games', {
			params: {
				dates: `${dateByPopular},${currentDate}`
			}
		});
		const gamesByGenresResponse   = await API_RAWG.get('games', {
			params: {
				genres: 'indie'}, 
		});
		const genresGamesResponse   = await API_RAWG.get('genres');
		const storesGamesResponse   = await API_RAWG.get('stores');
		const platformsGamesResponse   = await API_RAWG.get('platforms/lists/parents');

		const upcomingGames = upcomingGamesResponse.data.results;
		const rankingGames = rankingGamesResponse.data.results;
		const popularGames = popularGamesResponse.data.results;
		const genresGames = genresGamesResponse.data.results;
		const storesGames = storesGamesResponse.data.results;
		const platformsGames = platformsGamesResponse.data.results;
		const gamesByGenres = gamesByGenresResponse.data.results;

		return { upcomingGames, rankingGames, popularGames, platformsGames, genresGames, storesGames, gamesByGenres};
	}catch(error){
		console.error(error);
		throw new Error('Error retrieving the games');
	}
};
export { fetchGames};