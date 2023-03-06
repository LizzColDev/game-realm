import React from 'react';
import PropTypes from 'prop-types';
import './PlatformsContainer.css';


function PlatformsContainer(props){
	return(
		<> 
			<section className='genres-container' id='genres'>
				<h2 className='genres-title'>Platforms</h2>
				<article className='genres-contain'>
					{props.children}
				</article>
			</section>
		</>
		
	);
}
PlatformsContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
  
export {PlatformsContainer};