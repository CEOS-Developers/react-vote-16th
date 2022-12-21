import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/elements/Header';
import { BLACK_1 } from '../styles/theme';
import { Content1 } from '../components/Icons/Content_1';
import { Content2 } from '../components/Icons/Content_2';
import { Content3 } from '../components/Icons/Content_3';
import { Content4 } from '../components/Icons/Content_4';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/elements/Wrapper';

export function Home() {
  const navigate = useNavigate();

  const onClickContentButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    let content = e.currentTarget.name;
    switch (content) {
      case 'part-leader-vote':
        return navigate('vote/part-leader');
      case 'part-leader-result':
        return navigate('result/part-leader');
      case 'demo-day-vote':
        return navigate('vote/demo-day');
      case 'demo-day-result':
        return navigate('result/demo-day');
      default:
        return;
    }
  };
  return (
    <Container>
      <Header />
      <Section>
        <div className='main-1'>Vote for...</div>
        <ContentWrapper>
          <Content1 onClick={onClickContentButton} />
          <Content2 onClick={onClickContentButton} />
          <Content3 onClick={onClickContentButton} />
          <Content4 onClick={onClickContentButton} />
        </ContentWrapper>
      </Section>
    </Container>
  );
}

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  justify-content: center;
  align-items: center;
  color: ${BLACK_1};

  & .main-1 {
    font-size: 72px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  margin-top: 20px;
  grid-template-columns: 250px 250px;
  grid-template-rows: 250px 250px;
`;
