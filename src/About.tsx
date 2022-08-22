import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

export function About() {
	return (
		<React.Fragment>
			<motion.div
				className="box"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 4.5 }}
			/>
			<motion.div
				animate={{
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 270, 270, 0],
					borderRadius: ['20%', '20%', '50%', '50%', '20%'],
				}}
			/>
			<p>Placeholder Text for about section</p>
		</React.Fragment>
	);
}
