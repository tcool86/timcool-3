import { useState } from 'react';
import Input from './Input';
import { motion } from 'framer-motion';

const Form = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

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
			<motion.button className="app-btn">Send</motion.button>
		</motion.form>
	);
};

export default Form;
