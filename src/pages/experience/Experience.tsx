import './Experience.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import experiences from './experiences.json';
import isMobile from 'is-mobile';

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
	const animate = {
		originX: 0,
		opacity: [0, 1],
		x: [-24, 0],
		delay: 0.2,
	};
	const animateTop = {
		originX: 0,
		opacity: [0, 1],
		y: [-24, 0],
		delay: 0.2,
	};
	const animateBottom = {
		originX: 0,
		opacity: [0, 1],
		x: [24, 0],
		delay: 0.2,
	};
	return (
		<motion.article
			layout
			key={`exp-article-${id}`}
			className="exp-article"
		>
			<motion.div animate={animateTop} className="exp-container">
				<motion.p className="exp-title">{title}</motion.p>
				<motion.p className="exp-title">
					@ {company}
					<motion.span className="exp-date">
						&nbsp;&nbsp;&nbsp;{dateLabel}
					</motion.span>
				</motion.p>
			</motion.div>
			<motion.ul animate={animate}>
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
			<motion.div animate={animateBottom} className="exp-links">
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

export default function Experience() {
	const [tabState, setTabState] = useState(5);
	experiences.sort((a, b) => b.id - a.id);
	return (
		<React.Fragment>
			<motion.h2 className="title subtitle">Work Experience</motion.h2>
			<motion.div className="app-experience-tabs">
				<motion.div className="app-layer-above">
					<motion.nav className="app-tab-nav">
						{experiences.map((experience: any) => {
							const { banner, company, id } = experience;
							const segment: IExperienceSegment = experience;
							return (
								<>
									<motion.button
										whileHover={{
											color: banner.secondaryColor,
											backgroundColor:
												banner.primaryColor,
										}}
										whileFocus={{
											color: banner.secondaryColor,
											backgroundColor:
												banner.primaryColor,
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
									{isMobile() &&
										tabState === id &&
										ExperienceSegment(segment)}
								</>
							);
						})}
					</motion.nav>
				</motion.div>
				{!isMobile() &&
					experiences.map((experience: any) => {
						if (tabState === experience.id) {
							const segment: IExperienceSegment = experience;
							return ExperienceSegment(segment);
						}
					})}
			</motion.div>
		</React.Fragment>
	);
}
