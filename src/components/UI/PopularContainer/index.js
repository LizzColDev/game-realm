import React from 'react';
import PropTypes from 'prop-types';
import './RankingCotainer.css';
import { Link } from 'react-router-dom';

function PopularContainer(props){
	return(
		<section className='games-preview-container' id='popular'>
			<div className='preview-header'>
				<h2 className='preview-title'>Most Popular</h2>
				<Link to={'/popular-games'}>
					<button className='ranking-btn btn'>See more</button>

				</Link>
			</div>
			<article className='games-contain'>
				{props.children}
			</article>
		</section>
	);
}
PopularContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
  
export {PopularContainer};