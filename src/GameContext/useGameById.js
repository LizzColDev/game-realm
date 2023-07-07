import { useEffect, useState } from 'react';
import { API_RAWG } from '../services/api';

function useGameById(id){
	const [gameById, setGame] = useState([]); 	
	useEffect(() =>{
		async function getGameById() {
			try{
				const {data} = await API_RAWG.get(`games/${id}`, {
					params: {
					
					}	
				});
				setGame(data);
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