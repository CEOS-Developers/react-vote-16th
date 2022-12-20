import styled from "styled-components";
import LargeBox from "../../component/LargeBox";
import Header from "../../component/Header";
import SmallBox from "../../component/SmallBox";
import { useRecoilValue } from "recoil";
import { name, part } from "../../recoil/recoil";
import { useEffect, useState } from "react";
import { USER_SERVER } from "../../config";

const PartMain = () => {
  const userName = useRecoilValue(name);
  const userPart = useRecoilValue(part);
  const [member, setMember] = useState<any[]>([]);
  // const [member, setMember] = useState();

  useEffect(() => {
    fetch(`${USER_SERVER}/vote/results/${userPart}/`)
      .then((response) => response.json())
      .then((data) => setMember(data));
  }, []);

  let user;
  useEffect(() => {
    user = member.filter(
      (i: any) => i.name === userName && i.part === userPart
    );
  }, [member]);

  console.log(user);

  return (
    <>
      <Header />
      <Container>
        <Title>파트장 투표</Title>
        <BoxContainer>
          <BoxItem>
            <LargeBox text1="FRONT-END" text2="파트장 투표" link="/part/vote" />
            {/* {user != undefined && user[0].part_voted === true ? (
              <SmallBox text={"결과보기"} link="/part/result" text1="front" />
            ) : (
              <div onClick={() => alert("투표를 먼저 완료해주세요")}>
                <SmallBox text={"결과보기"} link="/part" text1="front" />
              </div>
            )} */}
            <SmallBox text={"결과보기"} link="/part/result" text1="front" />
          </BoxItem>
          <BoxItem>
            <LargeBox text1="BACK-END" text2="파트장 투표" link="/part/vote" />
            {/* {user[0].part_voted === true ? (
              <SmallBox text={"결과보기"} link="/part/result" text1="back" />
            ) : (
              <div onClick={() => alert("투표를 먼저 완료해주세요")}>
                <SmallBox text={"결과보기"} link="/part" text1="back" />
              </div>
            )} */}
            <SmallBox text={"결과보기"} link="/part/result" text1="back" />
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
