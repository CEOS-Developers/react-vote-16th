import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/Header";
import NameBox from "../../component/NameBox";
import SmallBox from "../../component/SmallBox";

const FE = [
  {
    name: "강나연",
    team: "Pre-Folio",
  },
  {
    name: "김선영",
    team: "Finble",
  },
  {
    name: "안채연",
    team: "Finble",
  },
  {
    name: "오지은",
    team: "Pre-Folio",
  },
  {
    name: "유선호",
    team: "Pre-Folio",
  },
  {
    name: "이한비",
    team: "Finble",
  },
  {
    name: "이현영",
    team: "Finble",
  },
  {
    name: "임채리",
    team: "Finble",
  },
  {
    name: "장영준",
    team: "Finble",
  },
  {
    name: "정희수",
    team: "Finble",
  },
];

const BE = [
  {
    name: "이지안",
    team: "Pre-Folio",
  },
  {
    name: "정상훈",
    team: "Finble",
  },
  {
    name: "안혜진",
    team: "Finble",
  },
  {
    name: "배수아",
    team: "Pre-Folio",
  },
  {
    name: "이정현",
    team: "Pre-Folio",
  },
  {
    name: "최수현",
    team: "Finble",
  },
  {
    name: "조현영",
    team: "Finble",
  },
  {
    name: "전수민",
    team: "Finble",
  },
  {
    name: "채승희",
    team: "Finble",
  },
  {
    name: "박준열",
    team: "Finble",
  },
];

const PartVote = () => {
  const [currIndex, setCurrIndex] = useState(20);

  const location = useLocation();
  const part = location.state.data;

  let currPart, voteCategory;
  if (part === "FRONT-END") {
    currPart = FE;
    voteCategory = "FE";
  } else {
    currPart = BE;
    voteCategory = "BE";
  }

  return (
    <>
      <Header />
      <Container>
        <Title>{part === "FRONT-END" ? "FE" : "BE"} 파트장 투표</Title>
        <BoxContainer>
          {currPart.map((i, index) => (
            <div onClick={() => setCurrIndex(index)}>
              <NameBox
                text="person"
                name={i.name}
                teamName={i.team}
                color={index === currIndex ? "#fff" : "black"}
                bgColor={index === currIndex ? "#384084" : "#fff"}
              />
            </div>
          ))}
        </BoxContainer>
        <SmallBoxContainer>
          <SmallBox text={"투표하기"} link="/part/vote" />
          <SmallBox
            text={"결과보기"}
            link="/part/result"
            text1={voteCategory}
          />
        </SmallBoxContainer>
      </Container>
    </>
  );
};

export default PartVote;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Title = styled.div`
  color: #242957;
  height: 150px;
  font-size: 2.3rem;
  margin-top: -2rem;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  gap: 2rem;
  justify-content: center;
  padding: 0 0 6rem 0;
`;

const SmallBoxContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
