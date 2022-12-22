import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { UserInfo, PropsInfo } from '../interface/interfaces';
import { clickState, voteState } from '../state/state';
import '../css/animation.css';

const UserBox = styled.div<PropsInfo>`
  background-color: ${(props) =>
    props.isClick === props.id ? 'black' : '#d9d9d9'};
  color: ${(props) => (props.isClick === props.id ? '#1e90ff' : 'black')};
  border-radius: 10px;
  width: 150px;
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

const VoteUser = ({ user }: { user: UserInfo }) => {
  const [vote, setVote] = useRecoilState<string>(voteState);
  const [isClick, setIsClick] = useRecoilState<string>(clickState);
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setVote(e.currentTarget.id);
    setIsClick(e.currentTarget.id);
  };

  return (
    <UserBox id={user.userName} isClick={isClick} onClick={onClick} className='hover'>
      <Children>{user.userName}</Children>
    </UserBox>
  );
};

export default VoteUser;