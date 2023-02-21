import { useEffect, useState } from 'react';
import {API_NEWS_GAMES} from './apiConfig';

function useGamesNews(){
	const [gamesNews, setNews] = useState([]); 	

	useEffect(() =>{
		async function getNewsGames() {
			try{
				const {data} = await API_NEWS_GAMES.get('top-headlines', {
					params: {
						q: 'game',
						category:'technology',
					
					}

				});
	
				setNews(data.articles);
			} catch(error){
				console.error(error);
			}
		}
		getNewsGames();		
	}, []);

	return {
		gamesNews,
	};
}

export {useGamesNews};