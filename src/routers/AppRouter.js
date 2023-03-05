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
import { GameContext } from '../GameContext';


const LazyGameCard = lazy(() => import('../GameCard'));
function AppRouter(){
	const{gamesByGenre, games, upComing} = React.useContext(GameContext);
	return(
		// eslint-disable-next-line react/react-in-jsx-scope
		<Router>
			<Routes>
				<Route path='/genres' element={
					<GamesByGenresPage>

						{gamesByGenre && gamesByGenre.map(game =>(                            
							<Suspense key={game.id} fallback={<div>Cargando...</div>}>
								<LazyGameCard
									className='pages'
									key={game.id}
									name={game.name}
									src={game.background_image}
								/>
				
							</Suspense>
						))}
						
					</GamesByGenresPage>} />
					
				<Route path='/ranking' element={<GamesByRankingPage>
					{games && games.map(game =>(
						<Suspense key={game.id} fallback={<div>Cargando...</div>}>
							<LazyGameCard
								className='pages'

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

		</Router>
	);
}

export {AppRouter};