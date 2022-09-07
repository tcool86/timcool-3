import { useState } from 'react';
import Input from './Input';
import { motion } from 'framer-motion';
import { baseAPI } from '../../api';
import './Form.css';

const Form = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [disableSubmit, setDisableSubmit] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const inputs = [
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

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setDisableSubmit(true);
		fetch(`${baseAPI}/contact`, {
			method: 'POST',
			body: new URLSearchParams(Object.entries(values)).toString(),
			mode: 'cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			credentials: 'include',
		})
			.then((response) => {
				console.log(response);
				setDisableSubmit(false);
				setSuccessMessage(true);
			})
			.catch((reason) => {
				console.error(reason);
				setDisableSubmit(false);
				setErrorMessage(true);
				setTimeout(() => {
					setErrorMessage(false);
				}, 3000);
			});
	};

	const onChange = (e: { target: { name: any; value: any } }) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<motion.form className="app-contact-form" onSubmit={handleSubmit}>
			<motion.div className="app-contact-inline">
				{inputs.splice(0, 2).map((input: any) => (
					<Input
						key={`${input.name}-${input.id}`}
						{...input}
						//@ts-ignore
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
			</motion.div>
			{inputs.splice(0, 2).map((input: any) => (
				<Input
					key={`${input.name}-${input.id}`}
					{...input}
					//@ts-ignore
					value={values[input.name]}
					onChange={onChange}
				/>
			))}
			{successMessage ? (
				<motion.div layout className="app-contact-message success">
					Sent ✓
				</motion.div>
			) : (
				<motion.button
					layout
					disabled={disableSubmit}
					className="app-btn"
				>
					Send
				</motion.button>
			)}
			{errorMessage ? (
				<motion.div layout className="app-contact-message error">
					Error sending message, try again.
				</motion.div>
			) : (
				<></>
			)}
		</motion.form>
	);
};

export default Form;
