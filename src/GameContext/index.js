import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameContext = React.createContext();

function GameList() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		axios.get('https://www.giantbomb.com/api/games/?api_key=YOUR_API_KEY&format=json')
			.then(response => setGames(response.data.results))
			.catch(error => console.log(error));
	}, []);

	return (
		<div>
			{games.map(game => (
				<div key={game.id}>
					<h2>{game.name}</h2>
					<img src={game.image.medium_url} alt={game.name} />
					<p>{game.deck}</p>
				</div>
			))}
		</div>
	);
}

// const GameProvider(props){
// 	const []
// }

export {GameContext, GameList};