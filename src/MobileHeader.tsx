import './MobileHeader.css';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './menu/MenuToggle';
import { Menu } from './menu/Menu';

function MobileHeader() {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);

	return (
		<header className="mobile-header">
			<motion.nav
				className="mobile-nav"
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				ref={containerRef}
			>
				<Menu open={isOpen} />
				<MenuToggle toggle={() => toggleOpen()} />
			</motion.nav>
		</header>
	);
}

export default MobileHeader;
