import React from 'react';
import { GameProvider } from '../GameContext';
import { AppRouter } from '../routers/AppRouter';



function App() {
  
	return (
		<GameProvider>
			< AppRouter/>
		</GameProvider>   
	);
}

export default App;
