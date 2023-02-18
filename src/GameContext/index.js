import React, {createContext} from 'react';
import PropTypes from 'prop-types';
import { useGameRanking } from './useGameRanking';

const GameContext = createContext();

function GameProvider(props){
	const {games} = useGameRanking();
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