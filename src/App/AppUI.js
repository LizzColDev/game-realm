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
import { PlatformsContainer } from '../PlatformsContainer';
import { UpcomingContainer } from '../UpcomingContainer';

function AppUI() {
	const {
		games, 
		genres, 
		gamesNews,
		openModal,
		platforms,
		upComing,
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
			<UpcomingContainer>
				{upComing && upComing.map(game =>(
					<GameCard
						key={game.id}
						name={game.name}
						src={game.background_image
						}
					/>
						
				))}	
			</UpcomingContainer>
			<PlatformsContainer>
				{platforms && platforms.map(game =>(
					<GameCard
						key={game.id}
						name={game.name}
						src={game.image_background
						}
					/>
						
				))}	
			</PlatformsContainer>
			<NewsContainer>
				{gamesNews && gamesNews.map(game =>(
					<NewsCard
						key={game.title}
						name={game.title}
						src={game.image}
						url={game.link}
						date={game.date}
						description={game.description}
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