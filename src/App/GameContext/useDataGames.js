import { useQuery, useQueryClient } from 'react-query';
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
				ordering: '-added',
				dates: `${currentDate},${dateByUpcoming}`,
			},
		});
		const rankingGamesResponse = await API_RAWG.get('games', {
			params: {
				ordering: '-rating_top',
			},
		});
		const popularGamesResponse = await API_RAWG.get('games', {
			params: {
				ordering: '-rating_top',
				dates: `${dateByPopular},${currentDate}`,
			},
		});


		const upcomingGames = upcomingGamesResponse.data.results;
		const rankingGames = rankingGamesResponse.data.results;
		const popularGames = popularGamesResponse.data.results;

		return {
			upcomingGames,
			rankingGames,
			popularGames,
		};
	} catch (error) {
		console.error(error);
		throw new Error('Error retrieving the games');
	}
};

const useGames = () => {
	const queryClient = useQueryClient();

	return useQuery('games', fetchGames, {
		initialData:() =>{
			return queryClient.getQueryData('games');
		},
		onSuccess: (data) =>{
			queryClient.setQueryData('games', data);
		},
		staleTime: 300000,

	});
};
export  {useGames};