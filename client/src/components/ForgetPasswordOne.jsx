import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import styles from '../assets/styles/components/ForgetPasswordOne.module.css';
const ForgetPasswordOne = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const displaySuccessMessage = (mensaje) => {
		toast.success(mensaje, {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	const displayFailedMessage = (mensaje) => {
		toast.error(mensaje, {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	const handleChangeEmail = (event) => {
		const value = event.target.value;
		setEmail(value);
		setError(verificarEmail(value, error));
	};

	const verificarEmail = (email, stateError) => {
		let errorFuncion = { ...stateError };
		if (!email || email === '') errorFuncion = 'You must complete the field';
		else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email))
			errorFuncion = 'Not a valid email';
		else errorFuncion = '';

		return errorFuncion;
	};

	const displayCancel = (event) => {
		event.preventDefault();
		swal({
			title: 'ATTENTION!',
			text: 'Do you want to cancel the restoration?',
			icon: 'warning',
			buttons: ['NO', 'SI'],
		}).then((response) => {
			if (response) {
				swal({
					title: 'Restoration cancelled',
					text: 'When you cancel the operation your password will remain the same',
					icon: 'success',
					buttons: 'Accept',
				}).then(() => {
					navigate('/');
				});
			}
		});
	};

	const buttonSubmit = async (event) => {
		event.preventDefault();
		if (!email || email === '')
			return displayFailedMessage('You must complete the field');
		else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email))
			return displayFailedMessage('Not a valid email');

		try {
			const { data } = await axios.post(`/user/olvidate_password`, { email });

			swal({
				title: `Operation completed`,
				text: data.message,
				icon: 'success',
				buttons: 'Accept',
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.container}>
			<main className={styles.content}>
				<h1 className={styles.title}>Paso 1</h1>
				<form action="" onSubmit={buttonSubmit} className={styles.form}>
					<div className={styles.contentFields}>
						<input
							type="email"
							placeholder="Email..."
							onChange={handleChangeEmail}
							value={email}
						/>
						<span>{error}</span>
					</div>
					<div className={styles.boxButton}>
						<button className={styles.button}>Send email</button>
						<button className={styles.button} onClick={displayCancel}>Cancel</button>
					</div>
				</form>
			</main>
			<ToastContainer />
		</div>
	);
};

export default ForgetPasswordOne;
