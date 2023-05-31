/* eslint-disable react/react-in-jsx-scope */
import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {GamesByGenresPage} from '../pages/GamesByGenresPage';
import {GamesByRankingPage} from '../pages/GamesByRankingPage';
import {GamesByPlatformsPage} from '../pages/GamesByPlatformsPage';
import {GamesByUpcomingPage} from '../pages/GamesByUpcomingPage';
import {NewsPage} from '../pages/NewsPages';
import {NotFoundPage} from '../pages/NotFoundPage';
import { HomePage } from '../pages/HomePage';
import { GameContext } from '../App/GameContext';
import { ModalByGame } from '../components/Modal/modalByGame';
import { GameContain } from '../components/GameDetail';
import { NavHeader } from '../components/NavHeader';


const LazyGameCard = lazy(() => import('../components/GameCard'));
function AppRouter(){
	const{
		gamesByGenre, 
		games, 
		upComing, 
		page, 
		setOpenModalByGame, 
		openModalByGame, 
		gameById, 
		popularGames, 
		gamesBySearch,
	} = React.useContext(GameContext);
	return(
		<Router>
			<NavHeader />
			<Routes>
				<Route path='/genres' element={
					<GamesByGenresPage name={page}>
						{gamesByGenre && gamesByGenre.map(game =>(                            
							<Suspense key={game.id} fallback={<div>Cargando...</div>}>
								<LazyGameCard
									id={game.id}
									className='pages'
									name={game.name}
									src={game.background_image}
									setOpenModalByGame={setOpenModalByGame}
								/>
				
							</Suspense>
						))}
						
					</GamesByGenresPage>} />
					
				<Route path='/ranking' element={<GamesByRankingPage>
					{games && games.map(game =>(
						<Suspense key={game.id} fallback={<div>Cargando...</div>}>
							<LazyGameCard
								className='pages'
								id={game.id}

								key={game.id}
								name={game.name}
								src={game.background_image}
							/>
						
		  </Suspense>
					))}	
				</GamesByRankingPage>} />
				<Route path='/populars' element={<GamesByRankingPage>
					{popularGames && popularGames.map(game =>(
						<Suspense key={game.id} fallback={<div>Cargando...</div>}>
							<LazyGameCard
								className='pages'
								id={game.id}

								key={game.id}
								name={game.name}
								src={game.background_image}
							/>
						
		  </Suspense>
					))}	
				</GamesByRankingPage>} />
				<Route path='/platforms' element={<GamesByPlatformsPage />} />
					
				<Route path='/upcoming' element={<GamesByUpcomingPage>
					{upComing && upComing.map(game =>(
						<Suspense key={game.id} fallback={<div className="skeleton">Cargando...</div>}>
							<LazyGameCard  key={game.id}
								className='pages'
								id={game.id}

								name={game.name}
								src={game.background_image
								} />
						
		  </Suspense>	
					))}	
				</GamesByUpcomingPage>} />
					
				<Route path='/results' element={<GamesByUpcomingPage>
					{gamesBySearch && gamesBySearch.map(game =>(
						<Suspense key={game.id} fallback={<div className="skeleton">Cargando...</div>}>
							<LazyGameCard  key={game.id}
								className='pages'
								id={game.id}

								name={game.name}
								src={game.background_image
								} />
						
		  </Suspense>	
					))}	
				</GamesByUpcomingPage>} />
				<Route path='/news' element={<NewsPage />} />
					
				<Route exact path='/' element={<HomePage/>} />
					
				<Route path='*' element={<NotFoundPage />} />
					
			</Routes>
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
		</Router>
		
	);
}

export {AppRouter};