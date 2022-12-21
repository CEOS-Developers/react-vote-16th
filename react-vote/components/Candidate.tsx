import { useState, useEffect } from 'react';
import api from '../api';

const Candidate = (candidate: any) => {
  const postCandidates = async (id: any) => {
    try {
      const response = await api.post('/candidates/', {
        id: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickVoteCount = (id: any) => {
    postCandidates(id);
  };

  return (
    <div
      className="candidate"
      onClick={() => handleClickVoteCount(candidate.id)}
    >
      <div>{candidate.name}</div>
      <div>{candidate.vote_count}</div>
      <style jsx>{`
        .candidate {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Candidate;
