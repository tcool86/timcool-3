import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import Card from '../components/Card';

export default function About() {
	return (
		<React.Fragment>
			<Card>
				<motion.p className="indent">
					I'm Tim Cool, and this is my website. I live in{' '}
					<strong>San Jose, CA</strong>, and work full time as a{' '}
					<strong>Software Engineer</strong>. Ever since I was young,
					I've been interested in science, technology, video games,
					comics, and movies. I started creating computer games when I
					was around ten years old, using the visual programming
					application CocoaDR3, along with programs like Hypercard and
					Hyperstudio on my family's Macintosh Performa 550.
				</motion.p>
				<motion.p>
					For most of my academic and professional life, I've enjoyed
					working with interactive media and writing software
					applications. I've been building iOS apps and developing
					websites for about a decade.
				</motion.p>
				<motion.p>
					My other interests include health and fitness, philosophy,
					and game design.
				</motion.p>
			</Card>
		</React.Fragment>
	);
}
