import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './GameCard.css';
import { useIntersectionObserver } from '../GameContext/useIntersectionObserver';
import { GameContext } from '../GameContext';

function GameCard({className, ...props}){
	const {getId, setOpenModalByGame} =useContext(GameContext);

	const {imgRef, loaded} = useIntersectionObserver(props);

	const onClickButton = (e) => {
		const idGame = e.target.id;
		getId(idGame);
		setOpenModalByGame(prevState => !prevState);
	};

	return (
		<div key={props.id} className="game-container">
			
			<img
				className={`${className} ${loaded ? 'loaded' : 'skeleton'}`}
				id={props.id}
				name={props.name}
				ref={imgRef}
				src={props.src}
				loading="lazy"
				onClick={onClickButton}
			/>
			

			<h3 alt={props.id} className="name-game">{props.name} </h3>
			
		</div>
	);
}

GameCard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	src: PropTypes.string,
	children: PropTypes.node,
	setOpenModalByGame: PropTypes.func,
	className: PropTypes.func
};
export default GameCard;