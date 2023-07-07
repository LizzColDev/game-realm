import { API_RAWG } from './apiConfig';
import { useQuery, useQueryClient } from 'react-query';

const fetchGames = async (genre) => {
	try {		
		const gamesByGenresResponse = await API_RAWG.get('games', {
			params:{
				genres: genre,
				ordering: '-rating_top' 
			}});
		const gamesByGenres = gamesByGenresResponse.data.results;

		return {
			gamesByGenres,
		};

	} catch (error) {
		console.error(error);
		throw new Error('Error retrieving the games');
	}
};

const useGamesByGenre = (genre) => {
	const queryClient = useQueryClient();

	return useQuery(['gamesBySelect', genre], () => fetchGames(genre), {
		initialData:() =>{
			return queryClient.getQueryData(['gamesBySelect', genre]);
		},
		onSuccess: (data) =>{
			queryClient.setQueryData(['gamesBySelect', genre], data);
		},
		staleTime: 300000,
	});
};

export { useGamesByGenre };
