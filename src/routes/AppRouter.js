import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';
import {GamesByRankingPage} from '../components/pages/GamesByRankingPage';
import {NewsPage} from '../components/pages/NewsPages';
import {NotFoundPage} from '../components/pages/NotFoundPage';
import { HomePage } from '../components/pages/HomePage';
import { GameContext } from '../GameContext/GameProvider';
import { ModalByGame } from '../components/UI/Modal/modalByGame';
import { GameContain } from '../components//UI/GameDetail';
import { NavHeader } from '../components//UI/NavHeader';
import {useGames} from '../GameContext/useDataGames';
import { GamesByGenresPage } from '../components/pages/GamesByGenresPage';


function AppRouter(){
	const{
		allGamesBySelect,
		openModalByGame, 
		gameById, 
		gamesBySearch,

	} = React.useContext(GameContext);

	const { data, isLoading, error } = useGames();
	
	if(isLoading){
		
		return <div>Loading ...</div>;
	}
	if(error){
		return <div>Error fetching {allGamesBySelect} </div>;
	}
	const {rankingGames,  upcomingGames, popularGames} = data;

	return(
		<HashRouter>
			<NavHeader />
			<Routes>
				<Route exact path='/' element={<HomePage/>} />
				<Route
					path="/upcoming-games"
					element={(
						<GamesByRankingPage
							title="Upcoming Games"
							games={upcomingGames}
						/>
					)}
				/>
				<Route
					path="/ranking-games"
					element={(
						<GamesByRankingPage
							title="Ranking Games"
							games={rankingGames}
						/>
					)}
				/>
				<Route
					path="/popular-games"
					element={(
						<GamesByRankingPage
							title="Popular Games"
							games={popularGames}
						/>
					)}
				/>
				<Route path='/genres/:genre' element={<GamesByGenresPage />} />
					
				<Route path='/search/:search' 
					element={(<GamesByRankingPage
						title='Games by Search'
						games={gamesBySearch}
					/>
					)}
				/>
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
		</HashRouter>
		
	);
}

export {AppRouter};