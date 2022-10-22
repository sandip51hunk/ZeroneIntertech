import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: any = () => {
	const token = window.sessionStorage.getItem('accessToken');

	return token ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
