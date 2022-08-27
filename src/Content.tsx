import { Fragment, PropsWithChildren, useRef } from 'react';
import About from './pages/About.tsx';
import Contact from './pages/contact/Contact.tsx';
import Experience from './pages/experience/Experience.tsx';
import Archive from './pages/archive/Archive.tsx';
import Projects from './pages/Projects.tsx';
import { motion, useInView } from 'framer-motion';

function ContentSection({ children, id }: PropsWithChildren & { id: string }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<section className="app-section" id={id} ref={ref}>
			<motion.div
				style={{
					transform: isInView ? 'none' : 'translateY(96px)',
					opacity: isInView ? 1 : 0,
					transition:
						'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
				}}
			>
				{children}
			</motion.div>
		</section>
	);
}

function Content() {
	return (
		<Fragment>
			<ContentSection id="about">
				<About />
			</ContentSection>
			<ContentSection id="experience">
				<Experience />
			</ContentSection>
			<ContentSection id="projects">
				<Projects />
			</ContentSection>
			<ContentSection id="archive">
				<Archive />
			</ContentSection>
			<ContentSection id="contact">
				<Contact />
			</ContentSection>
		</Fragment>
	);
}

export default Content;
