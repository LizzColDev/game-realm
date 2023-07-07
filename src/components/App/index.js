import React from 'react';
import { AppRouter } from '../routers/AppRouter';
import { GameProvider } from './GameContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  
	return (
		<QueryClientProvider client={queryClient}>
			<GameProvider>
				< AppRouter/>
			</GameProvider>   
		</QueryClientProvider>
	);
}

export default App;
