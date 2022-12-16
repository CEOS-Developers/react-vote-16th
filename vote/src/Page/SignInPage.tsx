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
    <Form onSubmit={onSubmit}>
      <h3>CEOS 운영진 선출 투표</h3>
      <InputContainer>
        <Input placeholder="이메일" value={email} onChange={emailHandler} />
        <Input
          placeholder="비밀번호"
          value={password}
          onChange={passwordHandler}
        />
      </InputContainer>
      <SignInBtn onClick={signinHandler}>로그인</SignInBtn>
      <SignUpBtn
        onClick={() => {
          navigate('/signup');
        }}
      >
        회원가입
      </SignUpBtn>
    </Form>
  );
};

const Form = styled.form``;

const Input = styled.input``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const SignInBtn = styled.button``;
const SignUpBtn = styled.button``;

export default SignInPage;
