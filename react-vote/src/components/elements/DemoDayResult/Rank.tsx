import styled from 'styled-components';
import { RankProps } from '../../../interfaces';

export function Rank({ teamName, rank, style }: RankProps) {
  return (
    <Wrapper style={style}>
      <TeamName>{teamName}</TeamName>
      <Column>
        <RankNumber>{rank}</RankNumber>
        <Line />
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const TeamName = styled.span`
  font-size: 32px;
  color: #484848;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RankNumber = styled.span`
  font-size: 32px;
  color: #484848;
  font-weight: 600;
  position: relative;
  top: 8px;
  z-index: 1;
`;

const Line = styled.div`
  width: 36px;
  height: 16px;
  background: #facacf;
  position: relative;
  top: -12px;
`;
