import React from 'react';
import PropTypes from 'prop-types';

import './SearchForm.css';

function SearchForm(props){
	return(
		<form className='formContainSearch'>
			<div className='searchContain'>
				{props.children}
				<button className='btn btn-search'>🔍</button>
			</div>
			
		</form>
	);
}

SearchForm.propTypes = {
	children: PropTypes.node.isRequired,
};
export {SearchForm};