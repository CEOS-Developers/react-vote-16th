import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [part, setPart] = useState('');
  const isValidEmail = email.includes('@') && email.includes('.');
  const isValidPassword = password.length >= 8;
  const navigate = useNavigate();
  axios.defaults.baseURL = 'http://3.38.123.37';

  const signUpAPI = async () => {
    await axios
      .post('/api/auth/registration/', {
        username: name,
        email: email,
        password1: password,
        password2: passwordConfirm,
        team: 'Teample',
        part: part,
      })
      .then((response) => {
        console.log(response.data);
        alert('회원가입 성공! 로그인 화면으로 이동합니다.');
        navigate('/'); //홈으로 가서 로그인하게 만들기
      })
      .catch(function (error) {
        console.log(error);
        alert('회원가입 실패(⚠️원인: 항목 간 중복된 내용‼️ or 이미 존재하는 사용자 or 서버 에러)');
      });
  };

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
    } else {
      signUpAPI();
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
    <SignUpContainer>
      <h2>CEOS 운영진 선출 투표 🗳</h2>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Input placeholder="이름" value={name} onChange={nameHandler} />
          <Input
            placeholder="비밀번호"
            value={password}
            onChange={passwordHandler}
            type='password'
          />
          <Input
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={passwordConfirmHandler}
            type='password'
          />
          <Input placeholder="이메일" value={email} onChange={emailHandler} />
          <RadioBtnContainer>
            <Label>
              <RInput
                type="radio"
                value="Frontend"
                onChange={partHandler}
                checked={part === 'Frontend'}
              />
              Frontend
            </Label>
            <Label>
              <RInput
                type="radio"
                value="Backend"
                onChange={partHandler}
                checked={part === 'Backend'}
              />
              Backend
            </Label>
          </RadioBtnContainer>
          <SignUpBtn onClick={signupHandler}>회원가입</SignUpBtn>
          <br />
          <SignInBtn
            onClick={() => {
              navigate('/');
            }}
          >
            로그인
          </SignInBtn>
        </InputContainer>
      </Form>
    </SignUpContainer>
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

const RInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
`;

const SignUpBtn = styled.button`
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
const SignInBtn = styled.span`
  text-decoration: underline;

`;

const RadioBtnContainer = styled.div`
  margin: 10px 0px 0px 10px;
`;

const SignUpContainer = styled.div`
  width: 400px;
  height: 550px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e9ecef;
  box-shadow: 0px 0px 8px gray;
  border-radius: 15px;
`;

const Label = styled.label`
  &:hover {
    cursor: pointer;
  }
  border: none;
  margin-right: 30px;
  vertical-align: middle;
`;

export default SignUpPage;
