import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import Card from '@/components/Card';

export default function About() {
	return (
		<React.Fragment>
			<Card>
				<motion.p className="indent">
				Hi, I'm Tim Cool, and welcome to my website. I live in <strong>Mountain View, CA</strong>, and work full-time as a <strong>Software Engineer</strong>. Since childhood, I've been passionate about science, technology, video games, comics, and movies. I began creating computer games around the age of ten, using visual programming tools like CocoaDR3, along with software like Hypercard and Hyperstudio on my family's Macintosh Performa 550.
				</motion.p>
				<motion.p>
				Throughout my academic and professional career, I've had a passion for working with interactive media and developing software applications. For over a decade, I've been building iOS apps and designing websites.
				</motion.p>
				<motion.p>
				I also have a strong interest in health and fitness, philosophy, and game design.
				</motion.p>
			</Card>
		</React.Fragment>
	);
}
