import { useEffect, useState } from 'react';
import {API_RAWG} from './apiConfig';

function usePlatformsGames(){

	const [platforms, setPlatforms] = useState([]); 	

	useEffect(() =>{
		async function getPlatforms() {
			try{
				const {data} = await API_RAWG.get('platforms', {
					params: {'page_size': '20'}
				});
				setPlatforms(data.results);
			} catch(error){
				console.error(error);
			}
		}


		getPlatforms();
		
	}, []);

	return {
		platforms,
	};
}

export {usePlatformsGames};