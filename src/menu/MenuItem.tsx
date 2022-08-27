import { motion } from 'framer-motion';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const MenuItem = ({
	text,
	link,
	index,
}: {
	text: string;
	link: string;
	index: number;
}) => {
	return (
		<motion.li
			variants={variants}
			key={`li-${text.toLowerCase()}-${index}`}
			whileTap={{ x: 10, color: 'var(--primary-color)' }}
			onClick={() => (location.href = link)}
		>
			<div className="bullet" />
			<a className="app-link" href={link}>
				{text}
			</a>
		</motion.li>
	);
};
