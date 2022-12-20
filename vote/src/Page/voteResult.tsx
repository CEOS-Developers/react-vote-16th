import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { UserInfo } from '../interface/interfaces';
import {
  frontUserState,
  backUserState,
  partState,
  clickbtnState,
} from '../state/state';
import { ResultWrapper,VoteResultWrapper } from '../css/wrapper';
import axios from 'axios';

const Rank = styled.div`
  width: 200px;
  height: 60px;
  background-color: #d9d9d9;
  flex-flow: wrap;
  border-radius: 10px;
  margin: 10px;
`;

const Children = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  padding: 15px 0;
  //   .rank {
  //     font-size: 30px;
  //     margin-left: 20px;
  //   }

  .name {
    font-size: 20px;
    margin-left: 20px;
  }

  .vote {
    font-size: 15px;
    margin-right: 20px;
    margin-left: auto;
  }
`;

const VoteResult = () => {
  const [front, setFront] = useRecoilState<UserInfo[]>(frontUserState);
  const [back, setBack] = useRecoilState<UserInfo[]>(backUserState);
  const [part, setPart] = useRecoilState<string>(partState);
  const [res, setRes] = useRecoilState<Boolean>(clickbtnState);
  const token = localStorage.getItem('token');
  // const [sorted,setSorted] = useState<UserInfo[]>();
  // //   const [cnt, setCnt] = useState(1);

  // useEffect(()=>{
  //   if(part === 'Frontend'){
  //     setSorted([...back]);
  //   }
  //   else{
  //     setSorted([...front]);
  //   }
  // },[])
  // //sort하기 전에 spread로 카피
  // //프론트면 프론트 백이면 백 소티드에 넣으면 됨
  // if(sorted !== undefined)
  // sorted.sort((a, b) => b.voteNum - a.voteNum);

  //   useEffect(() => {
  //     for (let i = 1; i < 10; i++) {
  //       if (sorted[i].voteNum !== sorted[i - 1].voteNum) {
  //         setCnt((cur) => cur + 1);
  //         setRank((old) => [...old, cnt]);
  //       } else {
  //         setRank((old) => [...old, cnt]);
  //       }
  //     }
  //     console.log(rank);
  //   }, []);

  axios.defaults.baseURL = 'http://3.38.123.37';
  useEffect(() => {
    const voteResutltAPI = async () => {
      await axios
        .get('/api/votes/candidates/?part=FE', {
          headers: { Authorization: token },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    voteResutltAPI();
  }, []);

  return (
    <VoteResultWrapper>
      <h2>{res?'FE':'BE'} 운영진 투표 결과 🗳</h2>
      <ResultWrapper>
        {res
          ? front.map((user, li) => (
              <Rank key={user.userId}>
                <Children>
                  {/* <div className="rank">{rank[li]}</div> */}
                  <div className="name">{user.userName}</div>
                  {/* <div className="vote">현재 득표수 : {user.voteNum}</div> */}
                </Children>
              </Rank>
            ))
          : back.map((user, li) => (
              <Rank key={user.userId}>
                <Children>
                  {/* <div className="rank">{rank[li]}</div> */}
                  <div className="name">{user.userName}</div>
                  {/* <div className="vote">현재 득표수 : {user.voteNum}</div> */}
                </Children>
              </Rank>
            ))}
      </ResultWrapper>
    </VoteResultWrapper>
  );
};

export default VoteResult;
