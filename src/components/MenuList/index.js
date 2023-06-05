import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../../App/GameContext';
import { Link } from 'react-router-dom';
import { SubMenu } from '../SubMenu/SubMenu';

function MenuList() {
	const {
		setIsActive,
		openModal,
		setShowSubMenu,
		setSelectedOption,
		setLoading,
		showSubMenu,
		selectedOption
	} = useContext(GameContext);

	const toggleSubMenu = (option) => {
		console.log(option);
		setShowSubMenu(true);
		if (selectedOption === option) {
			setShowSubMenu(false);
			setIsActive(false);

		} else {
			setSelectedOption(option);
			setLoading(false);
		}
	};

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
				<Link to="/ranking">Ranking</Link>
			</li>
			<li>
				<Link to="/upcoming">Upcoming Games</Link>
			</li>
			<li>
				<Link to="/news">News</Link>
			</li>
			<li>
				<Link to="/guides-and-tricks">Guides and Tricks</Link>
			</li>
			<li>
				<span
					onClick={() => toggleSubMenu('genres')}
					id="genres"
				>
          Genres
				</span>
				{openModal && showSubMenu && selectedOption === 'genres' && (
					<SubMenu selectedOption={selectedOption} />
				)}
			</li>
			<li>
				<span
					onClick={() => toggleSubMenu('platforms')}
					id="platforms"
				>
          Platforms
				</span>
				{openModal && showSubMenu && selectedOption === 'platforms' && (
					<SubMenu selectedOption={`${selectedOption}/lists/parents`} />
				)}
			</li>
			<li>
				<span
					onClick={() => toggleSubMenu('stores')}
					id="stores"
				>
          Stores
				</span>
				{openModal && showSubMenu && selectedOption === 'stores' && (
					<SubMenu selectedOption={selectedOption} />
				)}
			</li>
		</>
	);
}

MenuList.propTypes = {
	setOpenModalList: PropTypes.func,
};

export { MenuList };