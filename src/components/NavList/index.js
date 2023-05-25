import React from 'react';
import './NavList.css';
import PropTypes from 'prop-types';
// import { GameContext } from '../GameContext';


function NavList(props) {
	// const { setOpenModal, setIsActive } = React.useContext(GameContext);

	// const onClickButton = () => {
	// 	setOpenModal(prevState => !prevState);
	// 	setIsActive(prevState => !prevState);
	// };
	return(
		<>
			<ul className={props.className}>
				{props.loading && props.onLoading()}
				{props.children}
			</ul>
		</>
	);
}

NavList.propTypes = {
	className: PropTypes.string,
	setOpenModal: PropTypes.func,
	scrollToSection: PropTypes.func,
	children: PropTypes.func,
	loading: PropTypes.string,
	onLoading: PropTypes.string,
};
  
export {NavList};
