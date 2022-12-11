import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/Header";
import VoteBox from "../../component/VoteBox";

const Team = [
  {
    name: "Finble",
    desc: "주식 관리 포트폴리오 서비스",
    vote: 3,
  },
  {
    name: "Pre:folio",
    desc: "대학생 포트폴리오 공유 서비스",
    vote: 2,
  },
  {
    name: "diaMEtes",
    desc: "당뇨병 환자를 위한 식단 관리 서비스",
    vote: 1,
  },
  {
    name: "Reciepigy",
    desc: "음식 레시피 추천 서비스",
    vote: 1,
  },
  {
    name: "Teample",
    desc: "팀플 활동을 위한 협업 플랫폼",
    vote: 1,
  },
];
const grade = [1, 2, 3, 4, 5];

const DemoResult = () => {
  const location = useLocation();
  const part = location.state.data;
  let myGrade;

  return (
    <>
      <Header />
      <Container>
        <Title>데모데이 투표 결과</Title>
        <BoxContainer>
          {Team.map((i, index) => {
            myGrade = grade[index];

            if (index != 0 && Team[index].vote === Team[index - 1].vote) {
              grade[index] = grade[index - 1];
              myGrade = grade[index - 1];
            }

            return (
              <VoteBox
                grade={myGrade}
                name={i.name}
                team={i.desc}
                vote={i.vote}
                type={false}
              />
            );
          })}
        </BoxContainer>
      </Container>
    </>
  );
};

export default DemoResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`;

const Title = styled.div`
  color: #242957;
  height: 150px;
  font-size: 2.3rem;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 500px;
  gap: 2rem;
  margin: 0rem 0 6rem 0;
`;
