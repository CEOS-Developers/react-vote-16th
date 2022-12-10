import styled from 'styled-components';
import Header from '../../component/Header';
import SmallBox from '../../component/SmallBox';

const DemoMain = () => {
  return (
    <Container>
      <Header />
      <Title>데모데이 투표</Title>
      <SmallBox text={'투표하기'} link="/demo/vote" />
      <SmallBox text={'결과보기'} link="/demo/result" />
    </Container>
  );
};

export default DemoMain;

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
