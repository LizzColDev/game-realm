import React from 'react';
import { HeaderContainer } from '../Header';
import { GameItem } from '../GameDetail';
import {GameList} from '../GameContext';
import { GamesContainer } from '../GamesContainer';
import { AddFavoriteButton } from '../LikeButton';
import { SearchContainer } from '../SearchContainer';
import './App.css';

const games = [
	{ name: 'The Last Of Us', category: 'action'},
	{ name: 'The Witcher 3: Wild Hunt', category: 'action'},
	{ name: 'The Legend of Zelda: Breath of the Wild', category: 'comic'},
	{ name: 'Super Mario 64', category: 'comic'}
];
function AppUI() {
	return (
            {games.map(game => (
                
            ))}
	);
}

export default AppUI;