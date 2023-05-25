import React from 'react';
import './CloseBtn.css';
import PropTypes from 'prop-types';


function CloseBtn(props){
	const onClickButton = () => {
		props.setOpenModalByGame (prevState => !prevState);
	};
	return (
		<button 
			className='close-btn'
			onClick={onClickButton}
		>X</button>
	);
}
CloseBtn.propTypes = {
	setOpenModalByGame: PropTypes.func.isRequired
};
export {CloseBtn};
