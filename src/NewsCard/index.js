import React from 'react';
import PropTypes from 'prop-types';
import './NewsCard.css';

function NewsCard(props){
	const fecha = new Date(props.date);
	const date = fecha.toDateString();
	let imgSrc = props.src;
	if(!imgSrc){
		imgSrc= 'https://cdn-icons-png.flaticon.com/512/7205/7205615.png';
	}
	return(
		<div  className='news-section'>
			<img  className='news-img' src={imgSrc}/>
			<div className='info-news'>
				<h6 className='title-news'>{props.name}</h6>
				<p className='description-news'>{props.description} </p>
				<span className='date-source'>{date} - {props.source}</span>
			</div>

		</div>

	);
}
NewsCard.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	children: PropTypes.node,
	date: PropTypes.string,
	description: PropTypes.string,
	source:PropTypes.string
};
export {NewsCard};