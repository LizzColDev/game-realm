import React, {createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useGameRanking } from './useGameRanking';
import { useGenres } from './useGamesGenres';
import { useGamesNews } from './useGamesNews';
import { usePlatformsGames } from './usePlatformsGames';
import { useUpcoming } from './useUpcomingGames';


const GameContext = createContext();

function GameProvider(props){
	const {games} = useGameRanking();
	const {genres} = useGenres();
	const {gamesNews} = useGamesNews();
	const {platforms} = usePlatformsGames();
	const[openModal, setOpenModal] = useState(false);
	const {upComing} = useUpcoming();
	

	return(
		<GameContext.Provider value={{
			games, 
			genres, 
			gamesNews,
			openModal,
			setOpenModal,
			platforms,
			upComing,
		}}>
			{props.children}
		</GameContext.Provider>
		
	);
}

GameProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
export {GameContext, GameProvider};