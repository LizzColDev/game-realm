import { useQuery, useQueryClient } from 'react-query';
import { API_RAWG } from '../services/api';


const fetchGames = async () => {
	
	try {

		const genresGamesResponse = await API_RAWG.get('genres');
		const storesGamesResponse = await API_RAWG.get('stores');
		const platformsGamesResponse = await API_RAWG.get('platforms/lists/parents');

		const genresGames = genresGamesResponse.data.results;
		const storesGames = storesGamesResponse.data.results;
		const platformsGames = platformsGamesResponse.data.results;
		return {

			platformsGames,
			genresGames,
			storesGames,
		};
	} catch (error) {
		console.error(error);
		throw new Error('Error retrieving the games');
	}
};

const useDataByMenu = () => {
	const queryClient = useQueryClient();

	return useQuery('gamesByMenu', fetchGames, {
		initialData:() =>{
			return queryClient.getQueryData('gamesByMenu');
		},
		onSuccess: (data) =>{
			queryClient.setQueryData('gamesByMenu', data);
		},
		staleTime: 300000,
	});
};

export  {useDataByMenu};