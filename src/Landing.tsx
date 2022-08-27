import { motion } from 'framer-motion';

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

	return (
		<section className="app-section landing-section">
			<motion.div>
				<h1 className="title">{name.map(Text)}</h1>
				<h1 className="title subtitle">{subtitle.map(Text)}</h1>
			</motion.div>
		</section>
	);
}

export default Landing;
