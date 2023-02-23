import React from 'react';
import './NavTitleLogo.css';
import PropTypes from 'prop-types';
import { ToogleMenuButton } from '../ToogleMenuButton';
import { GameContext } from '../GameContext';


function NavTitleLogo({className}){
	const {setOpenModal} = React.useContext(GameContext);
	return(
		<>
			<div className={className}>
				<img src="https://cdn-icons-png.flaticon.com/512/7205/7205615.png" className="logo" alt="logo" />
				<h1 className='title'>Game World</h1>

				<ToogleMenuButton
					setOpenModal={setOpenModal}
				/>
			</div>
		</>
	);
}

NavTitleLogo.propTypes = {
	className: PropTypes.string 
};
  
export {NavTitleLogo};


