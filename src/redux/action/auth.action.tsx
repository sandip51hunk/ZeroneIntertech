import { authConstant, LogoutConstant } from '../constant/auth.constant';
import axios from 'axios';


const axiosConfig = axios.create({
	baseURL: 'http://159.203.180.7:3000/api'
	,
	headers: {
		'cache-control': 'no-cache',
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
	},
});

export const authAction: any = (user: any) => {
	return async (dispatch: any) => {
		try {
			const res = await axiosConfig.post('/admin-auth/login', user);
			const accessToken = res.data.access_token;
			window.sessionStorage.setItem('accessToken', res.data.access_token);
			dispatch({
				type: authConstant.LOGIN_SUCCESS,
				payload: accessToken,
			});
		} catch (err: any) {
			dispatch({
				type: authConstant.LOGIN_FAILED,
				payload: err.response.data.message,
			});
		}
	};
};


export const isUserLoggedIn = () => {
	return async (dispatch: any) => {
		const accessToken = window.sessionStorage.getItem('accessToken');
		if (accessToken) {
			dispatch({
				type: authConstant.LOGIN_SUCCESS,
				payload: accessToken,
			});
		}
	};
};

export const LogoutAction: any = () => {
	return async (dispatch: any) => {
		window.sessionStorage.clear();
		dispatch({
			type: LogoutConstant,
			payload: 'Logout Successfull',
		});
	};
};
