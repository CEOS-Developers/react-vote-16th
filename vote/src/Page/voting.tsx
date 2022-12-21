import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { frontUserState, backUserState, voteState,partState,clickState, clickbtnState } from '../state/state';
import { UserInfo } from '../interface/interfaces';
import VoteUser from '../components/voteUser';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import url,{clientURL} from '../apis/baseURL'; 
import { Fade } from 'react-awesome-reveal';
const SubmitBtn = styled.button`
  width: 150px;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 10px;
  border: none;
  margin-top: 30px;
  &:hover {
    background-color: #1e90ff;
    color: white;
  }
  font-weight: bold;
  font-size: 20px;
  margin-top: 50px;
`;
const VotingContainer = styled.div`
  width: 600px;
  height: 550px;
  padding: 30px;
  background: #e9ecef;
  box-shadow: 0px 0px 8px gray;
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 400px;
  height: 300px;
  flex-flow: wrap;
  display: flex;
  justify-content: center;
`;
const Voting = () => {
  //메인화면에서 클릭에 따라 프론트나 백 갖고와서 띄울거
  const [front, setFront] = useRecoilState<UserInfo[]>(frontUserState);
  const [back, setBack] = useRecoilState<UserInfo[]>(backUserState);
  const [vote, setVote] = useRecoilState<string>(voteState);
  const [isClick, setIsClick] = useRecoilState<string>(clickState);
  const [res, setRes] = useRecoilState<string>(clickbtnState);
  const locname = localStorage.getItem("name");
  const locpart = localStorage.getItem("part");
  const navigate = useNavigate();
  const onVote = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (vote !== '999') {
      putVote();
      alert('투표가 완료되었습니다.');
      setIsClick('999');
      setVote('999');
      if(locpart === 'Frontend'){
        setRes('FE')
      }
      else{
        setRes('BE')
      }
      navigate('/result');
    } else {
      alert('후보자를 선택해주세요.');
    }
  };
  axios.defaults.baseURL = 'http://3.38.123.37';
    const putVote = async () =>{
        try{
            await url.put("/api/votes/candidates/"
            ,{
              name : vote,
              user : locname,
              part : locpart
            }
            )

        }
        catch (e){
            console.log("에러 : " ,e);
        }
    }
  return (
    <Fade>
      <VotingContainer>
        <h2>{locpart === 'Frontend' ? 'FE' : 'BE'} 운영진 투표하기 🗳</h2>
        <Wrapper>
          {locpart === 'Frontend'
            ? front.map((user) => <VoteUser key={user.userName} user={user} />)
            : back.map((user) => <VoteUser key={user.userName} user={user} />)}
        </Wrapper>
        <SubmitBtn onClick={onVote}>투표하기</SubmitBtn>
      </VotingContainer>
    </Fade>
  );
};
export default Voting;