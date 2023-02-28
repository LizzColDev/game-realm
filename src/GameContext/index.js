import React, {createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useGameRanking } from './useGameRanking';
import { useGenres } from './useGamesGenres';
import { useGamesNews } from './useGamesNews';
import { usePlatformsGames } from './usePlatformsGames';
import { useUpcoming } from './useUpcomingGames';
import {useGamesByGenre} from './useGamesByGenre';

const GameContext = createContext();

function GameProvider(props){
	const {games} = useGameRanking();
	const {genres} = useGenres();
	const {gamesNews} = useGamesNews();
	const {platforms} = usePlatformsGames();
	const[openModal, setOpenModal] = useState(false);
	const {upComing} = useUpcoming();

	const [page, setPage] = useState('');

	const getPage = (select) =>setPage(select);

	const {gamesByGenre} = useGamesByGenre(page);

	function goPages(e) {
		const name = e.target.textContent.toLowerCase();
		const nameJoined = () =>{
			const words = name.split(' ');
			return words.length > 1 ? words.join('-') : name;
		};
		getPage(nameJoined);
	}
	return(
		<GameContext.Provider value={{
			games, 
			genres, 
			gamesNews,
			openModal,
			setOpenModal,
			platforms,
			upComing,
			gamesByGenre,
			page,
			goPages
		}}>
			{props.children}
		</GameContext.Provider>
		
	);
}

GameProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
export {GameContext, GameProvider};