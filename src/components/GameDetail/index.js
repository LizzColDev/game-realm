import React, { useContext } from 'react';
import {AddFavoriteButton} from '../../components/LikeButton';
import './GameById.css';
import { GameContext } from '../../App/GameContext';
import parse from 'html-react-parser';
import { CloseBtn } from '../CloseBtn';
import { GenreCard } from '../GenreCard';
import { Link } from 'react-router-dom';

function GameContain(){
	const {gameById, setOpenModalByGame, goPages} = useContext(GameContext);
	if(gameById instanceof Promise){
		return(
			<div>Cargando...</div>
		);
	}
	const {id, name, rating, released, description, background_image, stores, genres} = gameById;
	{console.log(genres);}

	let ratingDec = rating.toFixed(1);
	return (
		<div key={id} className="game-id">
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
				<div className='contain-rating-name'>
					<p>{ratingDec} 🏅</p>
					<h1>{name}</h1>
				</div>
			</div>

			<p className='released'>Released: {released}</p>

			<div className='description-game'>
				<p>Description:</p>

				{parse(description ? description : '')} 
			</div>

			<div className='stores-genres-game'>
				<div>
					<h5>Platforms:</h5>
					{stores && stores.map(store =>(
						<Link key={store.id} to='/games-by-platforms' onClick={goPages}>
							<GenreCard genreName={store.store.name}> </GenreCard>
						
						</Link>

					))}
				</div>
				<div>
					<h5>Genres:</h5>
					{genres && genres.map(genre =>(
						<Link key={genre.id} to='/genres' onClick={goPages}>
							<GenreCard 
								genreName= {genre.name}
								name={genre.name} />
						</Link>
					))}
				</div>

			</div>
		</div>
	);
}

export {GameContain};