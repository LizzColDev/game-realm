import { useEffect, useState } from 'react';
import {API_RAWG} from './apiConfig';

function usePopularGames(){

	const [popularGames, setPopularGames] = useState([]); 	

	useEffect(() =>{
		async function getPopularGames() {
			try{
				const {data} = await API_RAWG.get('games', {
					params: {
						'dates': '2023-01-01,2023-03-11',
						'ordering': '-added',
						'page_size': 10,
					}
				});
				setPopularGames(data.results);
			} catch(error){
				console.error(error);
			}
		}


		getPopularGames();
		
	}, []);

	return {
		popularGames,
	};
}

export {usePopularGames};