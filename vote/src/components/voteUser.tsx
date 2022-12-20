import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { UserInfo, PropsInfo } from '../interface/interfaces';
import { clickState, voteState } from '../state/state';

const UserBox = styled.div<PropsInfo>`
  background-color: ${(props) =>
    props.isClick === props.id ? 'black' : '#d9d9d9'};
  color: ${(props) => (props.isClick === props.id ? '#FF8787' : 'black')};
  border-radius: 10px;
  margin-bottom: 10px;
  width: 150px;
  height: 45px;
  margin-right: 25px;

  &:hover {
    color: #ff8787;
    background-color: black;
  }
`;

const Children = styled.div`
  margin-top: 15px;
  text-align : center;
  .userInfo {
    margin-left: 10px;
    margin-top: 5px;
  }
`;

const VoteUser = ({ user }: { user: UserInfo }) => {
  const [vote, setVote] = useRecoilState<string>(voteState);
  const [isClick, setIsClick] = useRecoilState<string>(clickState);
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setVote(e.currentTarget.id);
    setIsClick(e.currentTarget.id);
  };

  return (
    <UserBox id={user.userName} isClick={isClick} onClick={onClick}>
      <Children>
        <div className="userInfo">
          {user.userName} ({user.teamName})
        </div>
      </Children>
    </UserBox>
  );
};

export default VoteUser;
