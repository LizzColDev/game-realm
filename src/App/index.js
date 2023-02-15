import React from 'react';
import { HeaderContainer } from '../Header';
// import {GameList} from '../GameContext';
import { GameItem } from '../GameDetail';
import { GamesContainer } from '../GamesContainer';
import { AddFavoriteButton } from '../LikeButton';
import { SearchContainer } from '../SearchContainer';
import './App.css';

export const games = [
	{ id: 1, name: 'The Last Of Us', category: 'action'},
	{ id: 2, name: 'The Witcher 3: Wild Hunt', category: 'action'},
	{ id: 3, name: 'The Legend of Zelda: Breath of the Wild', category: 'comic'},
	{ id: 4, name: 'Super Mario 64', category: 'comic'}
];

function App() {
	return (
		<>
			<HeaderContainer />
			<SearchContainer/>
			<GamesContainer>
				{games.map(game => (
					<GameItem key = {game.id} text = {game.name}/>
				))}
			</GamesContainer>
			<AddFavoriteButton/>		
		</>

	);
}

export {App};