import { useEffect, useState } from 'react';
import {API_RAWG} from './apiConfig';

function useGamesByGenre(genre){
	const [gamesByGenre, setGames] = useState([]); 	
	useEffect(() =>{
		async function getGames() {
			try{
				const {data} = await API_RAWG.get('games', {
					params: {'genres':genre ||  'action'},
				});
				setGames(data.results);
			} catch(error){
				console.error(error);
			}
		}
		getGames();
		
	}, [genre]);

	return {
		gamesByGenre,
	};
}

export {useGamesByGenre};