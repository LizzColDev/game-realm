import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Submenu.css';
import { GameContext } from '../../App/GameContext';
import { fetchGames } from '../../App/GameContext/useDataGames';
import { useQuery } from 'react-query';


function SubMenu() {
	const {  goPages, selectedOption } = useContext(GameContext);
	const {data, isLoading, error} = useQuery('games', fetchGames);

	if (isLoading) {
		return <div>Loading...</div>;
	  }
	
	  if (error) {
		return <div>Error fetching {selectedOption}</div>;
	  }

	  let gamesBySelect = [];
	  if (selectedOption === 'platforms') {
		gamesBySelect = data?.platformsGames;
	  } else if (selectedOption === 'genres') {
		gamesBySelect = data?.genresGames;
	  } else if (selectedOption === 'stores') {
		gamesBySelect = data?.storesGames;
	  }
	return(
		<ul className={`subMenu subMenu-${selectedOption}`}>
			{gamesBySelect && gamesBySelect.map((option) =>(
				<li key={option.id}>
					<Link  to={`/${selectedOption}`} onClick={goPages}>
						{option.name}
					</Link>
				</li>

			))}
		</ul>
	);
}

SubMenu.propTypes = {
	selectedOption: PropTypes.string,

};
  
export {SubMenu};
