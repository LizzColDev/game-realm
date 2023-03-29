import {  useEffect, useState } from 'react';
// import { GameContext } from '.';
import { API_RAWG } from './apiConfig';

function useGenres(){
	const [genres, setGenres] = useState([]); 	
	
	// const {setLoading} = useContext(GameContext);
	useEffect(() =>{
		async function getGenres() {
			try{
				const {data} = await API_RAWG.get('genres', {});	
				setGenres(data.results);
				// setLoading(false);
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