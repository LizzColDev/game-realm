import { useEffect, useState } from 'react';
import {API_RAWG} from './apiConfig';

function useGameById(id){
	const [gameById, setGame] = useState([]); 	
	console.log(id);
	useEffect(() =>{
		async function getGameById() {
			try{
				const {data} = await API_RAWG.get(`games/${id}`, {
					params: {
					
					}	
				});
				setGame(data);
				console.log(data);
			} catch(error){
				console.error(error);
			}
		}


		getGameById();
		
	}, [id]);

	return {
		gameById,
	};
}

export {useGameById};