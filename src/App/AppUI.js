import React, {lazy, Suspense}  from 'react';
import { NavHeader } from '../NavHeader';
// import { RankingContainer } from '../RankingContainer';
import './App.css';
import { GameContext } from '../GameContext';
import { GenresContainer } from '../GenresContainer';
import { GenreCard } from '../GenreCard';
import { NewsContainer } from '../NewsContainer';
import { Modal } from '../Modal';
// import { PlatformsContainer } from '../PlatformsContainer';
import { UpcomingContainer } from '../UpcomingContainer';
import { ModalByGame } from '../Modal/modalByGame';
import { GameContain} from '../GameDetail';
import { Link } from 'react-router-dom';
import { PopularContainer } from '../PopularContainer';
import { MainContain } from '../MainContain';
import { SectionNewsUpcoming } from '../SectionNewsUpcoming';
import { NavList } from '../NavList';
import { MenuList } from '../MenuList';
import { ListContainer } from '../ListContainer';
import { ListLoading } from '../loading/ListLoadint';
// import { ListContainer } from '../ListContainer';

const LazyGameCard = lazy(() => import('../GameCard'));
const LazyNewsImage = lazy(()=> import ('../NewsCard'));

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
								className={loading ? 'loading-card' : 'ranking-img'}
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
									className={loading ? 'loading-card' : 'genre-contain'}						
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
						{gamesNews && gamesNews.map(game =>(
							<Suspense key={game.title} fallback={<div className="skeleton">Cargando...</div>}>
								<LazyNewsImage							
									name={game.title}
									src={game.urlToImage}
									url={game.link}
									date={game.publishedAt}
									description={game.description}
								/>
							</Suspense>
						))}
					</NewsContainer> */}
					<UpcomingContainer>
						{upComing && upComing.map(game =>(
							<Suspense key={game.id} fallback={<div className="skeleton">Cargando...</div>}>
								<LazyGameCard
									className={loading ? 'skeleton' : 'upcoming-img'}						
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