import React from 'react';
import { GameContext } from '../../App/GameContext';
import { OptionSelectedMenu } from '../OptionSelectedMenu';


function ListContainer() {
	const {  openModal, selectedOption } = React.useContext(GameContext);

	return(
		<>
			
			{!openModal && selectedOption === 'genres' && <OptionSelectedMenu />}
			{!openModal && selectedOption === 'platforms' && <OptionSelectedMenu/>}
				
		</>
	);
}
  
export {ListContainer};