import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
	open: {
		originY: 0,
		originX: 0,
		rotateX: [90, 0],
		opacity: [0, 1],
		delay: 0.1,
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		originY: 0,
		originX: 0,
		rotateX: [0, 90],
		opacity: [1, 0],
		delay: 0.1,
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const items = [
	{ title: 'About', link: '#about' },
	{ title: 'Experience', link: '#experience' },
	{ title: 'Projects', link: '#projects' },
	{ title: 'Archive', link: '#archive' },
	{ title: 'Contact', link: '#contact' },
];

export const Menu = ({ open }: { open: boolean }) => (
	<motion.ul variants={variants}>
		{items.map((value, index) => (
			<MenuItem
				text={value.title}
				link={value.link}
				index={index}
				key={`${value.title}-${index}`}
			/>
		))}
	</motion.ul>
);
