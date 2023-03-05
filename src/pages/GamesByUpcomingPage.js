import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function GamesByUpcomingPage(props){
	document.body.style.overflow = 'auto';

	return(<div className='pages-container'>
		<div>Upcoming Games</div>
		<div className='page-contain-img' >
			{props.children}
		</div>
	</div>

	);
}
GamesByUpcomingPage.propTypes = {
	children: PropTypes.node,
};
export {GamesByUpcomingPage};