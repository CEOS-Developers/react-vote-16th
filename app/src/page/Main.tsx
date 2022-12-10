import styled from 'styled-components';
import LargeBox from '../component/LargeBox';
import Header from '../component/Header';

const Main = () => {
  return (
    <Container>
      <Header />
      <Title>파트장/데모데이 투표</Title>
      <BoxContainer>
        <LargeBox text1={'파트장 투표'} text2={'바로가기'} link="/part" />
        <LargeBox text1={'데모데이 투표'} text2={'바로가기'} link="/demo" />
      </BoxContainer>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.div`
  color: #242957;
  font-size: 5rem;
  margin-top: 7rem;
  margin-bottom: 7rem;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
