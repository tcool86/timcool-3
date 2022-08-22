import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Temp } from './Temp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Temp />
		{/* <App /> */}
	</React.StrictMode>
);
