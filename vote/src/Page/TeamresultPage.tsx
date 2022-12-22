import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { clickbtnState } from '../state/state';
import { ResultWrapper, VoteResultWrapper } from '../css/wrapper';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';

const Rank = styled.div`
  width: 300px;
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

const TeamresultPage = () => {
  const [res, setRes] = useRecoilState<string>(clickbtnState);
  const token = localStorage.getItem('token');
  const [team, setTeam] = useState<string[]>([]);
  axios.defaults.baseURL = 'http://3.38.123.37';
  const TeamresultAPI = async () => {
    await axios
      .get('/api/votes/teams?ordering=-count',
      {
        headers: { Authorization: token },
      })
      .then((response) => {
        setTeam(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        alert('준비 중입니다.')
      });
  };

  useEffect(() => {
    TeamresultAPI();
  }, []);

  return (
    <VoteResultWrapper>
      <h2>팀 투표 결과 🗳</h2>
      <Fade >
      <ResultWrapper>
        {team.map((cand: any) => (
              <Rank key={cand.name}>
                <Children>
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

export default TeamresultPage;
