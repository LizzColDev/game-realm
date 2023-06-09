import React, { useContext} from 'react';
import PropTypes from 'prop-types';
import './OptionSelectedMenu.css';
import { GameContext } from '../../App/GameContext';
import { Link } from 'react-router-dom';
import { GenreCard } from '../GenreCard';
import { useQuery } from 'react-query';
import { fetchGames } from '../../App/GameContext/useDataGames';

function OptionSelectedMenu(){
	const { goPages, isActive, selectedOption, setToValue } = useContext(GameContext);
	const {data, isLoading, error} = useQuery('games', fetchGames);

	if (isLoading) {
		return <div>Loading...</div>;
	  }
	
	  if (error) {
		return <div>Error fetching {selectedOption}</div>;
	  }

	  let gamesBySelect = [];
	  if (selectedOption === 'platforms') {
		gamesBySelect = data?.platformsGames;
	  } else if (selectedOption === 'genres') {
		gamesBySelect = data?.genresGames;
	  } else if (selectedOption === 'stores') {
		gamesBySelect = data?.storesGames;
	  }

	return(
		<section className={`genres-container ${isActive ? 'show' : ''}`} id='genres'>
			<h2 className='genres-title'>{selectedOption}</h2>
			<article className='genres-contain'>
				{gamesBySelect && gamesBySelect.map((option) =>(
					<li key={option.id}>
						<Link to={`/${selectedOption}`} onClick={() => {
							goPages();
							setToValue(selectedOption);
						}}>
							<GenreCard 
								className={isLoading ? 'loading-card' : 'genre-contain'}
								genreName= {option.name}
								name={option.name} />
						</Link>
					</li>

				))}
			</article>
		</section>
	);
}
OptionSelectedMenu.propTypes = {
	selectedOption: PropTypes.string,
};
  
export {OptionSelectedMenu};