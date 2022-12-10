import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  let login = false;
  let team = 'FINBLE';
  let part = 'FE';
  let name = '오지은';

  let state = team + ' ' + part + ' ' + name;

  return (
    <>
      <Container>
        <div style={{ marginLeft: '1.5rem' }}>
          <Link to="/">CEOS 로고 왜 안들어가지</Link>
        </div>

        <ButtonContainer>
          {login ? (
            <>
              <Text>{state}</Text>
              <Button>로그아웃</Button>
            </>
          ) : (
            <>
              <Link to={'/login'} style={{ textDecoration: 'none' }}>
                <Button>로그인</Button>
              </Link>
              <Link to={'/signUp'} style={{ textDecoration: 'none' }}>
                <Button>회원가입</Button>
              </Link>
            </>
          )}
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 6rem;
  border: 1px #384084 solid;
  border-radius: 2rem;
  margin-left: 1.5rem;
  font-size: 1rem;
  color: black;

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
