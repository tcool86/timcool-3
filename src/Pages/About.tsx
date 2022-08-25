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
			<p className="indent">
				I'm Tim Cool, and this is my website. I live in{' '}
				<strong>San Jose, CA</strong>, and work full time as a{' '}
				<strong>Software Engineer</strong>. Ever since I was young, I've
				been interested in science, technology, video games, comics, and
				movies. I started creating computer games when I was around ten
				years old, using the visual programming application CocoaDR3,
				along with programs like Hypercard and Hyperstudio on my
				family's Macintosh Performa 550.
			</p>
			<p>
				For most of my academic and professional life, I've enjoyed
				working with interactive media and writing software
				applications. I've been building iOS apps and developing
				websites for about a decade.
			</p>
			<p>
				My other interests include health and fitness, philosophy, and
				game design.
			</p>
		</React.Fragment>
	);
}
