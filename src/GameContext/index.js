import React, {createContext } from 'react';
import PropTypes from 'prop-types';
import { useGameRanking } from './useGameRanking';
import { GetApiKey } from './useApiKey';

const GameContext = createContext();

function GameProvider(props){
	const apiKey = GetApiKey();
	const {games} = useGameRanking(apiKey);
	return(
		<GameContext.Provider value={{games}}>
			{props.children}
		</GameContext.Provider>
	);
}

GameProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
export {GameContext, GameProvider};