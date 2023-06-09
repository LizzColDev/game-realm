import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../../App/GameContext';
import { Link, useLocation } from 'react-router-dom';
import { SubMenu } from '../SubMenu/SubMenu';

function MenuList() {
	const {

		setShowSubMenu,
		setSelectedOption,
		openModal,
		setIsActive,
		showSubMenu,
		selectedOption,
		setToValue,
		isActive
	} = useContext(GameContext);

	const location = useLocation();

	const toggleSubMenu = (option) => {
		setShowSubMenu(!showSubMenu);
		if (selectedOption === option) {
			setShowSubMenu(!showSubMenu);
			setIsActive(!isActive);

		}
		setSelectedOption(option);
	};

	useEffect(() => {
		const path = location.pathname;
		setToValue(path);
		
	  }, [location.pathname, setToValue]);
	
	  useEffect(() => {
		if (!openModal && selectedOption) {
			setIsActive(true);

		} else if (!openModal && !selectedOption) {
			setIsActive(false);

		}
	}, [openModal, selectedOption, setIsActive]);
	
	console.log(selectedOption);
	return (
		<>
			<li>
				<Link to="/ranking-games" >Ranking</Link>
			</li>
			<li>
				<Link to="/upcoming-games" >Upcoming Games</Link>
			</li>
			<li>
				<Link to="/popular-games" >Popular Games</Link>
			</li>
			<li>
				<Link to="/news" >News</Link>
			</li>
			<li>
				<span
					onClick={() => toggleSubMenu('genres')}
					id="genres"
				>
          Genres
				</span>
				{showSubMenu && <SubMenu />}
			</li>
			<li>
				<span onClick={() => toggleSubMenu('platforms')} id="platforms">
          Platforms
				</span>
				{showSubMenu && <SubMenu />}
			</li>
			<li>
				<span onClick={() => toggleSubMenu('stores')} id="stores">
          Stores
				</span>
				{showSubMenu && <SubMenu />}
			</li>
		</>
	);
}

MenuList.propTypes = {
	setOpenModalList: PropTypes.func,
};

export { MenuList };