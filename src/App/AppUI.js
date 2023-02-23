import React from 'react';
import { NavHeader } from '../NavHeader';
import { RankingContainer } from '../RankingContainer';
import {GameCard} from '../GameCard';
import { SearchForm } from '../SearchForm';
import {InputSearchGame} from '../InputForm';
import './App.css';
import { GameContext } from '../GameContext';
import { GenresContainer } from '../GenresContainer';
import { GenreCard } from '../GenreCard';
import { NewsContainer } from '../NewsContainer';
import { NewsCard } from '../NewsCard';
import { Modal } from '../Modal';

function AppUI() {
	const {
		games, 
		genres, 
		gamesNews,
		openModal,
	} = React.useContext(GameContext);
	return (
		<>
			<NavHeader />
			
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
						name={game.name}
						src={game.background_image}
					/>
						
				))}	
			</RankingContainer>
			<NewsContainer>
				{gamesNews && gamesNews.map(game =>(
					<NewsCard
						key={game.title}
						name={game.title}
						src={game.urlToImage}
						date={game.publishedAt}
						description={game.description}
						source= {game.source.name}
					/>	
				))}	
			</NewsContainer>
			{!!openModal && (
				<Modal>
				
				</Modal>	
			)}

		</>

	);
}


export {AppUI};