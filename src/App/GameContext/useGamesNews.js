import { useEffect, useState } from 'react';
import {API_NEWS_VIDEOGAMES} from './apiConfig';

function useGamesNews(){
	const [gamesNews, setNews] = useState([]); 	

	useEffect(() =>{
		async function getNewsGames() {
			try{
				const {data} = await API_NEWS_VIDEOGAMES.get('recent', {
					params: {

					}
				});
				
				setNews(data);
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