import styled from "styled-components";
import LargeBox from "../../component/LargeBox";
import Header from "../../component/Header";
import SmallBox from "../../component/SmallBox";
import { useRecoilValue } from "recoil";
import { isPartVote, part } from "../../recoil/store";

const PartMain = () => {
  const devPart = useRecoilValue(part);
  const voteTF = useRecoilValue(isPartVote);

  return (
    <>
      <Header />
      <Container>
        <Title>파트장 투표</Title>
        <BoxContainer>
          <BoxItem>
            <LargeBox text1="FRONT-END" text2="파트장 투표" link="/part/vote" />
            {(devPart === "front" || devPart === "") && voteTF === false ? (
              <div onClick={() => alert("투표를 먼저 완료해주세요")}>
                <SmallBox text={"결과보기"} link="/part" text1="front" />
              </div>
            ) : (
              <SmallBox text={"결과보기"} link="/part/result" text1="front" />
            )}
          </BoxItem>
          <BoxItem>
            <LargeBox text1="BACK-END" text2="파트장 투표" link="/part/vote" />
            {(devPart === "back" || devPart === "") && voteTF === false ? (
              <div onClick={() => alert("투표를 먼저 완료해주세요")}>
                <SmallBox text={"결과보기"} link="/part" text1="back" />
              </div>
            ) : (
              <SmallBox text={"결과보기"} link="/part/result" text1="back" />
            )}
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
