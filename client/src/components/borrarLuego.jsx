import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const borrarLuego = () => {
	const displaySuccessMessage = (mensaje) => {
		toast.success(mensaje, {
			position: 'top-right',
			autoClose: 3000,
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
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};
	return (
		<div>
			borrar luego
			<ToastContainer />
		</div>
	);
};

export default borrarLuego;
