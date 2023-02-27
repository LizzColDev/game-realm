import React from 'react';
import PropTypes from 'prop-types';
import './UpcomingContainer.css';


function UpcomingContainer(props){
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();

	return(
		<> 
			<section className='upcoming-container' id='upcoming'>
				<div className='upcoming-header'>
					<h2 className='upcoming-title'>Upcoming Games {currentYear}</h2>
					<button className='upcoming-btn btn'>See more</button>
				</div>
				<article className='upcoming-contain'>
					{props.children}
				</article>
			</section>
		</>
		
	);
}
UpcomingContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
  
export {UpcomingContainer};