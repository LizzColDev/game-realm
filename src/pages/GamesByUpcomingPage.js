import React from 'react';
import PropTypes from 'prop-types';

function GamesByUpcomingPage(props){
	return(<div className='container-by-ranking'>
		<div>Upcoming Games</div>
		{props.children}
	</div>

	);
}
GamesByUpcomingPage.propTypes = {
	children: PropTypes.node,
};
export {GamesByUpcomingPage};