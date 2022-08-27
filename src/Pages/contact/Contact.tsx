import './Contact.css';
import { motion } from 'framer-motion';
import Form from './Form';

export function Contact() {
	return (
		<motion.article>
			<motion.h2 layout className="title subtitle">
				Contact
			</motion.h2>
			<Form />
		</motion.article>
	);
}
