import React from 'react';
import ReactDOM from 'react-dom';
import { GameContain} from '../GameDetail';

import './modalByGame.css';

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