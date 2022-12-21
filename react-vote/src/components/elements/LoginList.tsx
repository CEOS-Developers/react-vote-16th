import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { login } from '../../api/userRequest';
import useInput from '../../hooks/useInput';
import { isLoggedInState } from '../../states/homePageState';
import { userState } from '../../states/loginState';
import { setRefreshToken } from '../../storage/Cookie';
import SubmitButton from '../Icons/SubmitButton';

const LoginList = () => {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const id = useInput('');
  const password = useInput('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (id.value !== '' && password.value !== '') {
      const response = await login({
        user_id: id.value,
        password: password.value,
      }).catch((err) => alert('등록되지 않은 사용자입니다'));
      if (response) {
        setRefreshToken(response.token.refresh);
        setUser(response);
        setIsLoggedIn(true);
        navigate('/');
      }
    }
  };

  useEffect(() => {
    if (id.value !== '' && password.value !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [id.value, password.value]);

  return (
    <LoginForm onSubmit={handleLogin}>
      <input type="text" name="id" placeholder="id" value={id.value} onChange={id.onChange} />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password.value}
        onChange={password.onChange}
      />
      <SubmitButton content={'Login'} isActive={isActive} />
    </LoginForm>
  );
};

export default LoginList;

const LoginForm = styled.form`
  width: 370px;
  /* margin-top: 180px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
