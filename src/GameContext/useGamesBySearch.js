import { useEffect, useState } from 'react';
import { API_RAWG } from '../services/api';

function useGamesBySearch(query){
	const [gamesBySearch, setGamesBySearch] = useState([]); 	

	useEffect(() =>{
		async function fetchGamesBySearch() {
			try{
				const {data} = await API_RAWG.get('games', {
					params: {
						search: query,
						ordering:'-added'
					}
				});	
				setGamesBySearch(data.results);
			} catch(error){
				console.error(error);
			}
		}
		fetchGamesBySearch();
	}, [query]);

	return {
		gamesBySearch,
	};
}

export {useGamesBySearch};