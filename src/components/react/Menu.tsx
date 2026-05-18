import { motion } from 'motion/react';
import MenuItem from './MenuItem';

const variants = {
	open: {
		opacity: 1,
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		opacity: 0,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
			when: 'afterChildren',
		},
	},
};

const items = [
	{ title: 'About', link: '#about' },
	{ title: 'Experience', link: '#experience' },
	{ title: 'Projects', link: '#projects' },
	{ title: 'Archive', link: '#archive' },
	{ title: 'Contact', link: '#contact' },
];

interface MenuProps {
	isOpen: boolean;
}

export default function Menu({ isOpen }: MenuProps) {
	return (
		<motion.ul
			variants={variants}
			style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
			aria-hidden={!isOpen}
		>
			{items.map(({ title, link }) => (
				<MenuItem key={link} text={title} link={link} />
			))}
		</motion.ul>
	);
}
