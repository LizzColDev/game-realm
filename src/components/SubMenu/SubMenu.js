import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { GameContext } from '../../App/GameContext';
import { Link } from 'react-router-dom';
import './Submenu.css';
import { GameContext } from '../../App/GameContext';


function SubMenu() {
	const [subMenuContent, setSubMenuContent] = useState(null);
	const { genres, goPages, platforms, selectedOption } = useContext(GameContext);
	useEffect(() =>{
		if (selectedOption === 'genres') {
			setSubMenuContent (
				<>{genres && genres.map(genre =>(
					<li key={genre.id}>
						<Link  to='/genres' onClick={goPages}>
							{genre.name}
						</Link>
					</li>

				))}
				</>
			);
		} else if (selectedOption === 'platforms') {
			setSubMenuContent(
				<>{platforms && platforms.map(platform =>(
					<li key={platform.id}>
						<Link  to='/platform' onClick={goPages}>
							{platform.name}
						</Link>
					</li>

				))}
				</>
			);
		}
	}, [selectedOption]);

	return(
		<ul className={`subMenu subMenu-${selectedOption}`}>
			{subMenuContent}
		</ul>
	);
}

SubMenu.propTypes = {
	selectedOption: PropTypes.string,


};
  
export {SubMenu};
