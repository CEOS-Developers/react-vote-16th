import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 로그인 버튼 클릭
  const signinHandler = () => {
    // api연결 - 일단 home으로
    navigate('/');
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <SignInContainer>
      <h2>CEOS 운영진 선출 투표</h2>
      <Form onSubmit={onSubmit}>
        <InputContainer>
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
  height: 350px;
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
