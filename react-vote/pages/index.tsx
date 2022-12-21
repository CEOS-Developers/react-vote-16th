import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { loginDb } from '../reducer/user';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import useNavigate from 'next/router';

const emailCheck = (email: string) => {
  let _reg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;

  return _reg.test(email);
};

export default function Home() {
  const navigate = useNavigate;
  //const [user,setUser]= useState<User>({id: "",password: ""});
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    console.log('a');
  }, []);

  const login = (e: any) => {
    e.preventDefault();

    if (id === '' || pw === '') {
      window.alert('아이디와 비밀번호를 입력해주세요.');
      return;
    } else if (!emailCheck(id)) {
      window.alert('이메일형식에 맞춰주세요.');
      return;
    } else {
      let email = id;
      let password = pw;

      const data = { email, password };
      console.log(data);
      dispatch(loginDb({ navigate, data }));
    }
  };

  return (
    <>
      <div className="form">
        <h1>로그인</h1>
        <input
          className="input-id"
          name="email"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="id를 입력하시오"
        />
        <input
          className="input-pw"
          name="password"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
          placeholder="pw를 입력하시오"
        />
        <button className="login-button" onClick={login}>
          로그인
        </button>
        <Link href={'/joinPage'}>회원가입하기</Link>
      </div>
      <style jsx>{`
        .form {
          width: 30rem;
          height: 50rem;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;

          border: 1px solid gainsboro;
        }

        .input-id,
        .input-pw {
          width: 70%;
          height: 2.5rem;

          padding: 1rem;
          border: 1px solid gainsboro;

          border-radius: 10px;
        }
        .login-button {
          width: 70%;
          height: 2.5rem;

          border: 1px solid gainsboro;

          border-radius: 10px;

          background-color: white;
          color: black;
        }
        .login-button:hover,
        .login-button:active {
          background: grey;
        }
      `}</style>
    </>
  );
}
