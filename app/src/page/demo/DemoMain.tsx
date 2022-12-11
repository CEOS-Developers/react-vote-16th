import styled from "styled-components";
import Header from "../../component/Header";
import SmallBox from "../../component/SmallBox";

const DemoMain = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>데모데이 투표</Title>
        <SmallBox text="투표하기" link="/demo/vote" />
        <SmallBox text="결과보기" link="/part/result" text1="데모데이" />
      </Container>
    </>
  );
};

export default DemoMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Title = styled.div`
  color: #242957;
  font-size: 2.3rem;
  margin: -3rem 0 7rem 0;
`;
