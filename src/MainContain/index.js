import React from 'react';
import PropTypes from 'prop-types';
import './MainContainer.css';

function MainContain(props){
	return(
		<main>
			{props.children}
		</main>
	);
}
MainContain.propTypes = {
	children: PropTypes.node.isRequired,
};
  
export {MainContain};