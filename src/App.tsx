import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Landing from './Landing';
import { baseAPI } from './api';

function App() {
	fetch(`${baseAPI}/session`, { method: 'GET' });
	return (
		<div className="app">
			<Landing />
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
