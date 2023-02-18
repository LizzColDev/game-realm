import React from 'react';
import { HeaderContainer } from '../Header';
import { RankingContainer } from '../RankingContainer';
import {GameCard} from '../GameCard';
import { SearchForm } from '../SearchForm';
import {InputSearchGame} from '../InputForm';
import './App.css';
import { Categories } from '../Categories';
import { GameContext } from '../GameContext';

function AppUI() {

	const {games} = React.useContext(GameContext) || {};
	return (
		<>
			<HeaderContainer />
			<SearchForm>
				<InputSearchGame/>
			</SearchForm>
			<Categories></Categories>
			<RankingContainer>
				{games && games.map(game =>(
					<GameCard
						key={game.id}
						alt={game.name}
						src={game.background_image}
					/>
				))}	
			</RankingContainer>
		</>

	);
}


export {AppUI};