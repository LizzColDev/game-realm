import React from 'react';
import PropTypes from 'prop-types';
import './NewsCard.css';

function NewsCard(props){
	const fecha = new Date(props.date);
	const date = fecha.toDateString();
	return(
		<div key={props.name} name={props.name} className='news-section'>
			<img  className='news-img' src={props.src}/>
			<p className='title-news'>{props.name} - {date}</p>
		</div>

	);
}
NewsCard.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	children: PropTypes.node,
	date: PropTypes.string,
};
export {NewsCard};