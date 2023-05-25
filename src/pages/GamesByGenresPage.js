import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { BackBtn } from '../components/BackBtn';


function GamesByGenresPage(props){
	document.body.style.overflow = 'auto';

	return(
		<div className='pages-container'>
			<div>
				<BackBtn/>
				<h1>{props.name} Games</h1>
			</div>
			
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