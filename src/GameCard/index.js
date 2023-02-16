import React from 'react';
import PropTypes from 'prop-types';
import './GameCard.css';

function GameCard(props){
	return(
		<div key={props.id} alt={props.name} className='game-container'>
			<img  className='game-img' src={props.src}/>
		</div>

	);
}
GameCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired
};
export {GameCard};