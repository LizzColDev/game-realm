import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY_RAW } from '../API_KEY';

const API_KEY = API_KEY_RAW;
const API_URL = 'https://api.rawg.io/api/games';
console.log('hola estoy en useContext', API_URL);

const api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'aplication/json; charset=utf-8',
	},
	params:{
		key: API_KEY,
	}
});

function useGameRanking(){

	const [games, setGames] = useState([]);
	async function getRankingGames() {
		try{
			const {data} = await api.get('', {
				params: {
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
	useEffect(()=>{
		getRankingGames();
	}, []);

	return {
		games,
	};
}

export {useGameRanking};