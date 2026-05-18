import { useState } from 'react';
import { motion } from 'motion/react';
import Input, { type InputDef } from './Input';
import { baseAPI } from '@/lib/api';

interface FormValues {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const INPUTS: InputDef[] = [
	{
		id: 1,
		name: 'name',
		type: 'text',
		placeholder: 'Your name',
		errorMessage: 'Name can not be empty',
		label: 'Name',
		required: true,
	},
	{
		id: 2,
		name: 'email',
		type: 'email',
		placeholder: 'Email',
		errorMessage: 'The email address must be valid',
		label: 'Email',
		required: true,
	},
	{
		id: 3,
		name: 'subject',
		type: 'text',
		placeholder: 'Subject',
		errorMessage: 'Subject can not be empty',
		label: 'Subject Line',
		required: true,
	},
	{
		id: 4,
		name: 'message',
		type: 'text',
		placeholder: 'Hi Tim!',
		errorMessage: 'Message can not be empty',
		label: 'Message',
		required: true,
	},
];

const topInputs = INPUTS.slice(0, 2);
const bottomInputs = INPUTS.slice(2);

const EMPTY_VALUES: FormValues = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

export default function ContactForm() {
	const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
	const [disableSubmit, setDisableSubmit] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisableSubmit(true);
		try {
			await fetch(`${baseAPI}/contact`, {
				method: 'POST',
				body: new URLSearchParams(
					values as unknown as Record<string, string>
				).toString(),
				mode: 'cors',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				credentials: 'include',
			});
			setSuccessMessage(true);
		} catch {
			setErrorMessage(true);
			setTimeout(() => setErrorMessage(false), 3000);
		} finally {
			setDisableSubmit(false);
		}
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<motion.form className="app-contact-form" onSubmit={handleSubmit}>
			<motion.div className="app-contact-inline">
				{topInputs.map((input) => (
					<Input
						key={input.name}
						{...input}
						value={values[input.name as keyof FormValues]}
						onChange={onChange}
					/>
				))}
			</motion.div>
			{bottomInputs.map((input) => (
				<Input
					key={input.name}
					{...input}
					value={values[input.name as keyof FormValues]}
					onChange={onChange}
				/>
			))}
			{successMessage ? (
				<motion.div layout className="app-contact-message success">
					Sent &#10003;
				</motion.div>
			) : (
				<motion.button
					layout
					type="submit"
					disabled={disableSubmit}
					className="app-btn"
				>
					Send
				</motion.button>
			)}
			{errorMessage && (
				<motion.div layout className="app-contact-message error">
					Error sending message, try again.
				</motion.div>
			)}
		</motion.form>
	);
}
