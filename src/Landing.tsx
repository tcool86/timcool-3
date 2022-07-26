import './Landing.css';
import { motion } from 'framer-motion';
import Arrow from './Arrow';

function Landing() {
	const name = 'Tim Cool'.split('');
	const subtitle = 'software engineer'.split('');
	const Text = (letter: string, index: number) => {
		if (letter === ' ') {
			return <span key={index + '-' + letter}>&nbsp;</span>;
		}
		const rand = -250 + Math.random() * 500;
		return (
			<motion.span
				key={index + '-' + letter}
				initial={{
					x: rand,
					y: -200 + rand,
					opacity: 0,
				}}
				animate={{
					x: 0,
					y: 0,
					opacity: 1,
				}}
				transition={{
					velocity: 300,
					delay: 0.2 + index * 0.05,
				}}
			>
				{letter}
			</motion.span>
		);
	};

	const clickHandler = () => {
		const about = window.document.getElementById('about');
		window.scrollTo(0, about?.offsetTop ?? 0);
	};

	return (
		<motion.section className="app-section landing-section">
			<motion.div className="landing-wrapper">
				<motion.div>
					<motion.h1 className="title">{name.map(Text)}</motion.h1>
					<motion.h1 className="title subtitle">
						{subtitle.map(Text)}
					</motion.h1>
				</motion.div>
				<Arrow />
			</motion.div>
			<motion.div onClick={clickHandler} className="app-arrow-button" />
		</motion.section>
	);
}

export default Landing;
