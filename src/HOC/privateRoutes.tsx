import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: any = () => {
	const token = window.localStorage.getItem('accessToken');

	return true ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
