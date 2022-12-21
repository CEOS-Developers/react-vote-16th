import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setRefreshToken = (refreshToken: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set('refresh', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return cookies.get('refresh');
};

export const removeCookieToken = () => {
  return cookies.remove('refresh', { sameSite: 'strict', path: '/' });
};
