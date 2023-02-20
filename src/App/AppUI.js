import React from 'react';
import { HeaderContainer } from '../Header';
import { RankingContainer } from '../RankingContainer';
import {GameCard} from '../GameCard';
import { SearchForm } from '../SearchForm';
import {InputSearchGame} from '../InputForm';
import './App.css';
import { GameContext } from '../GameContext';
import { GenresContainer } from '../GenresContainer';
import { GenreCard } from '../GenreCard';

function AppUI() {
	const {games, genres} = React.useContext(GameContext);
	return (
		<>
			<HeaderContainer />
			<>
				<SearchForm>
					<InputSearchGame/>
				</SearchForm>
				<GenresContainer>
					{genres && genres.map(genre =>(
						<GenreCard
							key={genre.id}
							name = {genre.name}
							genreName = {genre.name}
						/>
					))
					}
				</GenresContainer>
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
			
			
		</>

	);
}


export {AppUI};