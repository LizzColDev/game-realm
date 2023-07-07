import React from 'react';
import PropTypes from 'prop-types';
import './GenreCard.css';

function GenreCard({className, ...props}){
	return(
		
		<button type='button' key={props.id}  className={className}>
			{props.genreName}
		</button>
	);
}
GenreCard.propTypes = {
	id: PropTypes.number,
	genreName: PropTypes.string,
	className: PropTypes.string
};
export {GenreCard};