import React from 'react';
import PropTypes from 'prop-types';
import './GenresContainer.css';

function GenresContainer(props){
	
	return(
		<section className='genres-container' id='genres'>
			<h2 className='genres-title'>Genres</h2>
			<article className='genres-contain'>
				{props.children}
			</article>
		</section>
	);
}
GenresContainer.propTypes = {
	children: PropTypes.node,
};
  
export {GenresContainer};