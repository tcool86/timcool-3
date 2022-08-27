import { useState } from 'react';
import './Input.css';
import { motion } from 'framer-motion';

const Input = (props: any) => {
	const [focused, setFocused] = useState(false);
	const { label, errorMessage, onChange, id, ...inputProps } = props;

	const handleFocus = (e: any) => {
		setFocused(true);
	};

	return (
		<motion.div className="app-input-wrapper">
			<motion.label>{label}</motion.label>
			<motion.input
				{...inputProps}
				className="app-input"
				onChange={onChange}
				onBlur={handleFocus}
				focused={focused.toString()}
			/>
			<motion.span>{errorMessage}</motion.span>
		</motion.div>
	);
};

export default Input;
