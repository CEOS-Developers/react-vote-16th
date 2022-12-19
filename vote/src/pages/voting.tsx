import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { frontUserState, backUserState, voteState } from '../state/state';
import { UserInfo } from '../interface/interfaces';
import VoteUser from '../components/voteUser';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../styles/wrapper';

const SubmitBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin-left: auto;
  margin-right: 72px;
  border: none;
  margin-top: 30px;
  &:hover {
    color: #ff8787;
    background-color: white;
  }
`;

const Voting = () => {
  //메인화면에서 클릭에 따라 프론트나 백 갖고와서 띄울거
  const [front, setFront] = useRecoilState<UserInfo[]>(frontUserState);
  const [vote, setVote] = useRecoilState<string>(voteState);
  const navigate = useNavigate();
  const onVote = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (vote !== '999') {
      alert('투표가 완료되었습니다.');
      navigate(-1);
    } else {
      alert('후보자를 선택해주세요.');
    }
  };

  return (
    <Wrapper>
      {front.map((user) => (
        <VoteUser key={user.userId} user={user} />
      ))}
      <SubmitBtn onClick={onVote}>투표하기</SubmitBtn>
    </Wrapper>
  );
};

export default Voting;
