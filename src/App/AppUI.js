import React, {lazy, Suspense}  from 'react';
import './App.css';
import { GameContext } from './GameContext';
import { NewsContainer } from '../components/NewsContainer';
import { UpcomingContainer } from '../components/UpcomingContainer';
import { ModalByGame } from '../components/Modal/modalByGame';
import { GameContain} from '../components/GameDetail';
import { PopularContainer } from '../components/PopularContainer';
import { MainContain } from '../components/MainContain';
import { SectionNewsUpcoming } from '../components/SectionNewsUpcoming';
// import { MenuList } from '../components/MenuList';
import { useQuery } from 'react-query';
import { fetchGames } from './GameContext/useDataGames';


const LazyGameCard = lazy(() => import('../components/GameCard'));
const LazyNewsImage = lazy(()=> import ('../components/NewsCard'));

function AppUI() {
	const {
		gamesNews,
		openModalByGame,
		setOpenModalByGame,
		gameById,
	} = React.useContext(GameContext);

	const {data, isLoading, error} = useQuery('games', fetchGames);

	if(isLoading) {
		return <div>Loading...</div>;
	}
	if(error){
		return <div>Error: {error.message} </div>;
	}
	const {upcomingGames, popularGames } = data;
	return (
		<>
			<MainContain>

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
					<UpcomingContainer>
						{upcomingGames && upcomingGames.map(game =>(
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