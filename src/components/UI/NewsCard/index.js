import React from 'react';
import PropTypes from 'prop-types';
import './NewsCard.css';
import { Card } from 'react-bootstrap';

function NewsCard(props) {
	const newsDate = new Date(props.date);
	const formattedDate = newsDate.toDateString();

	let domain = '';
	try {
	  domain = new URL(props.url).hostname.replace('www.', '');
	} catch { /* empty */ }

	return (
		<Card>
			<Card.Header>					<a 
				className='date-source domain'
				href={props.url}
				target='_blank'
				rel='noopener noreferrer'>{domain}</a></Card.Header>
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p>
						<a
							href={props.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							{' '}
							{props.description} 
							{' '}
						</a>

					</p>
					<footer className="blockquote-footer">
						{formattedDate}
					</footer>
				</blockquote>
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