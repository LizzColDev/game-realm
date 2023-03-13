import { useEffect, useState } from 'react';
import { API_RAWG } from './apiConfig';

function useGenres(){
	const [genres, setGenres] = useState([]); 	

	useEffect(() =>{
		async function getGenres() {
			try{
				const {data} = await API_RAWG.get('genres', {});	
				setGenres(data.results);
			} catch(error){
				console.error(error);
			}
		}
		getGenres();
	}, []);

	return {
		genres,
	};
}

export {useGenres};