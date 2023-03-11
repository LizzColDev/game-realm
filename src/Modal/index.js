import React from 'react';
import ReactDOM from 'react-dom';
import { NavList } from '../NavList';

import './Modal.css';

function Modal(){

	return ReactDOM.createPortal(
		<div className="ModalBackground">
			<NavList className='modal-links'/>
			
		</div>,
            
		document.getElementById('modal')
	);
}

export {Modal};