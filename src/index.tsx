import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SettingsProvider } from './contexts/provider/SettingsProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserContextProvider } from './contexts/provider/UserContextProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<UserContextProvider>
			<SettingsProvider>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</SettingsProvider>
		</UserContextProvider>
	</React.StrictMode>
);
