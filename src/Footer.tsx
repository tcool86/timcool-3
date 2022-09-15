import './Footer.css';
import { motion } from 'framer-motion';
import SocialLinks from './components/SocialLinks';

function Footer() {
	return (
		<motion.footer className="app-footer">
			<motion.div>{SocialLinks()}</motion.div>
			<motion.p>Copyright &copy; 2022 - Tim Cool</motion.p>
		</motion.footer>
	);
}

export default Footer;
