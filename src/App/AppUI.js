import React, {lazy, Suspense}  from 'react';
import { NavHeader } from '../components/NavHeader';
// import { RankingContainer } from '../RankingContainer';
import './App.css';
import { GameContext } from './GameContext';
import { GenresContainer } from '../components/GenresContainer';
import { GenreCard } from '../components/GenreCard';
import { NewsContainer } from '../components/NewsContainer';
import { Modal } from '../components/Modal';
// import { PlatformsContainer } from '../PlatformsContainer';
import { UpcomingContainer } from '../components/UpcomingContainer';
import { ModalByGame } from '../components/Modal/modalByGame';
import { GameContain} from '../components/GameDetail';
import { Link } from 'react-router-dom';
import { PopularContainer } from '../components/PopularContainer';
import { MainContain } from '../components/MainContain';
import { SectionNewsUpcoming } from '../components/SectionNewsUpcoming';
import { NavList } from '../components/NavList';
import { MenuList } from '../components/MenuList';
import { ListContainer } from '../components/ListContainer';
import { ListLoading } from '../components/loading/ListLoadint';
// import { ListContainer } from '../ListContainer';

const LazyGameCard = lazy(() => import('../components/GameCard'));
const LazyNewsImage = lazy(()=> import ('../components/NewsCard'));

function AppUI() {
	const {
		// games,
		genres,
		gamesNews,
		openModal,
		// platforms,
		upComing,
		openModalByGame,
		setOpenModalByGame,
		gameById,
		goPages,
		popularGames,
		loading,
		openModalList,
		// gamesBySearch

	} = React.useContext(GameContext);

	return (
		<>
			<NavHeader />

			<MainContain>
				<GenresContainer>
					{genres && genres.map(genre =>(
						<Link key={genre.id} to='/genres' onClick={goPages}>
							<GenreCard 
								className={loading ? 'loading-card' : 'genre-contain'}
								genreName= {genre.name}
								name={genre.name} />
						</Link>
					))}
				</GenresContainer>
				<PopularContainer className='most-popular-preview'>
					{popularGames && popularGames.map(game =>(
						<Suspense key={game.id} fallback={<div>Cargando...</div>}>
							<LazyGameCard
								className={'ranking-img'}
								id={game.id}
								name={game.name}
								src={game.background_image}
								setOpenModalByGame={setOpenModalByGame}
							/>
						</Suspense>
					))}
				</PopularContainer>

				<SectionNewsUpcoming>
					<NewsContainer>
						{gamesNews && gamesNews.map(game =>(
							<Suspense key={game.title} fallback={<div className="skeleton">Cargando...</div>}>
								<LazyNewsImage	
									className={'genre-contain'}						
									name={game.title}
									src={game.image}
									url={game.link}
									date={game.date}
									description={game.description}
								/>
							</Suspense>
						))}
					</NewsContainer>
					{/* <NewsContainer>
						{gamesBySearch && gamesBySearch.map(game =>(

							<Suspense key={game.id} fallback={<div className="skeleton">Cargando...</div>}>
								<LazyGameCard
									className='upcoming-img'
									id={game.id}
									name={game.name}
									src={game.background_image}
									setOpenModalByGame={setOpenModalByGame}
								/>
							</Suspense>
						))}
					</NewsContainer> */}
					<UpcomingContainer>
						{upComing && upComing.map(game =>(
							<Suspense key={game.id} fallback={<div className="skeleton">Cargando...</div>}>
								<LazyGameCard
									className={'upcoming-img'}						
									id={game.id}
									name={game.name}
									src={game.background_image}
									setOpenModalByGame={setOpenModalByGame}
								/>

		  </Suspense>
						))}
					</UpcomingContainer>
				</SectionNewsUpcoming>
				
			</MainContain>
			{/* <RankingContainer>

				{games && games.map(game =>(
					<Suspense key={game.id} fallback={<div>Cargando...</div>}>
						<LazyGameCard
							className='ranking-img'
							id={game.id}
							name={game.name}
							src={game.background_image}
							setOpenModalByGame={setOpenModalByGame}
						/>

		  </Suspense>
				))}
			</RankingContainer> */}





			{!!openModal && (
				<Modal className='ModalBackground'>
					<NavList  className='modal-links'>
						<MenuList/>
					</NavList>
					
					
				</Modal>
			)}
			{!!openModalList && (
				<Modal className='ModalBackground-List'>
					<NavList className='modal-links'>
						{loading && <ListLoading/>}
						{genres && genres.map(genre =>(
						
							<ListContainer
								to='/genres'  // verificar pendiente
								key={genre.id
								}
								id={genre.id}
								genreName= {genre.name}
								name={genre.name} />
				
						))}
					</NavList>
				</Modal>
			)}
			{!!openModalByGame && gameById &&
			 <ModalByGame>

			 	{gameById && <GameContain
				
			 		id={gameById.id}
			 		name={gameById.name}
			 		released = {gameById.released}
			 		src={gameById.background_image}
			 		description={gameById.description}
			 		rating={gameById.rating}
			 	/>};
		
			 </ModalByGame>
			}	
		</>

	);
}


export {AppUI};