import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { frontUserState, backUserState, voteState, voteNumState } from '../state/state';
import { UserInfo } from '../interface/interfaces';
import VoteUser from '../components/voteUser';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../css/wrapper';
import axios from 'axios';
import url, {clientURL} from '../apis/baseURL';

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

const TestVoting = () => {
  //메인화면에서 클릭에 따라 프론트나 백 갖고와서 띄울거
  const [front, setFront] = useRecoilState<UserInfo[]>(frontUserState);
  const [back,setBack] = useRecoilState<UserInfo[]>(backUserState);
  const [voteNum,setVoteNum] = useRecoilState<number[]>(voteNumState);
  const [vote, setVote] = useRecoilState<string>(voteState);
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    const getVoteNumApi = async () =>{
        try{
            await url.get("/api/votes/candidates")
            .then((res)=>{
                console.log(res.data);
                setVoteNum(res.data); // 이부분 가져와서 함 바꿔바야댐 데이터 갖고와서 ㅋ카운트만 꺼내서 저장
                setLoading(false);
            })
        }
        catch (e){
            console.log("에러 : " ,e);
        }
    }
    getVoteNumApi();
  },[]);
  

  const onVote = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (vote !== '999') {
      alert('투표가 완료되었습니다.');
      navigate('/');
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

export default TestVoting;
