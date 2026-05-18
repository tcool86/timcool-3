import { motion } from 'motion/react';
import { usePortfolio, type SectionId } from '@/state/portfolio';

const SECTIONS: { id: SectionId; label: string }[] = [
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'archive', label: 'Archive' },
	{ id: 'contact', label: 'Contact' },
];

export default function Header() {
	const { section } = usePortfolio();

	return (
		<motion.header className="app-header">
			<motion.nav className="app-nav-list nav-list" aria-label="Primary">
				<motion.ul>
					{SECTIONS.map(({ id, label }) => (
						<motion.li
							key={id}
							className={section === id ? 'selected' : ''}
						>
							<a className="app-link" href={`#${id}`}>
								{label}
							</a>
						</motion.li>
					))}
				</motion.ul>
			</motion.nav>
		</motion.header>
	);
}
