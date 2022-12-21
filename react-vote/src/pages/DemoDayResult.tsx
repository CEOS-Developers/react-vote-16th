import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/elements/Header';
import axios from 'axios';
import { DemoDayResultTitle } from '../components/Icons/Title/DemoDayResult';
import styled from 'styled-components';
import { Rank } from '../components/elements/DemoDayResult/Rank';
import { getDemoDayResult } from '../api/getResult';
import { Container } from '../components/elements/Wrapper';
import { TeamVoteProps } from '../interfaces';

export function DemoDayResult() {
  const { isLoading, data: teamListData }: any = useQuery(
    ['demo-day-result'],
    getDemoDayResult
  );

  return (
    <Container>
      <Header />
      <Wrapper>
        <DemoDayResultTitle />
        {teamListData ? (
          teamListData.map((team: TeamVoteProps) => {
            console.log(team);
            return <Rank teamName={team.team} rank={team.total} />;
          })
        ) : (
          <></>
        )}
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  gap: 12px;
`;

const TeamListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
