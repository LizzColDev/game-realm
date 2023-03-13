import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './GenresContainer.css';
import { GameContext } from '../GameContext';

function GenresContainer(props){
	const {isActive} = useContext(GameContext);
	
	return(
		<section className={`genres-container ${isActive ? 'show' : ''}`} id='genres'>
			<h2 className='genres-title'>Genres</h2>
			<article className='genres-contain'>
				{props.children}
			</article>
		</section>
	);
}
GenresContainer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};
  
export {GenresContainer};