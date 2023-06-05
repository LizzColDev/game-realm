import { useEffect } from 'react';
import { API_RAWG } from './apiConfig';
import { useQuery } from 'react-query';

function useDataBySelectedMenu(category) {
	console.log(category);
	if(category === 'platforms'){
		category = 'platforms/lists/parents';
	}
	const fetchData = async () => {
		try {
			const response = await API_RAWG.get(category);
			return response.data.results;
		} catch (error){
			console.error(error);
			throw error;
		}
	};

	const { data: gameData, isLoading, isError } = useQuery(category, fetchData);

	useEffect(() => {
		fetchData();
	}, [category, fetchData]);

	return { gameData, isLoading, isError };
}

export { useDataBySelectedMenu };