import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

function Modal(props){

	return ReactDOM.createPortal(
		<div className={props.className}>

			{props.children}
		</div>,
            
		document.getElementById('modal')
	);
}

export {Modal};