import { Fragment, useState } from 'react';
import { motion } from 'motion/react';
import rawExperiences from '@/data/experiences.json';

interface ExperienceLink {
	url: string;
	label: string;
}

interface ExperienceBanner {
	shadow: string;
	primaryColor: string;
	secondaryColor: string;
}

interface Experience {
	id: number;
	title: string;
	company: string;
	dateLabel: string;
	banner: ExperienceBanner;
	content: {
		links: ExperienceLink[];
		achievements: string[];
	};
}

const experiences: Experience[] = [...(rawExperiences as Experience[])].sort(
	(a, b) => b.id - a.id
);

function ExperienceSegment({ experience }: { experience: Experience }) {
	const { content, dateLabel, title, company } = experience;
	const { links, achievements } = content;

	return (
		<motion.article
			layout
			className="exp-article"
			initial={{ opacity: 0, y: -24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<motion.div className="exp-container">
				<motion.p className="exp-title">{title}</motion.p>
				<motion.p className="exp-title">
					@ {company}
					<motion.span className="exp-date">
						&nbsp;&nbsp;&nbsp;{dateLabel}
					</motion.span>
				</motion.p>
			</motion.div>
			<motion.ul
				initial={{ opacity: 0, x: -24 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
			>
				{achievements.map((achievement, index) => (
					<motion.li
						key={`achievement-${index}`}
						className="exp-achievement"
					>
						<div className="bullet" />
						{achievement}
					</motion.li>
				))}
			</motion.ul>
			<motion.div
				className="exp-links"
				initial={{ opacity: 0, x: 24 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
			>
				{links.map((link) => (
					<motion.a
						key={link.url}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.label}
					</motion.a>
				))}
			</motion.div>
		</motion.article>
	);
}

export default function ExperienceTabs() {
	const initialId = experiences[0]?.id ?? 1;
	const [activeId, setActiveId] = useState<number>(initialId);
	const selected = experiences.find((e) => e.id === activeId);

	return (
		<>
			<motion.h2 className="title subtitle">Work Experience</motion.h2>
			<motion.div className="app-experience-tabs">
				<motion.div className="app-layer-above">
					<motion.nav className="app-tab-nav">
						{experiences.map((experience) => {
							const { banner, company, id } = experience;
							const isActive = activeId === id;
							return (
								<Fragment key={id}>
									<motion.button
										type="button"
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
										onClick={() => setActiveId(id)}
										className={
											isActive
												? 'app-tab selected'
												: 'app-tab'
										}
										aria-pressed={isActive}
									>
										{company}
									</motion.button>
									{isActive && (
										<div className="exp-segment-mobile">
											<ExperienceSegment
												experience={experience}
											/>
										</div>
									)}
								</Fragment>
							);
						})}
					</motion.nav>
				</motion.div>
				{selected && (
					<div className="exp-segment-desktop">
						<ExperienceSegment experience={selected} />
					</div>
				)}
			</motion.div>
		</>
	);
}
