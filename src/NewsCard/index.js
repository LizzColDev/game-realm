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
	const [clicked, setClicked] = React.useState(false);
	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
	  const handleResize = () => {
			setIsMobile(window.innerWidth < 950);
	  };
	  window.addEventListener('resize', handleResize);
	  handleResize();
	  return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleImageClick = () => {
		if(props.description){
			setClicked(prevState => !prevState);
		}
		
	  };
	return(
		<div  className={`news-section ${isMobile ? 'mobile-news-section' : ''}`} onMouseOver={handleImageClick} onMouseOut={handleImageClick}>
			<img  className='news-img' src={imgSrc}/>
			<div className='info-news'>
				<h6 className='title-news'>{props.name}</h6>
				<p className={`description-news ${clicked && isMobile ? 'mobile-news-description' : ''}`}>{props.description}</p>
				<span className='date-source'>{date}</span>
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
};
export {NewsCard};