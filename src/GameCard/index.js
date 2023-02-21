import React from 'react';
import PropTypes from 'prop-types';
import {AddFavoriteButton} from '../LikeButton';
import './GameCard.css';

function GameCard(props){
	return(
		<div className='game-container'>
			<img  className='game-img' src={props.src}/>
			<h3 className='name-game'>{props.name} </h3>
			<AddFavoriteButton/>
		</div>

	);
}
GameCard.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	children: PropTypes.node,
};
export {GameCard};