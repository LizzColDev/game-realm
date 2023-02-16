import React from 'react';
import { HeaderContainer } from '../Header';
import { RankingContainer } from '../RankingContainer';
import {GameCard} from '../GameCard';
import { SearchForm } from '../SearchForm';
import {InputSearchGame} from '../InputForm';
import './App.css';

const Arrgames = [
	{ id: 1, name: 'The Last Of Us', category: 'action', src: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png'},
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
			<SearchForm>
				<InputSearchGame/>
			</SearchForm>
			<RankingContainer>
				{Arrgames.map(game =>(
					<GameCard
						key={game.id}
						alt={game.name}
						src={game.src}
					/>
				))}
					
			</RankingContainer>

				
		</>

	);
}

export {App};