import React, { Suspense, lazy, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { BackBtn } from '../common/BackBtn';
import {useGamesByGenre} from '../../GameContext/useGamesByGenre';
import { useParams } from 'react-router-dom';

const GameCard = lazy(() => import('../common/GameCard'));

function GamesByGenresPage() {
	document.body.style.overflow = 'auto';
	const { genre } = useParams();
	const { data, isLoading, error, refetch } = useGamesByGenre(genre);

	useEffect(() => {
		refetch();
	}, [genre, refetch]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error fetching games</div>;
	}

	const { gamesByGenres } = data;

	return (
		<>
			<div style={{display: 'flex', width: '100%', flexFlow: 'row wrap', justifyContent: 'center'}}>
				<BackBtn />

				<h1>{genre} Games</h1>
				<div className='pages-container'>

					<div className='page-contain-img' >
						{gamesByGenres &&
					gamesByGenres.map((game) => (
						<Suspense key={game.id} fallback={<div>Loading...</div>}>
							<GameCard
								id={game.id}
								className='pages'
								name={game.name}
								src={game.background_image}
							/>
						</Suspense>
					))}
					</div>
				</div>
			</div>
		</>
	);
}

GamesByGenresPage.propTypes = {
	name: PropTypes.string,
	children: PropTypes.node,
};

export { GamesByGenresPage };