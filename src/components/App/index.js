import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GameProvider } from '../../GameContext/GameProvider';
import { AppRouter } from '../../routes/AppRouter';

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
