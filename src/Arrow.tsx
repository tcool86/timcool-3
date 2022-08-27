import { motion } from 'framer-motion';

export default function Arrow() {
	return (
		<motion.svg
			animate={
				{
					y: ['-10px', '24px', '-10px'],
					opacity: [0.7, 0.8, 0.7],
					rotateX: [0, 15, 0],
				} as any
			}
			transition={{ duration: 2, repeat: Infinity }}
			className="landing-arrow"
			viewBox="0 0 24 26"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke="var(--soft-shadow-color)"
				fill="var(--bg-color-transparent)"
				d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke="var(--primary-color)"
				fill="none"
				d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</motion.svg>
	);
}
