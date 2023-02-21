import React from 'react';
import PropTypes from 'prop-types';
import './NewsCotainer.css';

function NewsContainer(props){
	return(
		<section className='news-container'>
			<div className='news-header'>
				<h2 className='news-title'>News</h2>
			</div>
			<article className='news-contain'>
				{props.children}
			</article>
		</section>
	);
}
NewsContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
  
export {NewsContainer};