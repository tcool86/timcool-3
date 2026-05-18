import { useState, type ChangeEventHandler } from 'react';
import { motion } from 'motion/react';

export interface InputDef {
	id: number;
	name: string;
	type: string;
	placeholder: string;
	errorMessage: string;
	label: string;
	required?: boolean;
}

interface InputProps extends InputDef {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
	label,
	errorMessage,
	id: _id,
	onChange,
	...inputProps
}: InputProps) {
	const [focused, setFocused] = useState(false);

	return (
		<motion.div className="app-input-wrapper">
			<motion.label htmlFor={inputProps.name}>{label}</motion.label>
			<motion.input
				{...inputProps}
				id={inputProps.name}
				className="app-input"
				onChange={onChange}
				onBlur={() => setFocused(true)}
				data-focused={focused.toString()}
			/>
			<motion.span>{errorMessage}</motion.span>
		</motion.div>
	);
}
