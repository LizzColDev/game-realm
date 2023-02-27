import React, {lazy, Suspense}  from 'react';
import { NavHeader } from '../NavHeader';
import { RankingContainer } from '../RankingContainer';
// import { GameCard } from '../GameCard';

// import {NewsCard} from '../NewsCard';
import { SearchForm } from '../SearchForm';
import {InputSearchGame} from '../InputForm';
import './App.css';
import { GameContext } from '../GameContext';
import { GenresContainer } from '../GenresContainer';
import { GenreCard } from '../GenreCard';
import { NewsContainer } from '../NewsContainer';
import { Modal } from '../Modal';
import { PlatformsContainer } from '../PlatformsContainer';
import { UpcomingContainer } from '../UpcomingContainer';

const LazyGameCard = lazy(() => import('../GameCard'));
const LazyNewsImage = lazy(()=> import ('../NewsCard'));
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
					<Suspense key={game.id} fallback={<div>Cargando...</div>}>
						<LazyGameCard
							key={game.id}
							name={game.name}
							src={game.background_image}
						/>
						
		  </Suspense>
				))}	
			</RankingContainer>
			<UpcomingContainer>
				{upComing && upComing.map(game =>(
					<Suspense key={game.id} fallback={<div className="skeleton">Cargando...</div>}>
						<LazyGameCard  key={game.id}
							name={game.name}
							src={game.background_image
							} />
						
		  </Suspense>	
				))}	
			</UpcomingContainer>
			<PlatformsContainer>
				{platforms && platforms.map(game =>(
					<Suspense key={game.id} fallback={<div className="skeleton">Cargando...</div>}>
						<LazyGameCard  name={game.name} src={game.image_background} />
						
		  </Suspense>	
				))}	
			</PlatformsContainer>
			<NewsContainer>
				{gamesNews && gamesNews.map(game =>(
					<Suspense key={game.title} fallback={<div className="skeleton">Cargando...</div>}>
						<LazyNewsImage
							
							name={game.title}
							src={game.image}
							url={game.link}
							date={game.date}
							description={game.description}
						/>
					</Suspense>
					
						
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