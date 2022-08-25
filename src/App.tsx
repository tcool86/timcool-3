import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Landing from './Landing';

function App() {
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
