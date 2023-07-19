import React from 'react';
import PropTypes from 'prop-types';
import './NewsCotainer.css';

function NewsContainer(props){
	return(
		<section className='news-container' id='news'>
			<div className='news-header'>
				<h2 className='news-title'>News</h2>
			</div>
			<article className='news-contain'>
				{props.children}
			</article>
			<button className='btn upcoming-btn' style={{margin: '0 auto'}}>
        Load more
			</button>
		</section>
	);
}
NewsContainer.propTypes = {
	children: PropTypes.node,
};
  
export {NewsContainer};