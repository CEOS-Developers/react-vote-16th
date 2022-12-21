import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import Candidate from '../../components/Candidate';

const Vote = () => {
  // interface CandidateProps {
  //   id: Number;
  //   name: String;
  //   vote_count: Number;
  // }
  // const [cand, setCand] = useState<CandidateProps[] | null>(null);

  // const fetchCandidates = async () => {
  //   try {
  //     const response = await axios.get('https://www.ceosvote.link/candidates/');
  //     setCand(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCandidates();
  // }, []);

  // console.log(cand);

  const team = 'FE';

  const cand = [
    { id: 1, name: '안채연', position: 'FE', vote_count: 3 },
    { id: 2, name: '오지은', vote_count: 1, position: 'FE' },
    { id: 3, name: '강나연', vote_count: 1, position: 'FE' },
    { id: 4, name: '장영준', vote_count: 2, position: 'FE' },
    { id: 11, name: '안혜진', vote_count: 2, position: 'BE' },
    { id: 12, name: '이정현', vote_count: 3, position: 'BE' },
    { id: 13, name: '채승희', vote_count: 3, position: 'BE' },
    { id: 14, name: '최수현', vote_count: 1, position: 'BE' },
  ];

  return (
    <div>
      <Link
        href={{
          pathname: `/vote/[team]`,
          query: {
            vote_list: JSON.stringify(
              cand.filter((cand) => cand.position === team)
            ),
          },
        }}
        as={`/vote/${team}`}
      >
        FE 투표하기
      </Link>
      <Link
        href={{
          pathname: `/result/FE`,
          query: {
            vote_list: JSON.stringify(
              cand.filter((cand) => cand.position === 'FE')
            ),
          },
        }}
        as={`/result/FE`}
      >
        FE 결과보기
      </Link>
      <Link
        href={{
          pathname: `/vote/[team]`,
          query: {
            vote_list: JSON.stringify(
              cand.filter((cand) => cand.position === team)
            ),
          },
        }}
        as={`/vote/${team}`}
      >
        BE 투표하기
      </Link>
      <Link
        href={{
          pathname: `/result/BE`,
          query: {
            vote_list: JSON.stringify(
              cand.filter((cand) => cand.position === 'BE')
            ),
          },
        }}
        as={`/result/BE`}
      >
        BE 결과보기
      </Link>
      <style jsx>{``}</style>
    </div>
  );
};

export default Vote;
