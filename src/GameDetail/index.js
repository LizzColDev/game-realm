import React, { useContext } from 'react';
import {AddFavoriteButton} from '../LikeButton';
import './GameById.css';
import { GameContext } from '../GameContext';
import parse from 'html-react-parser';
import { CloseBtn } from '../CloseBtn';

function GameContain(){
	const {gameById, setOpenModalByGame} = useContext(GameContext);
	if(gameById instanceof Promise){
		return(
			<div>Cargando...</div>
		);
	}
	const {id, name, rating, released, description, background_image, stores, genres} = gameById;
	return (
		<div key={id} className="game-id">
			<h1 className="name-game">Video Game: {name}</h1>
			<p>{rating} </p>
			<CloseBtn
				setOpenModalByGame={setOpenModalByGame}
			/>
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

export {GameContain};