import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { UserInfo, PropsInfo, TeamInfo } from '../interface/interfaces';
import { clickState, clickTeamState, teamVoteState } from '../state/state';
import '../css/animation.css';

const UserBox = styled.div<PropsInfo>`
  background-color: ${(props) =>
    props.isClick === props.id ? 'black' : '#d9d9d9'};
  color: ${(props) => (props.isClick === props.id ? '#1e90ff' : 'black')};
  border-radius: 10px;
  width: 200px;
  height: 50px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    background-color: #1e90ff;
  }
`;

const Children = styled.div``;

const VoteTeam = ({ team }: { team: TeamInfo }) => {
  const [vote, setVote] = useRecoilState<string>(teamVoteState);
  const [isClick, setIsClick] = useRecoilState<string>(clickTeamState);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setVote(e.currentTarget.id);
    setIsClick(e.currentTarget.id);
  };

  return (
    <UserBox id={team.team} isClick={isClick} onClick={onClick} className='hover'>
      <Children>{team.team}</Children>
    </UserBox>
  );
};

export default VoteTeam;
