import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/Header";
import NameBox from "../../component/NameBox";
import SmallBox from "../../component/SmallBox";
import { USER_SERVER } from "../../config";

const PartVote = () => {
  const [currIndex, setCurrIndex] = useState(20);

  const location = useLocation();
  const part = location.state.data;

  let currPart: string;
  const [member, setMember] = useState<any[]>([]);

  if (part === "FRONT-END") {
    currPart = "front";
  } else {
    currPart = "back";
  }

  useEffect(() => {
    fetch(`${USER_SERVER}/vote/results/${currPart}/`)
      .then((response) => response.json())
      .then((data) => setMember(data));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>{part === "FRONT-END" ? "FE" : "BE"} 파트장 투표</Title>
        <BoxContainer>
          {member.map((i, index) => (
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
          {currIndex != 20 ? (
            <SmallBox text={"투표하기"} link="/part/result" text1={currPart} />
          ) : (
            <SmallBox
              text={"투표하기"}
              link="/part/vote"
              text1={currPart}
              disable={true}
            />
          )}
          {/* <SmallBox
            text={'결과보기'}
            link="/part/result"
            text1={voteCategory}
          /> */}
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
