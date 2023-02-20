import { useEffect, useState } from 'react';
import {api} from './useAPI';

function useGameRanking(apiKey){

	const [games, setGames] = useState([]); 	

	useEffect(() =>{
		async function getRankingGames() {
			try{
				const {data} = await api.get('games', {
					params: {
						key: apiKey,
						metacritic: '80,100',
						ordering: '-metacritic',
						dates: '2020-01-01,2021-12-31.2022-01-01,2023-12-31'
					}
				});
	
				setGames(data.results);
				console.log('games', data.results);
			} catch(error){
				console.error(error);
			}
		}

		if(apiKey){
			getRankingGames();
		}
	}, [apiKey]);

	return {
		games,
	};
}

export {useGameRanking};