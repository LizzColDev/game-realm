import React, {createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useGameById } from './useGameById';
import { useGamesBySearch } from './useGamesBySearch';

const GameContext = createContext();

function GameProvider(props){
	const[query, setQuery] = useState('');
	const [id, setId] = useState(null);
	const[openModalByGame, setOpenModalByGame] = useState(false);
	const[isActive, setIsActive] = useState(false);
	const [loading, setLoading] = useState(true);
	const [showSubMenu, setShowSubMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');
	const [toValue, setToValue] = useState('');
	const [openModal, setOpenModal] = useState(false);

	const {gamesBySearch} = useGamesBySearch(query);
	const {gameById} = useGameById(id);
	const getId = (select) =>setId(select);

	return(
		<GameContext.Provider value={{
			openModal,
			setOpenModal,
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