import React from 'react';
import ReactDOM from 'react-dom';
import { GameItem } from '../GameDetail';

import './modalByGame.css';

function ModalByGame(){
	return ReactDOM.createPortal(
		<div className="modalBackground-Game">
			<GameItem className='game-details'/>	
		</div>,
            
		document.getElementById('gameById')
	);
}

export {ModalByGame};