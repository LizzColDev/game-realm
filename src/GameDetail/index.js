import React from 'react';
import PropTypes from 'prop-types';

function GameItem(){
	return(
		<li>
			<span>C</span>
			<p>Juego </p>
			<span>X</span>
		</li>
	);
}

GameItem.propTypes = {
	text: PropTypes.string
};
export { GameItem };
