import React from 'react';
import PropTypes from 'prop-types';
import {AddFavoriteButton} from '../LikeButton';
import './GameCard.css';

function GameCard(props){
	return(
		<div key={props.id} alt={props.name} className='game-container'>
			<img  className='game-img' src={props.src}/>
			<AddFavoriteButton/>
		</div>

	);
}
GameCard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	src: PropTypes.string,
	children: PropTypes.node,
};
export {GameCard};