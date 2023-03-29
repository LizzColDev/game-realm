import React from 'react';
import './NavTitleLogo.css';
import PropTypes from 'prop-types';
import { ToogleMenuButton } from '../ToogleMenuButton';
import { GameContext } from '../GameContext';
import { SearchForm } from '../SearchForm';

function NavTitleLogo({className}){
	const {setOpenModal, setOpenModalList} = React.useContext(GameContext);
	return(
		<>
			<section className={className}>
				<div className='title-logo-container'>
					<img src="https://cdn-icons-png.flaticon.com/512/7205/7205615.png" className="logo" alt="logo" />
					<h1 className='title'>Game World</h1>
				</div>

				<SearchForm/>
				<ToogleMenuButton
					setOpenModal={setOpenModal}
					setOpenModalList={setOpenModalList}

				/>
			</section>
		</>
	);
}

NavTitleLogo.propTypes = {
	className: PropTypes.string 
};
  
export {NavTitleLogo};


