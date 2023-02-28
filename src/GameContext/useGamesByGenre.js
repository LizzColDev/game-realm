import { useEffect, useState } from 'react';
import {API_RAWG} from './apiConfig';

function useGamesByGenre(){

	const [gamesByGenre, setGames] = useState([]); 	

	useEffect(() =>{
		async function getGames() {
			try{
				const {data} = await API_RAWG.get('games', {
					params: {'genres': 'action'}
				});
				setGames(data.results);
				console.log(data.results);
			} catch(error){
				console.error(error);
			}
		}


		getGames();
		
	}, []);

	return {
		gamesByGenre,
	};
}

export {useGamesByGenre};