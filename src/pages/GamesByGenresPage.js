import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


function GamesByGenresPage(props){
	document.body.style.overflow = 'auto';

	return(
		<div className='pages-container'>
			<h1>Games by Genre</h1>
			<div className='page-contain-img' >
				{props.children}
			</div>
		</div>
	);
}
GamesByGenresPage.propTypes = {
	name: PropTypes.string,
	children: PropTypes.node,
};
  
export {GamesByGenresPage};