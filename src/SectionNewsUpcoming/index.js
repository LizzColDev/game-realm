import React from 'react';
import PropTypes from 'prop-types';
import './SectionNewsUpcoming.css';

function SectionNewsUpcoming(props){
	return(
		<section className='section-news-upcoming'>
			{props.children}
		</section>
	);
}
SectionNewsUpcoming.propTypes = {
	children: PropTypes.node.isRequired,
};
  
export {SectionNewsUpcoming};