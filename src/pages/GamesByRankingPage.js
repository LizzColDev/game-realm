import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { BackBtn } from '../BackBtn';


//pend infinite scrolling

function GamesByRankingPage(props){
	document.body.style.overflow = 'auto';

	return(
		<div className='pages-container'>
			<div>
				<BackBtn/>
				<h1>Games by Ranking</h1>
			</div>
			<div className='page-contain-img' >
				{props.children}
			</div>
		</div>
		
	);
}
GamesByRankingPage.propTypes = {
	children: PropTypes.node,
};
  
export {GamesByRankingPage};