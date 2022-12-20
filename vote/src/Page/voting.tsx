import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { frontUserState, backUserState, voteState,partState,clickState } from '../state/state';
import { UserInfo } from '../interface/interfaces';
import VoteUser from '../components/voteUser';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../css/wrapper';
import axios from 'axios';
import url,{clientURL} from '../apis/baseURL'; 

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
    background-color: black;
  }
`;

const Voting = () => {
  //메인화면에서 클릭에 따라 프론트나 백 갖고와서 띄울거
  const [front, setFront] = useRecoilState<UserInfo[]>(frontUserState);
  const [back, setBack] = useRecoilState<UserInfo[]>(backUserState);
  const [vote, setVote] = useRecoilState<string>(voteState);
  const [part, setPart] = useRecoilState<string>(partState);
  const [isClick, setIsClick] = useRecoilState<string>(clickState);

  const navigate = useNavigate();

  const onVote = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (vote !== '999') {
      putVote();
      alert('투표가 완료되었습니다.');
    } else {
      alert('후보자를 선택해주세요.');
    }
  };
    const putVote = async () =>{
        try{
            await url.put("/api/votes/candidates/"
            ,{
              name : vote,
              part : part
            }
            )
            .then((res)=>{
              console.log(res);
              setIsClick('999');
              setVote('999');
              navigate('/home');
            })
        }
        catch (e){
            console.log("에러 : " ,e);
        }
    }


  return (
    <Wrapper>
      {part === 'Frontend' ? front.map((user) => (
        <VoteUser key={user.userName} user={user} />
      )) : back.map((user) => (
        <VoteUser key={user.userName} user={user} />
      ))}
      <SubmitBtn onClick={onVote}>투표하기</SubmitBtn>
    </Wrapper>
  );
};

export default Voting;
