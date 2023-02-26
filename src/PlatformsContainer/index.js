import React from 'react';
import PropTypes from 'prop-types';
import './PlatformsContainer.css';


function PlatformsContainer(props){
	return(
		<> 
			<section id='platforms'>
				<div className='dlc-header'>
					<h2 className='dlc-title'>Platforms</h2>
				</div>
				<article className='search-contain'>
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