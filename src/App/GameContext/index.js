import React, {createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useGamesNews } from './useGamesNews';
import {useGamesByGenre} from './useGamesByGenre';
import { useGameById } from './useGameById';
import { useGamesBySearch } from './useGamesBySearch';
// import { useGames } from './useGames';
// import { useDataGames } from './useDataGames';

const GameContext = createContext();

function GameProvider(props){
	const[query, setQuery] = useState('');
	const [id, setId] = useState(null);
	const [page, setPage] = useState('');
	const[openModalByGame, setOpenModalByGame] = useState(false);
	const[isActive, setIsActive] = useState(false);
	const [loading, setLoading] = useState(true);
	const [showSubMenu, setShowSubMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');
	// const [gamesBySelected, setGamesBySelected] = useState('');
	const [toValue, setToValue] = useState('');
	const [openModal, setOpenModal] = useState(false);

	const {gamesBySearch} = useGamesBySearch(query);
	const {gamesNews} = useGamesNews();
	// const { allGamesBySelect, isLoading, isError } = useDataGames(gamesBySelected);
	const {gameById} = useGameById(id);
	const getPage = (select) =>setPage(select);
	const getId = (select) =>setId(select);
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
			// allGamesBySelect,
			// isLoading,
			// isError,
			gamesNews,
			openModal,
			setOpenModal,
			gamesByGenre,
			page,
			goPages,
			openModalByGame,
			setOpenModalByGame,
			gameById,
			getId,
			gamesBySearch,
			setQuery,
			setIsActive,
			isActive,
			setLoading,
			loading,
			query,
			showSubMenu,
			setShowSubMenu,
			selectedOption,
			setSelectedOption,
			// setGamesBySelected,
			toValue,
			setToValue
		}}>
			{props.children}
		</GameContext.Provider>
		
	);
}

GameProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
export {GameContext, GameProvider};