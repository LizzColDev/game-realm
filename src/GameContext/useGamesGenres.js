import { useEffect, useState } from 'react';
import { api } from './useAPI';

console.log('estoy eb useGamesgenres');
function useGenres(apiKey){
	const [genres, setGenres] = useState([]); 	

	useEffect(() =>{
		async function getGenres() {
			try{
				const {data} = await api.get('genres', {
					params: {
						key: apiKey,
					}
				});
				setGenres(data.results);
				console.log('genres', data.results);
			} catch(error){
				console.error(error);
			}
		}

		if(apiKey){
			getGenres();
		}
	}, [apiKey]);

	return {
		genres,
	};
}

export {useGenres};