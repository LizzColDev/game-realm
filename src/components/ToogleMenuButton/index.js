import React from 'react';
import './ToogleMenuButton.css';
import PropTypes from 'prop-types';

function ToogleMenuButton(props){
	const onClickButton = () => {
		props.setOpenModal(prevState => !prevState);
	};
	return(
		<>
			<button 
				className="toggle-menu"
				onClick={onClickButton}
			>
				<img src='https://cdn-icons-png.flaticon.com/512/8367/8367536.png' className="menu-icon-bar"></img>
			</button>
		</>
	);
}

ToogleMenuButton.propTypes = {
	setOpenModal: PropTypes.func.isRequired,
};
  
export {ToogleMenuButton};