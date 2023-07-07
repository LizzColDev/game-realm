import React from 'react';
import ReactDOM from 'react-dom';
import './modalByGame.css';
import { GameContain } from '../GameDetail';

function ModalByGame(){
	document.body.style.overflow = 'hidden';

	return ReactDOM.createPortal(
		<div className="modalBackground-Game">
			<GameContain/>	
		</div>,
            
		document.getElementById('gameById')
	);
}

export {ModalByGame};