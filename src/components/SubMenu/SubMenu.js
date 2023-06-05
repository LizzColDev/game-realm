import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Submenu.css';
import { GameContext } from '../../App/GameContext';
import { useDataBySelectedMenu } from '../../App/GameContext/useDataBySelectedMenu';


function SubMenu({selectedOption}) {
	const {  goPages } = useContext(GameContext);
	const { gameData, isLoading, isError } = useDataBySelectedMenu(selectedOption);
	if (isLoading) {
		return <div>Loading...</div>;
	  }
	
	  if (isError) {
		return <div>Error fetching {selectedOption}</div>;
	  }


	return(
		<ul className={`subMenu subMenu-${gameData}`}>
			{gameData && gameData.map((option) =>(
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
