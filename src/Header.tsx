import React from 'react';
import './Header.css';
import MobileHeader from './MobileHeader';

function Header() {
	return (
		<React.Fragment>
			<MobileHeader />
			<header className="app-header">
				<nav className="app-nav-list nav-list">
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
		</React.Fragment>
	);
}

export default Header;
