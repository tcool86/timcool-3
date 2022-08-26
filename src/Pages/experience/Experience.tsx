import './Experience.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import experiences from './experiences.json';
import Card from '../../components/Card';

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
	const { content, dateLabel, id, title, company } = experience;
	const { links, achievements } = content;
	const visible = {
		opacity: [0, 1],
		translateX: [-24, 0],
		delay: 0.2,
	};
	return (
		<motion.article animate={visible} key={`exp-${id}`}>
			<motion.div className="exp-container">
				<motion.p className="exp-title">{title}</motion.p>
				<motion.p className="exp-title">
					@ {company}
					<motion.span className="exp-date">
						&nbsp;&nbsp;&nbsp;{dateLabel}
					</motion.span>
				</motion.p>
			</motion.div>
			<motion.ul>
				{achievements.map((achievement, index) => {
					return (
						<motion.li
							key={`exp-a-list-${achievement[0]}-${index}`}
							className="exp-achievement"
						>
							<div className="bullet"></div>
							{achievement}
						</motion.li>
					);
				})}
			</motion.ul>
			<motion.div className="exp-links">
				{links.map((link, index) => {
					return (
						<motion.a
							key={`link-${index}-${link.url}`}
							href={link.url}
						>
							{link.label}
						</motion.a>
					);
				})}
			</motion.div>
		</motion.article>
	);
}

export function Experience() {
	const [tabState, setTabState] = useState(5);
	experiences.sort((a, b) => b.id - a.id);
	return (
		<React.Fragment>
			<h2 className="title subtitle">Work Experience</h2>
			<motion.div className="app-experience-tabs">
				<motion.div>
					<nav className="app-tab-nav">
						{experiences.map((experience: any) => {
							const { banner, company, id } = experience;
							return (
								<motion.button
									whileHover={{
										color: banner.secondaryColor,
										backgroundColor: banner.primaryColor,
										textShadow: `1px 1px 3px ${banner.shadow}`,
									}}
									whileFocus={{
										color: banner.secondaryColor,
										backgroundColor: banner.primaryColor,
										textShadow: `1px 1px 3px ${banner.shadow}`,
									}}
									onClick={() => setTabState(id)}
									className={
										tabState === id
											? 'app-tab selected'
											: 'app-tab'
									}
									key={`btn-${id}-${company[0]}`}
								>
									{company}
								</motion.button>
							);
						})}
					</nav>
				</motion.div>
				{experiences.map((experience: any) => {
					if (tabState === experience.id) {
						const segment: IExperienceSegment = experience;
						return ExperienceSegment(segment);
					}
				})}
			</motion.div>
		</React.Fragment>
	);
}
