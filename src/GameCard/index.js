import React from 'react';
import PropTypes from 'prop-types';
import {AddFavoriteButton} from '../LikeButton';
import './GameCard.css';
import { useIntersectionObserver } from '../GameContext/useIntersectionObserver';

function GameCard(props){
	
	const {imgRef, loaded} = useIntersectionObserver(props);
	console.log(props);

	const onClickButton = () => {
		props.setOpenModalByGame(prevState => !prevState);
	};

	return (
		<div className="game-container">
			
			<img
				className={`game-img ${loaded ? 'loaded' : 'skeleton'}`}
				ref={imgRef}
				src={props.src}
				loading="lazy"
				onClick={onClickButton}
			/>
			

			<h3 className="name-game">{props.name} </h3>
			<AddFavoriteButton />
		</div>
	);
}

GameCard.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	children: PropTypes.node,
	setOpenModalByGame: PropTypes.func

};
export default GameCard;