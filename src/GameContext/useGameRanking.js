import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'https://api.rawg.io/api/games';


const api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'aplication/json; charset=utf-8',
	},
});

function useGameRanking(apiKey){
	const [games, setGames] = useState([]); 	

	useEffect(() =>{
		async function getRankingGames() {
			try{
				const {data} = await api.get('', {
					params: {
						key: apiKey,
						metacritic: '80,100',
						ordering: '-metacritic',
						dates: '2020-01-01,2021-12-31.2022-01-01,2023-12-31'
					}
				});
	
				setGames(data.results);
				console.log('data', data.results);
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