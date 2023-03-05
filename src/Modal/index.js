import React from 'react';
import ReactDOM from 'react-dom';
import { NavList } from '../NavList';
import { NavTitleLogo } from '../NavTitleLogo';

import './Modal.css';

function Modal(){

	return ReactDOM.createPortal(
		<div className="ModalBackground">
			<NavTitleLogo className='modal-header'></NavTitleLogo>
			<NavList className='modal-links'/>
			
		</div>,
            
		document.getElementById('modal')
	);
}

export {Modal};