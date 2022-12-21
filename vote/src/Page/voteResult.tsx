import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { clickbtnState } from '../state/state';
import { ResultWrapper, VoteResultWrapper } from '../css/wrapper';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';

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
  padding: 18px 0;
  //   .rank {
  //     font-size: 30px;
  //     margin-left: 20px;
  //   }

  .name {
    font-size: 20px;
    margin-left: 20px;
    color: #1e90ff;
  }

  .vote {
    font-size: 15px;
    margin-right: 20px;
    margin-left: auto;
  }
`;

const VoteResult = () => {
  const [res, setRes] = useRecoilState<string>(clickbtnState);
  const token = localStorage.getItem('token');
  const [FEcandidate, setFEcandidate] = useState<string[]>([]);
  const [BEcandidate, setBEcandidate] = useState<string[]>([]);
  axios.defaults.baseURL = 'http://3.38.123.37';
  const FEresultAPI = async () => {
    await axios
      .get('/api/votes/candidates/?part=Frontend&ordering=-count', {
        headers: { Authorization: token },
      })
      .then((response) => {
        setFEcandidate(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const BEresultAPI = async () => {
    await axios
      .get('/api/votes/candidates/?part=BE&ordering=-count', {
        headers: { Authorization: token },
      })
      .then((response) => {
        setBEcandidate(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
      res === 'FE' ? FEresultAPI() : BEresultAPI();
  }, []);

  return (
    <VoteResultWrapper>
      <h2>{res === 'FE' ? 'FE' : 'BE'} 운영진 투표 결과 🗳</h2>
      <Fade >
      <ResultWrapper>
        {res === 'FE'
          ? FEcandidate.map((cand: any) => (
              <Rank key={cand.name}>
                <Children>
                  {/* <div className="rank">{rank[li]}</div> */}
                  <div className="name">{cand.name}</div>
                  <div className="vote">{cand.count}표</div>
                </Children>
              </Rank>
            ))
          : BEcandidate.map((cand: any) => (
              <Rank key={cand.name}>
                <Children>
                  {/* <div className="rank">{rank[li]}</div> */}
                  <div className="name">{cand.name}</div>
                  <div className="vote">{cand.count}표</div>
                </Children>
              </Rank>
            ))}
      </ResultWrapper>
      </Fade>
    </VoteResultWrapper>
  );
};

export default VoteResult;
