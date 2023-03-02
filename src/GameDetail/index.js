import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import {AddFavoriteButton} from '../LikeButton';
import './GameById.css';
import { GameContext } from '../GameContext';
import parse from 'html-react-parser';
import { CloseBtn } from '../CloseBtn';
// import { useIntersectionObserver } from '../GameContext/useIntersectionObserver';

// function GameById(props){
// 	console.log(props);
// 	const {imgRef, loaded} = useIntersectionObserver(props);

// 	const onClickButton = () => {
// 		props.setOpenModalByGame(prevState => !prevState);
// 	};

// 	return (
// 		<div key={props.id} className="game-id">
// 			<h1>Juegoooooo</h1>
// 			<p>{props.rating} </p>
// 			<img
// 				id={props.id}
// 				className={`game-img ${loaded ? 'loaded' : 'skeleton'}`}
// 				ref={imgRef}
// 				src={props.src}
// 				loading="lazy"
// 				onClick={onClickButton}
// 			/>
// 			<p>Released:{props.released} {props.description} </p>
// 			<h3 className="name-game">{props.name} </h3>
// 			<p>platforms: {props.platforms} </p>
// 			<AddFavoriteButton />
// 		</div>
// 	);
// }
function GameContain(){
	const {gameById} = useContext(GameContext
	);
	if(gameById instanceof Promise){
		return(
			<div>Cargando...</div>
		);
	}
	console.log(gameById);
	const {id, name, rating, released, description, background_image, stores, genres} = gameById;
	return (
		<div key={id} className="game-id">
			<h1 className="name-game">Video Game: {name}</h1>
			<p>{rating} </p>
			<CloseBtn/>
			<div className='contain-img'>
				<AddFavoriteButton />

				<img
					id={id}
					className='game-img'
					src={background_image}
					loading="lazy"
				/>
			</div>
			
			<div>Released:{released} {parse(description ? description : '')} </div>
			{stores && stores.map(store =>(
				<li key={store.id}>Store: {store.store.name} </li>

			))}
			{genres && genres.map(genre =>(
				<li key={genre.id}>Genre: {genre.name} </li>

			))}
		</div>
	);
}
// GameContain.propTypes = {
// 	id: PropTypes.number,
// 	name: PropTypes.string,
// 	src: PropTypes.string,
// 	setOpenModalByGame: PropTypes.func,
// 	description: PropTypes.string,
// 	released: PropTypes.string,
// 	rating: PropTypes.number,
// 	platforms: PropTypes.array,


// };
export {GameContain};