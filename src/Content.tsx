import { Fragment, PropsWithChildren, useRef } from 'react';
import About from '@/pages/About.tsx';
import Contact from '@/pages/contact/Contact.tsx';
import Experience from '@/pages/experience/Experience.tsx';
import Archive from '@/pages/archive/Archive.tsx';
import Projects from '@/pages/projects/Projects.tsx';
import {
	motion,
	MotionValue,
	useInView,
	useScroll,
	useVelocity,
} from 'framer-motion';
import { usePortfolioState } from './state';

function ContentSection({
	children,
	id,
	scrollY,
}: PropsWithChildren & { id: string; scrollY: MotionValue<number> }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	const yVelocity = useVelocity(scrollY).getVelocity();
	const moveIn = 'translateY(96px)';
	const moveOut = 'translateY(-96px)';
	const transformIn = yVelocity >= 0 ? moveIn : moveOut;
	const updateSection = usePortfolioState((state) => state.updateSection);

	if (isInView) {
		updateSection(id);
	}
	return (
		<section className="app-section" id={id} ref={ref}>
			<motion.div
				style={{
					transform: isInView ? 'none' : transformIn,
					opacity: isInView ? 1 : 0,
					transition:
						'all 0.54s cubic-bezier(0.17, 0.55, 0.55, 1) 0.33s',
				}}
			>
				{children}
			</motion.div>
		</section>
	);
}

function Content() {
	const { scrollY } = useScroll();
	return (
		<Fragment>
			<ContentSection id="about" scrollY={scrollY}>
				<About />
			</ContentSection>
			<ContentSection id="experience" scrollY={scrollY}>
				<Experience />
			</ContentSection>
			<ContentSection id="projects" scrollY={scrollY}>
				<Projects />
			</ContentSection>
			<ContentSection id="archive" scrollY={scrollY}>
				<Archive />
			</ContentSection>
			<ContentSection id="contact" scrollY={scrollY}>
				<Contact />
			</ContentSection>
		</Fragment>
	);
}

export default Content;
