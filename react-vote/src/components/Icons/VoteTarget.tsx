import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { LeaderNameButtonProps } from '../../interfaces';
import { isTeamClickedState, votedTeamState } from '../../states/DemoDayVotePage';
import { isLeaderClickedState, votedLeaderState } from '../../states/LeaderVotePageState';

export function VoteTarget({ name, onClick }: LeaderNameButtonProps) {
  const isPartLeaderClicked = useRecoilValue(isLeaderClickedState);
  const isTeamClicked = useRecoilValue(isTeamClickedState);
  const votedLeader = useRecoilValue(votedLeaderState);
  const votedTeam = useRecoilValue(votedTeamState);

  return (
    <Column>
      <NameArea onClick={onClick} name={name}>
        {name}
      </NameArea>
      {(isPartLeaderClicked && votedLeader === name) || (isTeamClicked && votedTeam === name) ? <Line /> : <></>}
    </Column>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NameArea = styled.button`
  font-size: 30px;
  position: relative;
  top: 8px;
  z-index: 1;
  color: #484848;
`;

const Line = styled.div`
  width: 88px;
  height: 16px;
  background: #facacf;
  position: relative;
  top: -8px;
`;
