import './Card.css';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

export default function Card(props: { children: ReactElement[] }) {
	const animate = {
		opacity: [0, 1],
		delay: 1,
	};
	return (
		<motion.div animate={animate} className="app-card">
			{props.children}
		</motion.div>
	);
}
