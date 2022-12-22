import React from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from '../utils/isLogin';

const PrivateRouter = ({ children } : {children : any}) => {
  return !isLogin() ? <Navigate to='/' /> : children;
};

export default PrivateRouter;