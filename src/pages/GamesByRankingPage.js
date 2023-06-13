import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { BackBtn } from '../components/BackBtn';

const GameCard = lazy(() => import('../components/GameCard/index.js'));

//pend infinite scrolling

function GamesByRankingPage({title, games}){
	document.body.style.overflow = 'auto';

	return(
		<>
			<div style={{display: 'flex', width: '100%', flexFlow: 'row wrap', justifyContent: 'center'}}>
				<BackBtn/>
				<h1>{title}</h1>

			</div>
			<div className='pages-container'>

				<div className='page-contain-img' >
					{games && games.map(game => (
						<Suspense key={game.id} fallback={<div>Loading...</div>}>
							<GameCard
								id={game.id}
								className='pages'
								key={game.id}
								name={game.name}
								src={game.background_image}
							/>
						</Suspense>
					))}
				</div>
			</div>
		</>
		
		
	);
}
GamesByRankingPage.propTypes = {
	title: PropTypes.string,
	games: PropTypes.array
};
  
export {GamesByRankingPage};