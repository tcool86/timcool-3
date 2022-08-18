import { useState } from 'react';
import './App.css';
import { About } from './About';
import { Contact } from './Contact';
import { Experience } from './Experience';
import { Archive } from './Archive';
import { Projects } from './Projects';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="app">
			<header className="app-header">
				<nav className="app-nav-list">
					<ul>
						<li>
							<a className="app-link" href="#about">
								About
							</a>
						</li>
						<li>
							<a className="app-link" href="#projects">
								Projects
							</a>
						</li>
						<li>
							<a className="app-link" href="#experience">
								Experience
							</a>
						</li>
						<li>
							<a className="app-link" href="#archive">
								Archive
							</a>
						</li>
						<li>
							<a className="app-link" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<section className="app-section" id="about">
				<About />
			</section>
			<section className="app-section" id="projects">
				<Projects />
			</section>
			<section className="app-section" id="experience">
				<Experience />
			</section>
			<section className="app-section" id="archive">
				<Archive />
			</section>
			<section className="app-section" id="contact">
				<Contact />
			</section>
			<footer>
				<p>Copyright © 2022 - Tim Cool</p>
			</footer>
		</div>
	);
}

export default App;
