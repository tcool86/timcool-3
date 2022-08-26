import { motion } from 'framer-motion';

function Landing() {
	const name = 'Tim Cool'.split('');
	const subtitle = 'software engineer'.split('');
	const Text = (letter: string, index: number) => {
		if (letter === ' ') {
			return <span key={index + '-' + letter}>&nbsp;</span>;
		}
		return (
			<motion.span
				key={index + '-' + letter}
				initial={{
					x: -200,
					y: -100,
					opacity: 0,
				}}
				animate={{
					x: 0,
					y: 0,
					opacity: 1,
				}}
				transition={{ delay: 0.8 + index * 0.1 }}
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
