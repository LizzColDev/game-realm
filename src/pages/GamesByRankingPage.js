import React from 'react';
import PropTypes from 'prop-types';


//pend infinite scrolling

function GamesByRankingPage(props){
	return(
		<div className='container-by-ranking'>
			<div>Games by Ranking</div>
			{props.children}
		</div>
		
	);
}
GamesByRankingPage.propTypes = {
	children: PropTypes.node,
};
  
export {GamesByRankingPage};