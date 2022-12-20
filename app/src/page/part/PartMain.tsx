import styled from "styled-components";
import LargeBox from "../../component/LargeBox";
import Header from "../../component/Header";
import SmallBox from "../../component/SmallBox";

const PartMain = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>파트장 투표</Title>
        <BoxContainer>
          <BoxItem>
            <LargeBox text1="FRONT-END" text2="파트장 투표" link="/part/vote" />
            <SmallBox text={"결과보기"} link="/part/result" text1="front" />
          </BoxItem>
          <BoxItem>
            <LargeBox text1="BACK-END" text2="파트장 투표" link="/part/vote" />
            <SmallBox text="결과보기" link="/part/result" text1="back" />
          </BoxItem>
        </BoxContainer>
      </Container>
    </>
  );
};

export default PartMain;

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
  margin-bottom: 4rem;
`;

const BoxContainer = styled.div`
  display: flex;
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
