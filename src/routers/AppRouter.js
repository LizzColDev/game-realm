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
import { useQuery } from 'react-query';
import { fetchGames } from '../App/GameContext/useDataGames';


const LazyGameCard = lazy(() => import('../components/GameCard'));
function AppRouter(){
	const{
		allGamesBySelect,
		page, 
		setOpenModalByGame, 
		openModalByGame, 
		gameById, 
		gamesBySearch,
		toValue,
		setAllGamesBySelect
	} = React.useContext(GameContext);

	const {data, isLoading, error} = useQuery('games', fetchGames);

	if(isLoading){
		
		return <div>Loading ...</div>;
	}
	if(error){
		return <div>Error fetching {allGamesBySelect} </div>;
	}
	let gamesBySelect = [];
	if (toValue === '/ranking-games') {
		gamesBySelect = data?.rankingGames;
	  } else if (toValue === '/upcoming-games') {
		gamesBySelect = data?.upcomingGames;
	  } else if (toValue === '/popular-games') {
		gamesBySelect = data?.popularGames;
	  } else if (toValue === '/genres') {
		gamesBySelect = data?.gamesByGenres;
	  }
	  console.log(toValue);
	return(
		<Router>
			<NavHeader />
			<Routes>
				<Route path='/' element={<HomePage/>} />

				<Route path='/genres' element={
					<GamesByGenresPage name={page}>
						{gamesBySelect && gamesBySelect.map(game =>(                            
							<Suspense key={game.id} fallback={<div>Cargando...</div>}>
								<LazyGameCard
									id={game.id}
									className='pages'
									key={game.id}
									name={game.name}
									src={game.background_image}
									setOpenModalByGame={setOpenModalByGame}
								/>
				
							</Suspense>
						))}
						
					</GamesByGenresPage>} />
					
				<Route key={JSON.stringify(gamesBySelect)} path={toValue} element={
					<GamesByRankingPage setAllGamesBySelect = {setAllGamesBySelect}>
						{gamesBySelect && gamesBySelect.map(game =>(
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