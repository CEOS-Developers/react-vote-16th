import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/elements/Header';
import LoginList from '../components/elements/LoginList';
import { BLACK_1 } from '../styles/theme';

export function Login() {
  const navigate = useNavigate();

  const onClickJoinText = () => {
    navigate('/register');
  };

  return (
    <Container>
      <Header />
      <Section>
        <LoginList />
        <JoinText onClick={onClickJoinText}>회원이 아니신가요?</JoinText>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  justify-content: center;
  align-items: center;
  color: ${BLACK_1};

  & .main-1 {
    font-size: 72px;
  }
`;

const JoinText = styled.div`
  text-decoration: underline;
  font-size: 20px;
  text-align: center;

  margin-top: 40px;

  cursor: pointer;
`;
