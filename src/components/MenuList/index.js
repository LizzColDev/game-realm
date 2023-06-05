import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../../App/GameContext';
import { Link } from 'react-router-dom';
import { SubMenu } from '../SubMenu/SubMenu';

function MenuList() {
	const {  setIsActive, openModal, setShowSubMenu, setSelectedOption, setLoading, showSubMenu, selectedOption } = useContext(GameContext);

	const toggleSubMenu = (option) => {
		setShowSubMenu(prevState => !prevState);
		setSelectedOption(option);
		if(!openModal){
			setIsActive(prevState => !prevState);
			setLoading(false);
		}
	};

	return(
		<>
			<li>
				<Link to="/ranking" >Ranking</Link>
			</li>
			<li>
				<Link to="/upcoming" >Upcoming Games</Link>
			</li>
			<li>
				<Link to="/news" >News</Link>
			</li>
				
			<li>
				<Link to="/Guides and Tricks" >Guides and Tricks</Link>
			</li>
			<li>
				<span onClick={() => toggleSubMenu('genres')} id='genres'>Genres</span>
				{openModal && showSubMenu && selectedOption === 'genres' && <SubMenu selectedOption={selectedOption} />}
			</li>
			<li>
				<span onClick={() => toggleSubMenu('platforms')} id='platforms'>Platforms</span>
				{openModal && showSubMenu && selectedOption === 'platforms' && <SubMenu selectedOption={`${selectedOption}/lists/parents`} />}
			</li>
			<li>
				<span onClick={() => toggleSubMenu('stores')} id='stores'>Stores</span>
				{openModal && showSubMenu && selectedOption === 'stores' && <SubMenu selectedOption={selectedOption}/>}
			</li>
		</>
	);
}

MenuList.propTypes = {
	setOpenModalList: PropTypes.func,
};
  
export {MenuList};
