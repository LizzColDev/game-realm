import React from 'react';
import PropTypes from 'prop-types';

import './Categories.css';

function Categories(props){
	return(
		<form className='formContainSearch'>
			<div className='searchContain'>
				{props.children}
				<button className='btn btn-search'>🔍</button>
			</div>
			
		</form>
	);
}

Categories.propTypes = {
	children: PropTypes.node,
};
export {Categories};