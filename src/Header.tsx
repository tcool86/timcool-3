import React, { useState, useEffect } from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import MobileHeader from './MobileHeader';
import { usePortfolioState } from './state';

function Header() {
	const [current, setCurrent] = useState('#about');
	const section = usePortfolioState((state) => state.section);

	const isSelected = (id: string) => {
		return current === id ? 'selected' : '';
	};

	useEffect(() => {
		setCurrent(`#${section}`);
	}, [section]);

	return (
		<React.Fragment>
			<MobileHeader />
			<motion.header className="app-header">
				<motion.nav className="app-nav-list nav-list">
					<motion.ul>
						<motion.li className={isSelected('#about')}>
							<a className="app-link" href="#about">
								About
							</a>
						</motion.li>
						<motion.li className={isSelected('#experience')}>
							<a className="app-link" href="#experience">
								Experience
							</a>
						</motion.li>
						<motion.li className={isSelected('#projects')}>
							<a className="app-link" href="#projects">
								Projects
							</a>
						</motion.li>
						<motion.li className={isSelected('#archive')}>
							<a className="app-link" href="#archive">
								Archive
							</a>
						</motion.li>
						<motion.li className={isSelected('#contact')}>
							<a className="app-link" href="#contact">
								Contact
							</a>
						</motion.li>
					</motion.ul>
				</motion.nav>
			</motion.header>
		</React.Fragment>
	);
}

export default Header;
