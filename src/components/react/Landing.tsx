import { useMemo } from 'react';
import { motion } from 'motion/react';
import Arrow from './Arrow';

const NAME = 'Tim Cool';
const SUBTITLE = 'software engineer';

interface Letter {
	char: string;
	x: number;
	y: number;
}

function buildLetters(text: string): Letter[] {
	return text.split('').map((char) => {
		const rand = -250 + Math.random() * 500;
		return { char, x: rand, y: -200 + rand };
	});
}

function scrollToAbout() {
	const about = window.document.getElementById('about');
	window.scrollTo({ top: about?.offsetTop ?? 0, behavior: 'smooth' });
}

function AnimatedText({ letters }: { letters: Letter[] }) {
	return (
		<>
			{letters.map((letter, index) => {
				const key = `${index}-${letter.char}`;
				if (letter.char === ' ') {
					return <span key={key}>&nbsp;</span>;
				}
				return (
					<motion.span
						key={key}
						initial={{ x: letter.x, y: letter.y, opacity: 0 }}
						animate={{ x: 0, y: 0, opacity: 1 }}
						transition={{ delay: 0.2 + index * 0.05 }}
					>
						{letter.char}
					</motion.span>
				);
			})}
		</>
	);
}

export default function Landing() {
	const nameLetters = useMemo(() => buildLetters(NAME), []);
	const subtitleLetters = useMemo(() => buildLetters(SUBTITLE), []);

	return (
		<motion.section className="app-section landing-section">
			<motion.div className="landing-wrapper">
				<motion.div>
					<motion.h1 className="title">
						<AnimatedText letters={nameLetters} />
					</motion.h1>
					<motion.h1 className="title subtitle">
						<AnimatedText letters={subtitleLetters} />
					</motion.h1>
				</motion.div>
				<Arrow />
			</motion.div>
			<button
				type="button"
				onClick={scrollToAbout}
				aria-label="Scroll to about"
				className="app-arrow-button"
			/>
		</motion.section>
	);
}
