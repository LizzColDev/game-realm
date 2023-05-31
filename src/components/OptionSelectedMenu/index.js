import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './OptionSelectedMenu.css';
import { GameContext } from '../../App/GameContext';
import { Link } from 'react-router-dom';
import { GenreCard } from '../GenreCard';

function OptionSelectedMenu(){
	const [subMenuContent, setSubMenuContent] = useState(null);
	const { genres, goPages, platforms, loading, isActive, selectedOption } = useContext(GameContext);

	useEffect(() =>{
		if (selectedOption === 'genres') {
			setSubMenuContent (
				<>
					{genres && genres.map(genre =>(
						<li key={genre.id}>
							<Link  to='/genres' onClick={goPages}>
								<GenreCard 
									className={loading ? 'loading-card' : 'genre-contain'}
									genreName= {genre.name}
									name={genre.name} />
							</Link>
						</li>

					))}
				</>
			);
		} else if (selectedOption === 'platforms') {
			setSubMenuContent(
				<>{platforms && platforms.map(platform =>(
					<li key={platform.id}>
						<Link  to='/platform' onClick={goPages}>
							<GenreCard 
								className={loading ? 'loading-card' : 'genre-contain'}
								genreName= {platform.name}
								name={platform.name} />
						</Link>
					</li>

				))}
				</>
			);
		}
	}, [selectedOption]);

	return(
		<section className={`genres-container ${isActive ? 'show' : ''}`} id='genres'>
			<h2 className='genres-title'>{selectedOption}</h2>
			<article className='genres-contain'>
				{subMenuContent}
			</article>
		</section>
	);
}
OptionSelectedMenu.propTypes = {
	selectedOption: PropTypes.string,
};
  
export {OptionSelectedMenu};