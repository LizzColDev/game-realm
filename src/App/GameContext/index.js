import React, {createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useGameRanking } from './useGameRanking';
import { useGamesNews } from './useGamesNews';
import { useUpcoming } from './useUpcomingGames';
import {useGamesByGenre} from './useGamesByGenre';
import { useGameById } from './useGameById';
import { usePopularGames } from './usePopularGames';
import { useGamesBySearch } from './useGamesBySearch';

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

	const {games} = useGameRanking();
	const {popularGames} = usePopularGames();
	const {gamesBySearch} = useGamesBySearch(query);
	const {gamesNews} = useGamesNews();
	const[openModal, setOpenModal] = useState(false);
	const {upComing} = useUpcoming();
	
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
			games, 
			gamesNews,
			openModal,
			setOpenModal,
			upComing,
			gamesByGenre,
			page,
			goPages,
			openModalByGame,
			setOpenModalByGame,
			gameById,
			getId,
			popularGames,
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
			setSelectedOption
		}}>
			{props.children}
		</GameContext.Provider>
		
	);
}

GameProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
export {GameContext, GameProvider};