import React from 'react';
import { GameProvider } from '../GameContext';

import { AppUI } from './AppUI';

function App() {
  
	return (
		<GameProvider>
			<AppUI/>   
		</GameProvider>   
	);
}

export default App;
