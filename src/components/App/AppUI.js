import React, {lazy, Suspense}  from 'react';
import './App.css';
import { UpcomingContainer } from '../UI/UpcomingContainer';
import { ModalByGame } from '../UI/Modal/modalByGame';
import { GameContain} from '../UI/GameDetail';
import { PopularContainer } from '../UI/PopularContainer';
import { MainContain } from '../UI/MainContain';
import { SectionNewsUpcoming } from '../UI/SectionNewsUpcoming';
import {  useGames } from '../../GameContext/useDataGames';
import { useGamesNews } from '../../GameContext/useGamesNews';
import { GameContext } from '../../GameContext/GameProvider';
import { NewsContainer } from '../UI/NewsContainer';


const LazyGameCard = lazy(() => import('../common/GameCard'));
const LazyNewsImage = lazy(()=> import ('../UI/NewsCard'));

function AppUI() {
	const {
		openModalByGame,
		setOpenModalByGame,
		gameById,
	} = React.useContext(GameContext);

	const { data, isLoading, error } = useGames();
	const { data: news, isLoading: loadingNews, error: errorNews } = useGamesNews();

	
	if(error || errorNews){
		return <div>Error: {error.message} </div>;
	}
	const {upcomingGames, popularGames } = data;
	return (
		<>
			<MainContain>

				<PopularContainer className='most-popular-preview'>
					{isLoading ? (
						<div>Loading ...</div>
					) : (
						popularGames && popularGames.map(game =>(
							<Suspense key={game.id} fallback={<div>Cargando...</div>}>
								<LazyGameCard
									className={'ranking-img'}
									id={game.id}
									name={game.name}
									src={game.background_image}
									setOpenModalByGame={setOpenModalByGame}
								/>
							</Suspense>
						))
					)}

				</PopularContainer>

				<SectionNewsUpcoming>
					<NewsContainer>
						{loadingNews ? (
							<div>Loading...</div>
						) : (news && news.map(game =>(
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
						)))}
					</NewsContainer>
					<UpcomingContainer>
						{isLoading ? (
							<div>Loading...</div>
						) : (upcomingGames && upcomingGames.map(game =>(
							<Suspense key={game.id} fallback={<div className="skeleton">Cargando...</div>}>
								<LazyGameCard
									className={'upcoming-img'}						
									id={game.id}
									name={game.name}
									src={game.background_image}
									setOpenModalByGame={setOpenModalByGame}
								/>

		  </Suspense>
						)))}
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