import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/Header';
import NameBox from '../../component/NameBox';
import SmallBox from '../../component/SmallBox';

const Team = [
  {
    name: 'Finble',
    desc: '주식 관리 포트폴리오 서비스',
  },
  {
    name: 'Pre:folio',
    desc: '대학생 포트폴리오 공유 서비스',
  },
  {
    name: 'diaMEtes',
    desc: '당뇨병 환자를 위한 식단 관리 서비스',
  },
  {
    name: 'Reciepigy',
    desc: '음식 레시피 추천 서비스',
  },
  {
    name: 'Teample',
    desc: '팀플 활동을 위한 협업 플랫폼',
  },
];

const DemoVote = () => {
  const [currIndex, setCurrIndex] = useState(20);

  return (
    <>
      <Header />
      <Container>
        <Title>데모데이 투표</Title>
        <BoxContainer>
          {Team.map((i, index) => (
            <div onClick={() => setCurrIndex(index)}>
              <NameBox
                text="demo"
                teamName={i.name}
                teamDesc={i.desc}
                color={index === currIndex ? '#fff' : 'black'}
                bgColor={index === currIndex ? '#384084' : '#fff'}
              />
            </div>
          ))}
        </BoxContainer>
        <SmallBoxContainer>
          <SmallBox text="투표하기" link="/part/result" text1="데모데이" />
          {/* <SmallBox text="결과보기" link="/part/result" text1="데모데이" /> */}
        </SmallBoxContainer>
      </Container>
    </>
  );
};

export default DemoVote;

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
  width: 1000px;
  gap: 2rem;
  justify-content: center;
  padding: 0 0 6rem 0;
`;

const SmallBoxContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
