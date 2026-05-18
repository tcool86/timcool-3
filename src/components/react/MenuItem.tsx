import { motion } from 'motion/react';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: { y: { stiffness: 1000, velocity: -100 } },
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: { y: { stiffness: 1000 } },
	},
};

interface MenuItemProps {
	text: string;
	link: string;
}

export default function MenuItem({ text, link }: MenuItemProps) {
	return (
		<motion.li
			variants={variants}
			whileTap={{ x: 10, color: 'var(--primary-color)' }}
		>
			<div className="bullet" />
			<a className="app-link" href={link}>
				{text}
			</a>
		</motion.li>
	);
}
