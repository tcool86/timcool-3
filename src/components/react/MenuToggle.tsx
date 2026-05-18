import type { MouseEventHandler } from 'react';
import { motion } from 'motion/react';

interface PathProps {
	d?: string;
	variants?: Record<string, { d?: string; opacity?: number }>;
	transition?: Record<string, unknown>;
}

function Path(props: PathProps) {
	return <motion.path strokeWidth="3" strokeLinecap="round" {...props} />;
}

interface MenuToggleProps {
	toggle: MouseEventHandler<HTMLButtonElement>;
	isOpen: boolean;
}

export default function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
	return (
		<button
			type="button"
			className="mobile-menu-btn"
			onClick={toggle}
			aria-label={isOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={isOpen}
		>
			<svg width="24" height="24" viewBox="-1 -2 24 24" aria-hidden="true">
				<Path
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
		</button>
	);
}
