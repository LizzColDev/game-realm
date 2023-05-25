import React from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../../App/GameContext';


function MenuList() {
	const {  setIsActive, openModal,setOpenModalList } = React.useContext(GameContext);

	const onClickButton = (e) => {
		if(openModal){
			setOpenModalList(true);
		}
		if(e.target.value === e.target.value){
			setOpenModalList(false);

		}
		// setOpenModal(prevState => !prevState);
		setIsActive(prevState => !prevState);
	};
	return(
		<>
			<li>
				<a alt='genres' onClick={onClickButton}>Genres</a>
			</li>
			<li>
				<a alt='Ranking' onClick={onClickButton}>Ranking</a>
			</li>
			<li>
				<a alt='Upcoming' onClick={onClickButton}>Upcoming Games</a>
			</li>
			<li>
				<a alt='Platforms' onClick={onClickButton}>Platforms</a>
			</li>
			<li>
				<a alt='News' onClick={onClickButton}>News</a>
			</li>
				
			<li>
				<a alt='Guides and Tricks' onClick={onClickButton}>Guides and Tricks</a>
			</li>
		</>
	);
}

MenuList.propTypes = {
	className: PropTypes.string,
	setOpenModal: PropTypes.func,


};
  
export {MenuList};
