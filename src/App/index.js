import React from 'react';
import { HeaderContainer } from '../Header';
import { RankingContainer } from '../RankingContainer';
// import {GameList} from '../GameContext';
import {GameCard} from '../GameCard';
// import { GameItem } from '../GameDetail';
import { GamesContainer } from '../GamesContainer';
import { AddFavoriteButton } from '../LikeButton';
import { SearchContainer } from '../SearchContainer';
import './App.css';

const Arrgames = [
	{ id: 1, name: 'The Last Of Us', category: 'action', src: 'https://www.denofgeek.com/wp-content/uploads/2021/09/the-last-of-us-tv-show-joel-ellie-1.jpg?fit=1200%2C685'},
	{ id: 2, name: 'The Witcher 3: Wild Hunt', category: 'action', src: 'https://assets-prd.ignimgs.com/2021/12/08/witcher3-1638987659679.jpg'},
	{ id: 3, name: 'The Legend of Zelda: Breath of the Wild', category: 'comic', src: 'https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg'},
	{ id: 4, name: 'Super Mario 64', category: 'comic', src: 'https://assets1.ignimgs.com/2019/05/31/mario-64---button-1559263987447.jpg'},
	{ id: 3, name: 'The Legend of Zelda: Breath of the Wild', category: 'comic', src: 'https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg'},
	{ id: 4, name: 'Super Mario 64', category: 'comic', src: 'https://assets1.ignimgs.com/2019/05/31/mario-64---button-1559263987447.jpg'}
];

function App() {
	// const [games, setGames] = React.useState(Arrgames);
	// let copyGames = [...games];

	return (
		<>
			<HeaderContainer />
			<SearchContainer/>
			<RankingContainer>
				{Arrgames.map(game =>(
					<GameCard
						key={game.id}
						alt={game.name}
						src={game.src}
					/>
				))}
			</RankingContainer>
			<GamesContainer>
				{/* {games.map(game => (
					<GameItem key = {game.id} text = {game.name}/>
				))} */}
			</GamesContainer>
			<AddFavoriteButton/>		
		</>

	);
}

export {App};