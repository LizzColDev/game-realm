import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {GamesByGenresPage} from '../pages/GamesByGenresPage';
import {GamesByRankingPage} from '../pages/GamesByRankingPage';
import {NewsPage} from '../pages/NewsPages';
import {NotFoundPage} from '../pages/NotFoundPage';
import { HomePage } from '../pages/HomePage';
import { GameContext } from '../App/GameContext';
import { ModalByGame } from '../components/Modal/modalByGame';
import { GameContain } from '../components/GameDetail';
import { NavHeader } from '../components/NavHeader';
import {useGames} from '../App/GameContext/useDataGames';


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
		<Router>
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
		</Router>
		
	);
}

export {AppRouter};