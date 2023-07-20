import { useQuery, useQueryClient } from 'react-query';
import { API_NEWS_VIDEOGAMES } from '../services/api';

const fetchNews = async () => {
	try {
		const {data} = await API_NEWS_VIDEOGAMES.get();
		const news = data.articles;
		return news;
	} catch(error){
		console.error(error);
	}
};

function useGamesNews(){
	
	const queryClient = useQueryClient();


	return useQuery('gamesNews', fetchNews, {
		initialData:() => {
			return queryClient.getQueryData('gamesNews');
		},
		onSuccess: (data) => {
			queryClient.setQueryData('gamesNews', data);
		},
		staleTime: 600000
	});
}

export {useGamesNews};