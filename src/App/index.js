import React from 'react';
import { AppRouter } from '../routers/AppRouter';
import { GameProvider } from './GameContext';



function App() {
  
	return (
		<GameProvider>
			< AppRouter/>
		</GameProvider>   
	);
}

export default App;
