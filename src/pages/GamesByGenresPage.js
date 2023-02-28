import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


function GamesByGenresPage(props){
	return(
		<div className='container-games'>
			<h1>Games by Genre</h1>
			<div className='games-by-genres' >
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