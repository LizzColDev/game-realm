import React, {createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useGameRanking } from './useGameRanking';
import { useGenres } from './useGamesGenres';
import { useGamesNews } from './useGamesNews';


const GameContext = createContext();

function GameProvider(props){
	const {games} = useGameRanking();
	const {genres} = useGenres();
	const {gamesNews} = useGamesNews();
	const[openModal, setOpenModal] = useState(false);


	return(
		<GameContext.Provider value={{
			games, 
			genres, 
			gamesNews,
			openModal,
			setOpenModal,
		}}>
			{props.children}
		</GameContext.Provider>
		
	);
}

GameProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
export {GameContext, GameProvider};