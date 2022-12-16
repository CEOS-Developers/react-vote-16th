import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [part, setPart] = useState('');
  const isValidEmail = email.includes('@') && email.includes('.');
  const isValidPassword = password.length >= 8;
  const navigate = useNavigate();

  // 회원가입 버튼 클릭
  const signupHandler = () => {
    if (password !== passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 다릅니다.');
    } else if (name === '') {
      alert('이름은 필수 항목입니다.');
    } else if (password === '') {
      alert('비밀번호는 필수 항목입니다.');
    } else if (passwordConfirm === '') {
      alert('비밀번호 확인은 필수 항목입니다.');
    } else if (email === '') {
      alert('이메일은 필수 항목입니다.');
    } else if (!isValidEmail) {
      alert('이메일 입력양식이 틀렸습니다.');
    } else if (!isValidPassword) {
      alert('비밀번호는 8글자 이상으로 설정하십시오.');
    }
    // api연결 - 일단 home으로
    else {
      navigate('/');
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const passwordConfirmHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(event.target.value);
  };
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const partHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPart(event.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h3>CEOS 운영진 선출 투표</h3>
      <InputContainer>
        <Input placeholder="이름" value={name} onChange={nameHandler} />
        <Input
          placeholder="비밀번호"
          value={password}
          onChange={passwordHandler}
        />
        <Input
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={passwordConfirmHandler}
        />
        <Input placeholder="이메일" value={email} onChange={emailHandler} />
        <RadioBtnContainer>
          <label>
            <Input
              type="radio"
              value="FE"
              onChange={partHandler}
              checked={part === 'FE'}
            />
            Frontend
          </label>
          <label>
            <Input
              type="radio"
              value="BE"
              onChange={partHandler}
              checked={part === 'BE'}
            />
            Backend
          </label>
        </RadioBtnContainer>
      </InputContainer>
      <SignUpBtn onClick={signupHandler}>회원가입</SignUpBtn>
      <SignInBtn
        onClick={() => {
          navigate('/signin');
        }}
      >
        로그인
      </SignInBtn>
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

const SignUpBtn = styled.button``;
const SignInBtn = styled.button``;

const RadioBtnContainer = styled.div``;

export default SignUpPage;
