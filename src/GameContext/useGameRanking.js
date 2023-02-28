import { useEffect, useState } from 'react';
import {API_RAWG} from './apiConfig';

function useGameRanking(){
	const [games, setGames] = useState([]); 	
	console.log(games);

	useEffect(() =>{
		async function getRankingGames() {
			try{
				const {data} = await API_RAWG.get('games', {
					params: {'page_size': 10}


					
				});
				setGames(data.results);
			} catch(error){
				console.error(error);
			}
		}


		getRankingGames();
		
	}, []);

	return {
		games,
	};
}

export {useGameRanking};