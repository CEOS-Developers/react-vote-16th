import React from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from '../utils/isLogin';

const PublicRouter = ({ children } : {children : any}) => {
  return isLogin() ? <Navigate to='/home' /> : children;
};

export default PublicRouter;