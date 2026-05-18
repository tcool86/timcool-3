import { useRef } from 'react';
import { motion, useCycle } from 'motion/react';
import Menu from './Menu';
import MenuToggle from './MenuToggle';

export default function MobileHeader() {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef<HTMLElement | null>(null);

	return (
		<header className="mobile-header">
			<motion.nav
				className="mobile-nav"
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				ref={containerRef}
			>
				<Menu isOpen={isOpen} />
				<MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
			</motion.nav>
		</header>
	);
}
