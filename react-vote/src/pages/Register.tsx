import styled from 'styled-components';
import { Header } from '../components/elements/Header';
import RegisterList from '../components/elements/RegisterList';
import { BLACK_1 } from '../styles/theme';

export function Register() {
  return (
    <Container>
      <Header />
      <Section>
        <RegisterList />
      </Section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin-top: 200px; */
  justify-content: center;
  align-items: center;
  color: ${BLACK_1};

  & .main-1 {
    font-size: 72px;
  }
`;
