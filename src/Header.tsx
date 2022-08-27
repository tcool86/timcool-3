import React, { useState } from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import MobileHeader from './MobileHeader';

function Header() {
	const [current, setCurrent] = useState('#about');
	const handler = (entries: any) => {
		const section = entries[0];
		const { id } = section.target;
		if (section.isIntersecting) {
			setCurrent(`#${id}`);
		}
	};

	const observer = new window.IntersectionObserver(handler, {
		threshold: 1,
	});

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
							className={current === '#about' ? 'selected' : ''}
							onClick={() => {
								setCurrent('#about');
							}}
						>
							<a className="app-link" href="#about">
								About
							</a>
						</motion.li>
						<motion.li
							className={
								current === '#experience' ? 'selected' : ''
							}
							onClick={() => {
								setCurrent('#experience');
							}}
						>
							<a className="app-link" href="#experience">
								Experience
							</a>
						</motion.li>
						<motion.li
							className={
								current === '#projects' ? 'selected' : ''
							}
							onClick={() => {
								setCurrent('#projects');
							}}
						>
							<a className="app-link" href="#projects">
								Projects
							</a>
						</motion.li>
						<motion.li
							className={current === '#archive' ? 'selected' : ''}
							onClick={() => {
								setCurrent('#archive');
							}}
						>
							<a className="app-link" href="#archive">
								Archive
							</a>
						</motion.li>
						<motion.li
							className={current === '#contact' ? 'selected' : ''}
							onClick={() => {
								setCurrent('#contact');
							}}
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
