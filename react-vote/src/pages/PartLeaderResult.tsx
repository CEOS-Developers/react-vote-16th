import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/elements/Header';
import axios from 'axios';
import styled from 'styled-components';
import { getPartLeaderResult } from '../api/getResult';
import { Container } from '../components/elements/Wrapper';
import { Rank } from '../components/elements/DemoDayResult/Rank';
import ToggleSwitch from '../components/elements/ToggleSwitch';
import { useEffect, useState } from 'react';

export function PartLeaderResult() {
  const [isFrontend, setIsFrontend] = useState(true);
  const [part, setPart] = useState('frontend');
  const [voteData, setVoteData] = useState();

  const { isLoading, data: partLeaderData }: any = useQuery(
    ['part-leader-result', part],
    async () => {
      const result = await getPartLeaderResult(part);
      return result;
    }
  );

  const toggleSwitchHandler = () => {
    setIsFrontend(!isFrontend);
  };

  useEffect(() => {
    console.log(isFrontend);
    console.log(part);
    isFrontend ? setPart('frontend') : setPart('backend');
  }, [isFrontend]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <ToggleSwitch isFrontend={isFrontend} setIsFrontend={setIsFrontend} />
        <RankWrapper>
          {partLeaderData ? (
            partLeaderData.data.map((votee: any) => {
              return <Rank teamName={votee.votee} rank={votee.total} />;
            })
          ) : (
            <></>
          )}
        </RankWrapper>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const RankWrapper = styled.div`
  margin-top: 100px;
  height: 600px;
  overflow: auto;
`;
