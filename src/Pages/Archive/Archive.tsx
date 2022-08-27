import React from 'react';
import { motion } from 'framer-motion';
import './Archive.css';

export function Archive() {
	return (
		<React.Fragment>
			<motion.h2 layout className="title subtitle">
				Archive
			</motion.h2>
			<motion.p layout>Coming soon...</motion.p>
		</React.Fragment>
	);
}
