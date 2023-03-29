import {  useEffect, useState } from 'react';

import {API_RAWG} from './apiConfig';

function useUpcoming(){
	const [upComing, setUpcoming] = useState([]); 	
	let currentDate = new Date();
	let nextYearDate = new Date();
	nextYearDate.setFullYear(currentDate.getFullYear()+1);

	useEffect(() =>{
		async function getUpcoming() {
			try{
				const {data} = await API_RAWG.get('games', {
					params: {'dates': '2023-02-26,2024-02-26'}
				});
				setUpcoming(data.results);
			} catch(error){
				console.error(error);
			}
		}


		getUpcoming();

	}, []);

	return {
		upComing,
	};
}

export {useUpcoming};