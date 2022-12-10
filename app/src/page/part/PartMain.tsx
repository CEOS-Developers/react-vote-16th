import styled from 'styled-components';
import LargeBox from '../../component/LargeBox';
import Header from '../../component/Header';
import SmallBox from '../../component/SmallBox';

const PartMain = () => {
  return (
    <Container>
      <Header />
      <Title>파트장 투표</Title>
      <BoxContainer>
        <LargeBox text1={'FRONT-END'} text2={'파트장 투표'} link="/part/vote" />
        <LargeBox text1={'BACK-END'} text2={'파트장 투표'} link="/part/vote" />
      </BoxContainer>
      <BoxContainer style={{ marginTop: '2rem' }}>
        <SmallBox text={'결과보기'} link="/part/result" />
        <SmallBox text={'결과보기'} link="/part/result" />
      </BoxContainer>
    </Container>
  );
};

export default PartMain;

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
