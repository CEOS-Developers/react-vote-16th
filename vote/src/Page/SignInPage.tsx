import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import {
  isSignInState,
  nameState,
  partState,
  tokenState,
} from '../state/state';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useRecoilState<string>(tokenState);
  const [isSignIn, setIsSignIn] = useRecoilState<boolean>(isSignInState);
  const [name, setName] = useRecoilState<string>(nameState);
  const [part, setPart] = useRecoilState<string>(partState);
  const navigate = useNavigate();
  axios.defaults.baseURL = 'http://3.38.123.37';

  const signInAPI = async () => {
    await axios
      .post('/api/auth/login/ ', {
        username: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setToken(response.data.access_token);
        setName(response.data.user.username);
        setPart(response.data.user.part);
        setIsSignIn(true);
        localStorage.clear();
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('name', response.data.user.username);
        localStorage.setItem('part', response.data.user.part);
        navigate('/home'); //메인 화면으로 이동
      })
      .catch(function (error) {
        console.log(error);
        alert('로그인 실패');
      });
  };

  // 로그인 버튼 클릭
  const signinHandler = () => {
    if (email === '') alert('이메일은 필수 항목입니다.');
    else if (password === '') alert('비밀번호는 필수 항목입니다.');
    else if (name === '') alert('이름은 필수 항목입니다.');
    else signInAPI();
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <SignInContainer>
      <h2>CEOS 운영진 선출 투표 🗳</h2>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Input placeholder="이름" value={name} onChange={nameHandler} />
          <Input placeholder="이메일" value={email} onChange={emailHandler} />
          <Input
            placeholder="비밀번호"
            value={password}
            onChange={passwordHandler}
          />
          <SignInBtn onClick={signinHandler}>로그인</SignInBtn>
          <br />
          <SignUpBtn
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </SignUpBtn>
        </InputContainer>
      </Form>
    </SignInContainer>
  );
};

const Form = styled.form``;

const Input = styled.input`
  margin-top: 20px;
  font-size: 16px;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 10px;
  &:focus {
    outline: none;
    border-color: blue;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
`;

const SignInBtn = styled.button`
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px;
  background-color: whitesmoke;
`;
const SignUpBtn = styled.span`
  text-decoration: underline;
`;

const SignInContainer = styled.div`
  width: 400px;
  height: 450px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e9ecef;
  box-shadow: 0px 0px 8px gray;
  border-radius: 15px;
`;

export default SignInPage;
