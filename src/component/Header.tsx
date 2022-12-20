import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { part, name, team, token } from '../recoil/store';
import { useEffect } from 'react';

const Header = () => {
  const [newPart, setPart] = useRecoilState(part);
  const [newName, setName] = useRecoilState(name);
  const [newTeam, setTeam] = useRecoilState(team);
  const [newToken, setToken] = useRecoilState(token);

  let state = newTeam + ' ' + newPart + ' ' + newName;

  useEffect(() => {
    // console.log(state);
  }, []);

  const logout = () => {
    setPart('');
    setName('');
    setTeam('');
    setToken('');
  };

  return (
    <Container>
      <Link to="/">
        <Logo src="/ceos.png" alt="Logo" />
      </Link>

      <ButtonContainer>
        {newName != 'none' ? (
          <>
            <Text>{state}</Text>
            <Button onClick={logout}>로그아웃</Button>
          </>
        ) : (
          <>
            <Link
              to={'/login'}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Button>로그인</Button>
            </Link>
            <Link
              to={'/signUp'}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Button>회원가입</Button>
            </Link>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Header;

const Logo = styled.img`
  width: 130px;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #384084;
  border-radius: 2rem;
  font-size: 0.8rem;

  &:hover {
    background-color: #384084;
    color: white;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  font-size: 1.6rem;
  margin-top: 0.4rem;
`;
