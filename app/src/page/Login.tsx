import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { USER_SERVER } from '../config';

import { useRecoilState } from 'recoil';
import { part, name, team, token, isPartVote } from '../recoil/recoil';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [newPart, setPart] = useRecoilState(part);
  const [newName, setName] = useRecoilState(name);
  const [newTeam, setTeam] = useRecoilState(team);
  const [newToken, setToken] = useRecoilState(token);
  const [newPartFlag, setPartFlag] = useRecoilState(isPartVote);

  useEffect(() => {
    console.log(newPart, newName, newTeam, newToken);
    // window.location.replace('/');
  }, [token]);

  const clickLogin = async () => {
    let request = {
      id: id,
      password: pw,
    };

    // console.log(JSON.stringify(request));

    fetch(`${USER_SERVER}/vote/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message == '로그인에 성공했습니다') {
          setName(data.user.name);
          setPart(data.user.part);
          setTeam(data.user.team);
          setToken(data.token.access);
          setPartFlag(data.user.part_voted);
          // console.log(newName, newPart, newTeam, newToken);
        } else {
          alert('존재하지 않는 사용자입니다.');
        }
      });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Title> 로그인 </Title>

        <form onSubmit={onSubmit}>
          <ModalBox>
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setId(e.target.value)
              }
              value={id}
              style={{ marginTop: '8rem' }}
              placeholder="아이디"
            />
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPw(e.target.value)
              }
              value={pw}
              placeholder="비밀번호"
              type="password"
            />
            <Button onClick={clickLogin}>로그인</Button>
          </ModalBox>
        </form>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #384084;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  margin-right: 40rem;
  margin-bottom: 1rem;
  color: white;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: white;
`;

const Input = styled.input`
  width: 40rem;
  height: 3rem;
  font-size: 1.3rem;
  border: 1px black solid;
  border-radius: 0.8rem;
  margin-top: 2rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  background-color: #384084;
  border-radius: 0.8rem;
  color: #ffffff;
  margin-top: 5rem;
`;
