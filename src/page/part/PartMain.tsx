import styled from "styled-components";
import LargeBox from "../../component/LargeBox";
import Header from "../../component/Header";
import SmallBox from "../../component/SmallBox";

const PartMain = () => {
  const devPart = localStorage.getItem("part");
  const voteTF = localStorage.getItem("part_voted");

  console.log(devPart);
  return (
    <>
      <Header />
      <Container>
        <Title>파트장 투표</Title>
        <BoxContainer>
          <BoxItem>
            {devPart === "front" ? (
              <LargeBox
                text1="FRONT-END"
                text2="파트장 투표"
                link="/part/vote"
              />
            ) : (
              <Box>
                자신의 파트의 파트장만 <br /> 투표할 수 있습니다.
              </Box>
            )}

            {(devPart === "front" && voteTF === "false") || devPart === null ? (
              <div onClick={() => alert("투표를 먼저 완료해주세요")}>
                <SmallBox text={"결과보기"} link="/part" text1="front" />
              </div>
            ) : (
              <SmallBox
                text={"결과보기"}
                link="/part/result"
                text1="front"
                onClick={() => {
                  localStorage.setItem("result", "front");
                }}
              />
            )}
          </BoxItem>
          <BoxItem>
            {devPart === "back" ? (
              <LargeBox
                text1="BACK-END"
                text2="파트장 투표"
                link="/part/vote"
              />
            ) : (
              <Box>
                자신의 파트의 파트장만 <br /> 투표할 수 있습니다.
              </Box>
            )}
            {(devPart === "back" && voteTF === "false") || devPart === null ? (
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 18rem;
  width: 18rem;
  border: 3px #384084 solid;
  border-radius: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;

  text-align: center;
  font-size: 1.5rem;
  line-height: 3rem;
  color: black;

  &:hover {
    background-color: #384084;
    color: #ffffff;
  }
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
