import React, { useState } from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import MobileHeader from './MobileHeader';

function Header() {
	const [current, setCurrent] = useState('#about');
	const [clicked, setClicked] = useState('');

	const handler = (entries: any) => {
		const section = entries[0];
		const { id } = section.target;
		if (section.isIntersecting) {
			setCurrent(`#${id}`);
		}
	};

	const isSelected = (id: string) => {
		if (clicked === '') {
			return current === id ? 'selected' : '';
		}
		return clicked === id ? 'selected' : '';
	};

	const handleClick = (id: string) => {
		setCurrent(`#${id}`);
		setClicked(`#${id}`);
		setTimeout(() => {
			setClicked('');
		}, 800);
	};

	const observer = new window.IntersectionObserver(handler, { threshold: 1 });

	const sections = [
		'#about',
		'#experience',
		'#projects',
		'#archive',
		'#contact',
	];
	setTimeout(() => {
		for (let section of sections) {
			const sectionElement = document.querySelector(section);
			if (sectionElement) {
				observer.observe(sectionElement);
			}
		}
	}, 1000);

	return (
		<React.Fragment>
			<MobileHeader />
			<motion.header className="app-header">
				<motion.nav className="app-nav-list nav-list">
					<motion.ul>
						<motion.li
							className={isSelected('#about')}
							onClick={() => handleClick('about')}
						>
							<a className="app-link" href="#about">
								About
							</a>
						</motion.li>
						<motion.li
							className={isSelected('#experience')}
							onClick={() => handleClick('experience')}
						>
							<a className="app-link" href="#experience">
								Experience
							</a>
						</motion.li>
						<motion.li
							className={isSelected('#projects')}
							onClick={() => handleClick('projects')}
						>
							<a className="app-link" href="#projects">
								Projects
							</a>
						</motion.li>
						<motion.li
							className={isSelected('#archive')}
							onClick={() => handleClick('archive')}
						>
							<a className="app-link" href="#archive">
								Archive
							</a>
						</motion.li>
						<motion.li
							className={isSelected('#contact')}
							onClick={() => handleClick('contact')}
						>
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
