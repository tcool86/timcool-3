import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
	open: {
		originY: 0,
		rotateX: [90, 0],
		borderColor: ['transparent', 'var(--primary-color)'],
		delay: 0.1,
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		originY: 0,
		rotateX: [0, 90],
		borderColor: ['var(--primary-color)', 'transparent'],
		delay: 0.1,
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const items = [
	{ title: 'About', link: '#about' },
	{ title: 'Projects', link: '#projects' },
	{ title: 'Experience', link: '#experience' },
	{ title: 'Archive', link: '#archive' },
	{ title: 'Contact', link: '#contact' },
];

export const Menu = ({ open }: { open: boolean }) => (
	<motion.ul variants={variants}>
		{items.map((value, index) => (
			<MenuItem
				text={value.title}
				index={index}
				key={`${value.title}-${index}`}
			/>
		))}
	</motion.ul>
);
