import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/Header";
import VoteBox from "../../component/VoteBox";

const FE = [
  {
    name: "강나연",
    team: "Pre-Folio",
    vote: 3,
  },
  {
    name: "김선영",
    team: "Finble",
    vote: 2,
  },
  {
    name: "안채연",
    team: "Finble",
    vote: 1,
  },
  {
    name: "오지은",
    team: "Pre-Folio",
    vote: 1,
  },
  {
    name: "유선호",
    team: "Pre-Folio",
    vote: 1,
  },
  {
    name: "이한비",
    team: "Finble",
    vote: 1,
  },
  {
    name: "이현영",
    team: "Finble",
    vote: 1,
  },
  {
    name: "임채리",
    team: "Finble",
    vote: 1,
  },
  {
    name: "장영준",
    team: "Finble",
    vote: 1,
  },
  {
    name: "정희수",
    team: "Finble",
    vote: 1,
  },
];

const BE = [
  {
    name: "이지안",
    team: "Pre-Folio",
    vote: 3,
  },
  {
    name: "정상훈",
    team: "Finble",
    vote: 2,
  },
  {
    name: "안혜진",
    team: "Finble",
    vote: 2,
  },
  {
    name: "배수아",
    team: "Pre-Folio",
    vote: 1,
  },
  {
    name: "이정현",
    team: "Pre-Folio",
    vote: 1,
  },
  {
    name: "최수현",
    team: "Finble",
    vote: 1,
  },
  {
    name: "조현영",
    team: "Finble",
    vote: 1,
  },
  {
    name: "전수민",
    team: "Finble",
    vote: 1,
  },
  {
    name: "채승희",
    team: "Finble",
    vote: 0,
  },
  {
    name: "박준열",
    team: "Finble",
    vote: 0,
  },
];
const grade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PartResult = () => {
  const location = useLocation();
  const part = location.state.data;
  let currPart: any;
  let myGrade: any;

  if (part === "FE") {
    currPart = FE;
  } else {
    currPart = BE;
  }

  return (
    <>
      <Header />
      <Container>
        <Title>{part === "FE" ? "FE" : "BE"} 파트장 결과</Title>
        <BoxContainer>
          {currPart.map((i: any, index: number) => {
            myGrade = grade[index];
            if (
              index != 0 &&
              currPart[index].vote === currPart[index - 1].vote
            ) {
              grade[index] = grade[index - 1];
              myGrade = grade[index];
            }

            return (
              <VoteBox
                grade={myGrade}
                name={i.name}
                team={i.team}
                vote={i.vote}
                type={true}
              />
            );
          })}
        </BoxContainer>
      </Container>
    </>
  );
};

export default PartResult;

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
