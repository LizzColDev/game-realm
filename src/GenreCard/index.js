import React from 'react';
import PropTypes from 'prop-types';
import './GenreCard.css';

function GenreCard(props){
	return(
		<button type='button' key={props.id} className='genre-contain'>
			{props.genreName}
		</button>

		

	);
}
GenreCard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	genreName: PropTypes.string,
	children: PropTypes.node,
};
export {GenreCard};