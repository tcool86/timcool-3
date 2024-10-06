import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import Card from '@/components/Card';

export default function Projects() {
	return (
		<React.Fragment>
			<motion.h2 layout className="title subtitle">
				Projects
			</motion.h2>
			<motion.p layout>
				<Card>
					<motion.h3 layout><a href="https://github.com/zylem-game-lib">Zylem</a></motion.h3>
					<motion.p layout>
					A powerful and easy-to-use framework for creating simple 3D digital interactive applications using TypeScript.
					</motion.p>
					<motion.p layout>
					<a href="https://github.com/zylem-game-lib/zylem-examples">Examples</a> | <a href="https://zylem-production.up.railway.app/">Demos</a>
					</motion.p>
				</Card>
			</motion.p>
		</React.Fragment>
	);
}
