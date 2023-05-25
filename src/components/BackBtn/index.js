import React from 'react';
import './BackBtn.css';
import { useNavigate } from 'react-router-dom';

function BackBtn(){
	const navigate = useNavigate();
	const onClickButton = () => navigate('/');
	return (
		<button 
			className='back-btn'
			onClick={onClickButton}
		>
			<img src='https://img.icons8.com/nolan/256/circled-left-2.png' className="menu-icon-bar"></img>

		</button>
	);
}
export {BackBtn};
