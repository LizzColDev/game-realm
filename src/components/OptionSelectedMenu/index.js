import React, { useContext} from 'react';
import PropTypes from 'prop-types';
import './OptionSelectedMenu.css';
import { GameContext } from '../../App/GameContext';
import { Link } from 'react-router-dom';
import { GenreCard } from '../GenreCard';
import { useDataBySelectedMenu } from '../../App/GameContext/useDataBySelectedMenu';

function OptionSelectedMenu({selectedOption}){
	const { goPages, isActive } = useContext(GameContext);
	const { gameData, isLoading, isError } = useDataBySelectedMenu(selectedOption);
	if(isLoading){
		
		return <div>Loading ...</div>;
	}
	if(isError){
		return <div>Error fetching {selectedOption} </div>;
	}

	return(
		<section className={`genres-container ${isActive ? 'show' : ''}`} id='genres'>
			<h2 className='genres-title'>{selectedOption}</h2>
			<article className='genres-contain'>
				{gameData && gameData.map((option) =>(
					<li key={option.id}>
						<Link  to={`/${selectedOption}`} onClick={goPages}>
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