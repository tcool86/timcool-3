import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './Experience.css';
import experiences from './experiences.json';

interface IExperienceSegmentLinks {
	url: string;
	label: string;
}

interface IExperienceSegment {
	id: string;
	banner: {
		shadow: string;
		primaryColor: string;
		secondaryColor: string;
	};
	company: string;
	title: string;
	dateLabel: string;
	content: {
		links: IExperienceSegmentLinks[];
		achievements: string[];
	};
}

function ExperienceSegment(experience: IExperienceSegment) {
	const { content, dateLabel, id } = experience;
	const { links, achievements } = content;
	return (
		<motion.div key={id}>
			<motion.span>{dateLabel}</motion.span>
			<motion.div>
				{achievements.map((achievement) => {
					return <p>{achievement}</p>;
				})}
			</motion.div>
			<motion.div>
				{links.map((link) => {
					return <a href={link.url}>{link.label}</a>;
				})}
			</motion.div>
		</motion.div>
	);
}

export function Experience() {
	const [tabState, setTabState] = useState('tab');
	return (
		<React.Fragment>
			{JSON.stringify(experiences)}
			<motion.div>
				<button>Tab 1</button>
				<button>Tab 2</button>
				<button>Tab 3</button>
				{experiences.map((experience: any) => {
					const segment: IExperienceSegment = experience;
					return ExperienceSegment(segment);
				})}
			</motion.div>
		</React.Fragment>
	);
}
