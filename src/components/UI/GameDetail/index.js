import React, { useContext } from 'react';
import {AddFavoriteButton} from '../../common/LikeButton';
import './GameById.css';
import { GameContext } from '../../../GameContext/GameProvider';
import parse from 'html-react-parser';
import { CloseBtn } from '../../common/CloseBtn';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'react-bootstrap';

function GameContain(){
	const {gameById, setOpenModalByGame} = useContext(GameContext);
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
					<h5 style={{backgroundColor: 'var(--clr-primary-2)'}}>Genres:</h5>
					{genres && genres.map(genre =>(
						<Button onClick={() => setOpenModalByGame(false)} as={Link} key={genre.id} to={`/genres/${genre.name.toLowerCase()}`}>
							{genre.name}
						</Button>
					))}
				</div>
				<div>
					<h5 style={{backgroundColor: 'var(--clr-primary-2)'}} >Stores:</h5>
					{stores && stores.map(store =>(
						<h2 key={stores.id}>
							<Badge className="fs-6" bg="light" text="dark">{store.store.name}						
							</Badge>
						</h2>
					

					))}
				</div>
			</div>
		</div>
	);
}

export {GameContain};