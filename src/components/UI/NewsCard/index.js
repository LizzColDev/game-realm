import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './NewsCard.css';
import { useIntersectionObserver } from '../../../GameContext/useIntersectionObserver';
import { Card } from 'react-bootstrap';

function NewsCard(props) {
	const newsDate = new Date(props.date);
	const formattedDate = newsDate.toDateString();
	let imgSrc = props.src
		? props.src
		: 'https://cdn-icons-png.flaticon.com/512/7205/7205615.png';
	const [isMobile, setIsMobile] = React.useState(false);

	const { imgRef } = useIntersectionObserver(props);

	let domain = '';
	try {
	  domain = new URL(props.url).hostname.replace('www.', '');
	} catch { /* empty */ }

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 480);
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<Card className={`${isMobile ? 'mobile-news-section' : 'news-section'}`}>
			<Card.Img
				className={`${isMobile ? 'news-img-mobile' : 'news-img'}`}
				ref={imgRef}
				loading='lazy'
				src={imgSrc}
			/>
			<Card.Body className={`${isMobile ? 'info-news-mobile' : 'info-news'}`}>
				<Card.Title className='title-news'>{props.name}</Card.Title>
				
				<p className={`${isMobile ? 'mobile-news-description' : 'description-news'}`}>
					{props.description}
				</p>
				<div 
					style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', gap:'6px', marginTop: '4px'}}>
					<Card.Text className='date-source'>{formattedDate}</Card.Text>
					<a 
						className='date-source domain'
						href={props.url}
						target='_blank'
						rel='noopener noreferrer'>{domain}</a>
				</div>
			</Card.Body>
		</Card>
	);
}

NewsCard.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	children: PropTypes.node,
	date: PropTypes.string,
	description: PropTypes.string,
	url: PropTypes.string
};

export default NewsCard;