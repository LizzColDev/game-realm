import React from 'react';
import './NavList.css';
import PropTypes from 'prop-types';
import { GameContext } from '../GameContext';


function NavList({ className }) {
	const { setOpenModal } = React.useContext(GameContext);

	const onClickButton = (e) => {
		setOpenModal(prevState => !prevState);

		  let chosenMenu = e.target.textContent;
		//   if (chosenMenu) {

		// 	scrollToSection(chosenMenu.toLowerCase());
			
		//   }
		  console.log('click en button', chosenMenu);
	};
	return(
		<>
			<ul className={className}>
				<li>
					<a href='#genres' onClick={onClickButton}>Genres</a>
				</li>
				<li>
					<a href='#games'onClick={onClickButton}>Games</a>
				</li>
				<li>
					<a href='#news' onClick={onClickButton}>News</a>
				</li>
				<li>
					<a href='#ranking' onClick={onClickButton}>Ranking</a>
				</li>
				<li>
					<a href='#guidesAndTricks' onClick={onClickButton}>Guides and Tricks</a>
				</li>
			</ul>
		</>
	);
}

NavList.propTypes = {
	className: PropTypes.string,
	setOpenModal: PropTypes.func,
	scrollToSection: PropTypes.func


};
  
export {NavList};
