import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { signUpDb } from '../reducer/joinUser';
import styled from 'styled-components';
import { useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';

export default function JoinPage() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const data = useSelector((state: any) => state.joinSlice.joinData);
  const [error, setError] = useState(data);

  //초기값
  const initialState = {
    email: '',
    password: '',
    username: '',
    name: '',
    part: '',
    team: '',
  };

  const [joinToggle, setJoinToggle] = useState(true);
  const [form, setForm] = useState(initialState);
  const { email, password, username, name, part, team } = form;
  const [alertB, setAlert] = useState('');

  const onChange = (e: any) => {
    const REGID = /^(?=.*[a-z0-9])[a-z0-9]{3,10}$/;
    const REGPW =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}/;
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
    if (form.email === '' || !REGID.test(email)) {
      setAlert('아이디는 영문 또는 숫자 4-10자입니다');
    } else if (password === '' || !REGPW.test(password)) {
      setAlert('비밀번호는 대소문자,숫자,특수기호 포함 6-12자 입니다');
    } else if (part === '') {
      setAlert('파트를 입력해주세요');
    } else if (team === '') {
      setAlert('팀을 입력해주세요');
    } else if (name === '') {
      setAlert('이름을 입력해주세요');
    } else if (username === '' || username.length > 7) {
      setAlert('닉네임을 확인해주세요');
    } else {
      setAlert('');
      //버튼 활성화 토글
      setJoinToggle(false);
    }
    console.log(form);
    console.log(selectedPart);
  };

  const joinData = { email, password, username, name, part, team };

  const onClick = (e: any) => {
    e.preventDefault();
    if (
      email === '' ||
      password === '' ||
      team === '' ||
      part === '' ||
      username === '' ||
      name === ''
    ) {
      alert('내용을 모두 입력해주세요');
    } else {
      dispatch(signUpDb({ joinData }));
    }
  };

  const selectPartList = ['파트를 선택하세요', 'Frontend', 'Backend'];
  const [selectedPart, setPart] = useState('');

  const handleSelect = (e: any) => {
    setPart(e.target.value);
    onChange(e);
  };

  const selectTeamList = [
    '팀을 선택하세요',
    'recipeasy',
    'forgetmenot',
    'prefolio',
    'diametes',
    'teample',
  ];
  const [selectedTeam, setTeam] = useState('');

  const handleTeamSelect = (e: any) => {
    setTeam(e.target.value);
    onChange(e);
  };

  return (
    <>
      <form className="form">
        <h1>회원가입</h1>
        <input
          className="input-join"
          required
          name="email"
          value={email}
          onChange={onChange}
          placeholder="이메일을 입력하세요"
        />
        <input
          className="input-join"
          required
          name="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호를 입력하세요"
        />
        <input
          className="input-join"
          required
          name="username"
          value={username}
          onChange={onChange}
          placeholder="닉네임을 입력하세요"
        />

        <select
          className="select"
          name="part"
          onChange={handleSelect}
          value={selectedPart}
        >
          {selectPartList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          className="input-join"
          required
          name="name"
          value={name}
          onChange={onChange}
          placeholder="이름을 입력하세요"
        />
        <select
          className="select"
          name="team"
          onChange={handleTeamSelect}
          value={selectedTeam}
        >
          {selectTeamList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          className="join-button"
          onClick={onClick}
          // variant="dark"
          //disabled={joinToggle}
        >
          완료
        </button>
        <Link href="/">로그인하기</Link>
      </form>
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
        .input-join {
          width: 70%;
          height: 2.5rem;

          padding: 1rem;
          border: 1px solid gainsboro;

          border-radius: 10px;
        }
        select {
          width: 70%;
          height: 2.5rem;
          padding: 0 1rem 0;
          border: 1px solid gainsboro;

          border-radius: 10px;
        }
        .join-button {
          width: 70%;
          height: 2.5rem;

          border: 1px solid gainsboro;

          border-radius: 10px;

          background-color: white;
          color: black;
        }
        .join-button:hover,
        .join-button:active {
          background: grey;
        }
      `}</style>
    </>
  );
}
