import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { BackBtn } from '../components/BackBtn';
import GameCard from '../components/GameCard';
import {useGamesByGenre} from '../App/GameContext/useGamesByGenre';
import { useParams } from 'react-router-dom';
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
			<div>
				<BackBtn />

				<h1>{genre} Games</h1>

				{gamesByGenres &&
					gamesByGenres.map((game) => (
						<div className='pages-container' key={game.id}>
							<div>
							</div>

							<div className='page-contain-img'>
								<GameCard
									id={game.id}
									className='pages'
									name={game.name}
									src={game.background_image}
								/>
							</div>
						</div>
					))}
			</div>
		</>
	);
}

GamesByGenresPage.propTypes = {
	name: PropTypes.string,
	children: PropTypes.node,
};

export { GamesByGenresPage };