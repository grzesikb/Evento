import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SettingsProvider } from './contexts/provider/SettingsProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<SettingsProvider>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</SettingsProvider>
	</React.StrictMode>
);
