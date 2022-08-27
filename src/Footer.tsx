import './Footer.css';
import { motion } from 'framer-motion';

function Footer() {
	return (
		<motion.footer className="app-footer">
			<motion.p>Copyright &copy; 2022 - Tim Cool</motion.p>
		</motion.footer>
	);
}

export default Footer;
